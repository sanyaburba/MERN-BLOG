import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


const User = mongoose.model('UserSchema', userSchema);

export default User;