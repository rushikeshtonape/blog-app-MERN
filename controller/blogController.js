const mongoose = require('mongoose');
const blogModel = require('../models/blogModel');
const userModel = require('../models/usermodel');

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
        const {title,description ,image,user} = req.body;
        if(!title || !description || !image || !user){
            return res.status(401).send({
                success:false,
                message:"please provide all fields"
            })
        }
        const existingUser = await userModel.findById(user);
        if(!existingUser){
            return res.status(404).send({
                success:false,
                message:"unable to find user"
            })
        }
        const newBlog = new blogModel({title,description,image,user})

        // save the blog to the perticular user account in session
        const session = await mongoose.startSession();
        session.startTransaction();
        await newBlog.save({session})
        existingUser.blogs.push(newBlog)
        await existingUser.save({session})
        await session.commitTransaction()

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
       const blog=  await blogModel.findOneAndDelete(req.params.id).populate("user")
       await blog.user.blogs.pull(blog)
       await blog.user.save();
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

//user blog
exports.getUserBlogController= async(req,res)=>{
    try {
        const userBlog = await userModel.findById(req.params.id).populate("blogs");
        if(!userBlog){
            return res.status(404).send({
                success:false,
                message:"can't found user blog with this id"
            })
        }

        return res.status(200).send({
            success:true,
            message:"user blogs"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success:false,
            message:"error while getting user blog",
            error

        })
    }
}