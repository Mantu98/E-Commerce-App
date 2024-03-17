import mongoose from "mongoose";

// schema for storing otp for resseting password by user email validation 
const reset_password=new mongoose.Schema({
    owner:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"User",
     required:true
    },
    otp:{
     type:String,
     required:true
    },
    date_created:{
     type:Date,
     default:Date.now()
    },
    date_expires:{
     type:Date,
     default:Date.now()
    }
 
 })

const userModel = mongoose.model('user', reset_password);

export default userModel;