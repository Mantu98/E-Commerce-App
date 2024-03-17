import otpGenerator from 'otp-generator';
import JWT, { decode } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export async function generateResetToken(userId) {
    // Generate token
    const token = await JWT.sign({userId}, process.env.JWT_SECRET, {expiresIn: "5m"});
    return token;
}

export async function verifyResetToken(token) {
    // Verify token
    try {
        // Verify the token using the secret key
        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        // Extract the user ID from the decoded token
        const userId = decoded.userId;
        return userId;
    } catch (error) {
        // If token verification fails throw an error
        throw new Error('Invalid or expired token');
    }
}

export function generateOTP() {
    return otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
}

export async function verifyOtp(userOtp) {
    try {
        const decoded = JWT.verify(userOtp);
        const userId = decoded.userId;
        return userId;

    } catch (error) {
        throw new Error('Invalid or expired OTP');
    }
}