const mongoose = require('mongoose');

const connectDB = async () => {
    try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to Mongoose Database ${mongoose.connection.host}`.bgMagenta.white);
    }catch(error){
        console.log(`Mongo connect ${error} error`.bgRed.white)
    }
}

module.exports = connectDB;