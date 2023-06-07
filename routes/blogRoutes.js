const express = require('express');
const {getAllBlogsController,createBlogController,updateBlogController,getBlogByIdController,deleteBlogController} = require('../controller/blogController')
const router = express.Router();


//routes

//GET /all-blog
router.get('/all-blog' , getAllBlogsController);

//POST /create-blog
router.post('/create-blog', createBlogController);

//PUT /update-blog
router.put('/update-blog/:id',updateBlogController);

//GET /single blog details
router.get('/get-blog/:id', getBlogByIdController);

//DELETE / blog
router.delete('/delete-blog/:id', deleteBlogController);

module.exports = router;