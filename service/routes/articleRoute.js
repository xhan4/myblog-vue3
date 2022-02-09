const express = require('express');
const route = express.Router();
const {userModal,articleModal} = require('../modals')
const { auth } = require('../content/untils');

//查询所有的文章
route.get("/queryAll",async (req,res)=>{
        
 })
 
 //添加一篇文章
 route.post("/add",auth,async (req,res) =>{
  const article = await articleModal.create({
    article_title:req.body.title,
    article_content:req.body.content,
    article_views:req.body.views||0,
    article_comment_count:req.body.comment_count||0,
    article_like_count:req.body.like_count||0,
    add_time:new Data(),
    article_user:req.user._id
   })
   if(!article){
    res.send({
       code:200,
       message:'添加失败！'
    }) 
   }else{
    userModal.updateOne({ _id:req.user._id}, { $set: {user_article :article._id} }, (err,data) => {
      if (!err) {
        res.send({
          code:200,
          message:'添加成功！'
       })
      }
    });
   } 
 })
 
 //更新一篇文章
 route.post('/updata',async(req,res)=>{
 
 })
 
 //删除一篇文章
 route.post('/delete',async (req,res)=>{
  
 })
 
 module.exports = route;