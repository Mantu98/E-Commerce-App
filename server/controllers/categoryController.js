import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const categoryController = async(req, res) => {
    try {
        const {name} = req.body
        if(!name) {
            return res.status(401).json({message: 'Name is Required'})
        }
        const existingCategory = await categoryModel.findOne({name})
        if(existingCategory) {
            return res.status(200).json({
                success:true,
                message:'Category Already Exisists'
            })
        }
        const category = await new categoryModel({name, slug:slugify(name)}).save()
        res.status(201).json({
            success:true,
            message:'new category created',
            category
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            error,
            message:'error in category'
        })
    }
};

// update category
export const updateCategoryController = async (req, res) => {
    try {
        const {name} = req.body
        const {id} = req.params
        const category = await categoryModel.findByIdAndUpdate(id, {name, slug:slugify(name)}, {new:true});

         res.status(200).json({
            success:true,
            message:'category update successfully',
            category,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            error,
            message:'error while updating category'
        })
    }
};

// all category
export const allCategoryController = async(req, res) => {
    try {
        const category = await categoryModel.find({});
         res.status(200).json({
            success:true,
            message:'All category List',
            category,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            error,
            message:'error while geting all category'
        })
    }
};

// single category
export const singleCategoryController = async(req, res) => {
    try {
         const category = await categoryModel.findOne({slug:req.params.slug});
         res.status(200).json({
            success:true,
            message:'Get single category succesfully',
            category,
        });

    } catch (error) {
        console.log(error);
         res.status(500).json({
            success:false,
            error,
            message:'error while geting single category'
        })
    }
};

// delete category
export const deleteCategoryController = async(req, res) => {
    try {
        const {id} = req.params;
        await categoryModel.findByIdAndDelete(id);
         res.status(200).json({
            success:true,
            message:'category deleted succesfully',
        });

    } catch (error) {
        console.log(error);
         res.status(500).json({
            success:false,
            error,
            message:'error while delete category'
        })
    }
};