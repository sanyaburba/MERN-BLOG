import User from '../models/User.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const generateToken = (id, email, role) => {
    return jwt.sign(
        {id, email, role },
        process.env.SECRET_KEY,
        {expiresIn: '3h'}
    )
}

export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if (!existingUser) return res.status(404).json({message: "user doesn't exist"});
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) return res.status(400).json({message: "invalid credentials"});
        const token = generateToken(existingUser._id, existingUser.email, existingUser.role);
        res.status(200).json({result: existingUser, token})
    } catch (e) {
        res.status(500).json([{message: "Something went wrong", type:"wertgy"}]);
    }
}


export const registration = async (req, res) => {
    const {email, password, confirmPassword, firstName, lastName, role} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({message: "user already exist"});
        if (password !== confirmPassword) return res.status(400).json({message: "Passwords don't match"});
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({email, role, password: hashedPassword, name: `${firstName} ${lastName}`});
        const token = generateToken(result._id, result.email, result.role);
        res.status(200).json({result, token});
    } catch (e) {
        res.status(500).json({message: "Something went wrong"});
    }
}

export const fetchUsers = async (req, res) => {
    try {
        const users = await User.find().sort({_id: -1});
        res.status(200).json(users)
    } catch (e) {
        res.status(500).json({message: "Something went wrong"});
    }
}