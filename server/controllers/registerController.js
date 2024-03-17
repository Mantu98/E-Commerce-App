import userModle from '../models/userModel.js';
import { hashPassword } from '../helpers/authHelper.js';

 
const registerController = async (req, res) => {
    try {
        const {name, email, password, phone, address} = req.body 
        // validation 
        if(!name || !email || !password || !phone || !address) {
            return res.json({message:'all fileds are requred'})
        }

        // check user
        const existingUser = await userModle.findOne({email});
        
        // existinguser
        if(existingUser) {
            return res.status(200).json({
                success:false,
                message:'Already Register please Login', 
            })
        }

        // register user
        const hashedPassword = await hashPassword(password);

        // save
        const user = await new userModle({name,email, password: hashedPassword,phone,address}).save();

        res.status(201).json({
            success:true,
            message:'User Register Succesfully',
            user,
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Register',
            error
        })
    }
}

export default registerController;