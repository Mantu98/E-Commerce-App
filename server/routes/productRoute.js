import Express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { createProductController, deleteProductController, getAllProductController, getSingleProductController, productPhotoController, updateProductController } from "../controllers/productController.js";
import formidable from 'express-formidable';


const router = Express.Router();

// routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)

// get product
router.get('/get-product', getAllProductController);

// single product
router.get('/get-product/:slug', getSingleProductController);

// get photo
router.get('/product-photo/:pid', productPhotoController);

// delete product
router.delete('/delete-product/:pid', deleteProductController);

// update product
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable, updateProductController);

export default router;