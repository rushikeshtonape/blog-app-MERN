const userModel = require('../models/userModel');

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

        // new user registration
        

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
 
}

exports.loginController = async(req,res)=>{};