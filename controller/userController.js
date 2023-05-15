const userModel = require('./models/userModel');

//create user register
exports.registerController = async(req,res)=>{
    try {
        
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"error In register  callback",
            sucess:false,
            error
        })
    }
}



//get all user
exports.getAllUsers =()=>{

}

exports.loginController = ()=>{};