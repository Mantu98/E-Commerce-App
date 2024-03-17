import Express from "express";
import registerController from '../controllers/registerController.js';
import loginController from "../controllers/logincontroller.js";
import requestPasswordReset from "../controllers/requestPasswordReset.js";
import resetPassword from "../controllers/passwordResetController.js";
import testController from "../controllers/testController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";


// router object 
const router = Express.Router();

// routing
// REGISTER
router.post('/register', registerController);

// login
router.post('/login', loginController);

// forget password
router.post('/forgotPassword', requestPasswordReset);

// test controller
router.get('/test',requireSignIn ,isAdmin ,testController);

router.post('/resetPassword/:token', resetPassword);

// protected rout auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).json({ok:true});
});

router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).json({ok:true});
});

export default router;