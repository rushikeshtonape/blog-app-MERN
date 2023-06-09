const express = require('express');
const mongoose = require('mongoose');

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
     },
     blogs:[
      {
         type:mongoose.Types.ObjectId,
         ref:'Blog'
      }
     ]

},{timestamp:true});


//for error: Cannot overwrite `User` model once compiled.
mongoose.models = {};

const userModel = mongoose.model.User || mongoose.model('User',userSchema);

module.exports = userModel;