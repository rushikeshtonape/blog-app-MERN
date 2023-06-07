const mongoose  = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type: 'string',
        required:[true,"title is required"]
    },

    description:{
        type:'string',
        required:[true,"description is required"]
    },

    image:{
        type: 'string',
        required:[true,"image is required"]
    }
},{timestamps:true});

const blogModel = mongoose.model('Blog',blogSchema);
module.exports = blogModel; 