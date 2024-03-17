import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from 'fs';

export const createProductController = async (req, res) => {
    try {
        const {name, slug, description, price, category, quantity, shiping} =req.fields
        const {photo} = req.files
        // validation
        if(!name || !description || !price || !category || !quantity) {
            res.status(500).json({error:'Empty fields are required'});
        }
        if(photo && photo.size > 1000000) {
             res.status(500).json({error:'Photo is required and should be less then 1mb'});
        }
        const products = await productModel({...req.fields, slug:slugify(name)});
        if(photo) {
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save();
        res.status(201).json({
            success:true,
            message:"product created successfully",
            products,
        })
    } catch (error) {
        console.log(error);
         res.status(500).json({
            success:false,
            message:'Error in creating product',
        })
    }
};

// get all product
export const getAllProductController = async(req, res) => {
    try {
        const products = await productModel.find({}).populate('category').select("-photo").limit(12).sort({createdAt:-1});

        res.status(200).json({
            success:true,
            totalCount: products.length,
            message:"All product",
            products,
        })

    } catch (error) {
        console.log(error);
         res.status(500).json({
            success:false,
            message:'Error in getting all product',
            error:error.message
        })
    }
}

// single product
export const getSingleProductController = async(req, res) => {
    try {
         const product = await productModel.findOne({}).populate('category');
         res.status(200).json({
            success:true,
            message:"Single product Fetch",
            product,
        })

    } catch (error) {
        console.log(error);
         res.status(500).json({
            success:false,
            message:'Error in getting single product',
            error:error.message
        })
    }
};

// get photo
export const productPhotoController = async(req, res) => {
    try {
        const product = await productModel.findById(req.params.pid).select("photo");
        if(product.photo.data) {
            res.set('content-type', product.photo.contentType);
            return res.status(200).json(product.photo.data);
        }

    } catch (error) {
        console.log(error);
         res.status(500).json({
            success:false,
            message:'Error in getting product photo',
            error:error.message
        })
    }
}

// delete product
export const deleteProductController = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      message: "Product Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting product",
      error,
    });
  }
};

// update product
export const updateProductController =async(req, res) => {
    console.log("hi")
    try {
        const {name, slug, description, price, category, quantity, shiping} =req.fields
        const {photo} = req.files
        // validation
        
        if(!name || !description || !price || !category || !quantity) {
            res.status(500).json({error:'Empty fields are required'});
        }
        if(photo && photo.size > 1000000) {
             res.status(500).json({error:'Photo is required and should be less then 1mb'});
        }
         const products = await productModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    
        if(photo) {
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save();
        res.status(201).json({
            success:true,
            message:"product updated successfully",
            products,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
        success: false,
        message: "Error in updating product",
        error,
        });
    }
}