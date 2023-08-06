const Product = require("../models/productModels");
const ErrorHandler = require("./utils/ErrorHandler");

// Create Product --ADMIN
exports.createProduct = async (req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

// GET ALL PRODUCTS
exports.getAllProducts = async (req,res)=>{

    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
});
}

//GET PRODUCT DETAILS

exports.getProductDetails = async (req,res,next)=>{

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not Found", 404));
    }

    res.status(200).json({
        sucess: true,
        product
    })




}

//UPDATE PRODUCT -- admin
exports.updateProduct = async (req,res,next)=>{

    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            sucess:false,
            message:"Product Not found"
        })
    }

    product  = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runvalidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        sucess: true,
        product
    })

}

//DELETE A PRODUCT --ADMIN

exports.deleteProduct = async(req,res,next)=>{

    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            sucess: false,
            message: "Product Not found"
        })
    }

    await product.deleteOne();

    res.status(200).json({
        sucess: true,
        message:"Product deleted succesfully"
    })
}