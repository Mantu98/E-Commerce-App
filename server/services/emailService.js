
import nodemailer from 'nodemailer';

// send otp
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mantu07941@gmail.com',
        pass: 'shgk ybwp mwap fhop'
       
    }
});

async function sendPasswordResetEmail(email, token) {
    // console.log(email)
    const mailOptions = {
        // Configure mail options
        from: 'mantu07941@gmail.com',
        to: email,
        subject: 'Password Reset',
        text: `http://localhost:5173/api/v1/auth/resetPassword/${token}`
    };

    try {
       const result = await transporter.sendMail(mailOptions);
       if(result) {
        console.log('Password reset email sent');
       }
        
    } catch (error) {
        console.error('Error sending password reset email:', error);
        throw error;
    }
}

export default sendPasswordResetEmail;