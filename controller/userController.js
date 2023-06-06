const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
//create user register
exports.registerController = async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        // validation
        if(!username || !email || !password){
            return res.status(404).send({
                success: false,
                message: 'please fill all fields'
            })
        }
        // existing user
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            res.status(401).send({
                success: false,
                message: 'user already exists'
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);
        

        // new user registration
         const user = new userModel({username,email,password:hashedPassword});
         await user.save();
         return res.status(201).send({
            success:true,
            message: 'new user created'
         })
    } catch (error) {
        // console.log(error);
        return res.status(500).send({
            message:"error In register  callback",
            sucess:false,
            error
        })
    }
}



//get all user
exports.getAllUsers = async(req,res)=>{

    try {
        const users = await userModel.findOne({})
        return res.send({
            userCount: users.length,
            success:true,
            message:'all user data',
            users
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message: 'error In getAllUsers callback',
            error
        })
        
    }
 
}

exports.loginController = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email){
            return res.status(401).send({
                success:false,
                message:"please provide a valid email"
            })
        } 
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(201).send({
                success:false,
                message:'email is not registered'
            })
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).send({
                success:false,
                message:'Invalid Username or password'
            })
        }

        return res.status(200).send({
            success:true,
            messsage: "Login Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error in loginController callback',
            error
        })
        
    }
};