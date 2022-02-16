import User from '../models/User.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if (!existingUser) return res.status(404).json({message: "user doesn't exist"});
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) return res.status(400).json({message: "invalid credentials"});

        const token = jwt.sign({
                email: existingUser.email,
                id: existingUser._id
            },
            'alexander',
            {expiresIn: '1h'});

        res.status(200).json({result: existingUser, token})
    } catch (e) {
        res.status(500).json({message: "Something went wrong"});
    }
}

export const registration = async (req, res) => {
    const {email, password, confirmPassword, firstName, lastName} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({message: "user already exist"});
        if (password !== confirmPassword) return res.status(400).json({message: "Passwords don't match"});
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});
        const token = jwt.sign({
                email: result.email,
                id: result._id
            },
            'alexander',
            {expiresIn: '1h'});

        res.status(200).json({result, token});
    } catch (e) {
        res.status(500).json({message: "Something went wrong"});
    }
}