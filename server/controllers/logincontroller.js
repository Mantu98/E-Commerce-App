import { comparePassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();


const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;
        // validation
        if(!email || !password) {
            return res.status(404).json({
                success: false,
                message: 'Invalid email or Password'
            })
        }
        // check User
        const user = await userModel.findOne({email})
        if(!user) {
            return res.status(404).json({
                success: false,
                message: 'Email is not Register'
            })
        }

        const match = await comparePassword(password, user.password)
        if(!match) {
            return res.status(200).json({
                success: false,
                message: 'Invalid Password'
            })
        }

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })
        return res.status(200).json({
            success: true,
            message: 'Login Succesfully',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error in Login',
            error
        })
    }
};

export default loginController;