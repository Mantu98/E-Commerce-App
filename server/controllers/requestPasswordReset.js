import userModel from "../models/userModel.js";
import otpModel from "../models/otpModel.js";
import { generateOTP, generateResetToken } from "../services/tokenService.js";
import sendPasswordResetEmail from '../services/emailService.js' 
import { hashPassword } from "../helpers/authHelper.js";

const requestPasswordReset = async (req, res) => {
    const email = req.body.email;
    try {
         const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json('User not found');
        }
         
        // const otp = generateOTP();
        const token = await generateResetToken(user._id);
        // const updatedData = await user.updateOne({email:email},{$set:{token:token}});
        const result =  await sendPasswordResetEmail(email, token);
        // const hashedotp = hashPassword(otp);
        // const newuser = await otpModel({email, hashedotp}).save();

        res.json({
            "status": "success",
            "message": "Password reset email sent"
          });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            "status": "error",
            "error": {
              "code": "401",
              "message": "Internal Sever Error"
            }
          });
    }
};

export default requestPasswordReset;