const mongoose  = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true,"title is required"]
    },

    description:{
        type: String,
        required:[true,"description is required"]
    },

    image:{
        type: String,
        required:[true,"image is required"]
    }
},{timestamps});

const blogModel = mongoose.model('Blog',blogSchema);
module.exports = blogModel; 