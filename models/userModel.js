const express = require('express');
const { default: mongoose } = require('mongoose');

const userSchema = mongoose.Schema({

     username:{
        type : 'string',
        required:[true,"username is required"]
     },
     email:{
        type: 'string',
        required:[true,"email is required"]
     },
     password:{
        type:'string',
        required:[true,"password is required"]
     }

},{timestamp:true});

const userModel = mongoose.model('User',userSchema);

module.exports = userModel;