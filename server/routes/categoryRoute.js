import Express from "express";
import {isAdmin, requireSignIn} from './../middleware/authMiddleware.js'
import { allCategoryController, categoryController,  singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";
import {deleteCategoryController} from '../controllers/categoryController.js'

const router = Express.Router();

// routes
// create category
router.post('/create-category', requireSignIn, isAdmin, categoryController);

// update category
router.post('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);

// get all category
router.get('/get-category', allCategoryController);

// single category
router.get('/single-category/:slug', singleCategoryController);

// delete category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController);

export default router;