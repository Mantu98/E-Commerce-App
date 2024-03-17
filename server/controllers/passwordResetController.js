
import { verifyOtp, verifyResetToken } from '../services/tokenService.js';
import users from '../models/userModel.js';
import { hashPassword } from '../helpers/authHelper.js';



// password reset controller
const resetPassword = async (req, res) => {
    // const { userOtp } = req.body;
    const { password } = req.body;
    const token = req.params;
// console.log(token)
    try {
        // const userId = await verifyOtp(userOtp);
        const userId = await verifyResetToken(token);
        const user = await users.findById(userId);
    
        if (!user) {
            return res.status(404).json({
                "status": "error",
                "error": {
                  "code": "401",
                  "message": "User not found"
                }
              });
        }

        // Update user's password
        user.password = await hashPassword(password);
        await user.save();

        res.json({
            "status": "success",
            "message": "Password reset successfull"
          });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            "status": "error",
            "error": {
              "code": "401",
              "message": "Internal Server Error"
            }
          });
    }
}

export default resetPassword;