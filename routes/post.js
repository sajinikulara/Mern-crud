const { request } = require('express');
const express = require('express');
const Post = require('../models/post');

const router = express.Router();

//save post
router.post('/posts/save',(req,res)=>{

    let newPost = new Post(request.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            sucess:"Post saved successfully"
        });
    });
});


//get post
router.get('./post',(req,res)=>{
    Post.find().exec((err,post)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            sucess:true,
            existingPost:post
        });
    });
});

//update post
router.put('/post/update/:id',(req,res)=>{
    Post.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                sucess:"Updated successfully"
            });
        }
    );
});


//delete post

router.delete('/post/delete/:id',(req,res)=>{
    Post.findByIdAndRemove(req.params.id).exec((err,deletePost)=>{
        if(err) return res.status(400).json({
            message:"Deleted is unsuccessful",err
        });
        return res.json({
            message:"Deleted successfully",deletePost
        });
    });

});

module.exports = router;