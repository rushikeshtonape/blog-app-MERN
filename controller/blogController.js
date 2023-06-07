const blogModel = require('../models/blogModel');

//getallblog 
exports.getAllBlogsController = async(req,res)=>{
try {
    const blogs = await blogModel.find({});
    if(!blogs){
        return res.status(200).send({
            blogCount: blogs.length,
            success:false,
            message:'No blog found'
        })
    }
    return res.status(200).send({
        success:true,
        message:"All blog Lists"
    })
    
} catch (error) {
    console.error(error);
    return res.status(500).send({
        success:false,
        message: "error in blog",
        error
    })
    
}
}

//create blog
exports.createBlogController = async(req,res)=>{
    try{
        const {title,description ,image} = req.body;
        if(!title || !description || !image){
            return res.status(401).send({
                success:false,
                message:"please provide all fields"
            })
        }
        const newBlog = new blogModel({title,description,image})
        await newBlog.save();

        return res.status(201).send({
            success:true,
            message:"blog created successfully",
            newBlog    
        })


    }catch(error){
        console.error(error);
        return res.status(500).send({
            success:false,
            message: "error while creating blog"
        })
    }
}

//update blog
exports.updateBlogController= async(req,res)=>{
    try {
        const {id} = req.params;
        const {title,description,image} = req.body;
        const blog = await  blogModel.findByIdAndUpdate(id,{...req.body},{new:true})
        return res.status(200).send({
            success:true,
            message:"blog updated successfully,",
            blog
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success:false,
            message:"error while updating blog",
            error
        })
        
    }
}

//get single blog
exports.getBlogByIdController= async(req,res)=>{
    try {

        const {id} = req.params;
        const blog = await blogModel.findById(id);
        if(!blog){
            return res.status(404).send({
                success:false,
                message:"blog can't find with this id"
            })
        }

        return res.status(200).send({
            success:true,
            message:"fetch blog successfully",
            blog
        })
        
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success:false,
            message:"error while get single blog",
            error

        })
    }
}

//delete blog
exports.deleteBlogController= async(req,res)=>{
    try {
        await blogModel.findOneAndDelete(req.params.id)
        return res.status(200).send({
            success:true,
            message:"delete blog successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success:false,
            message:"error while deleting blog",
            error
        })
        
    }
}