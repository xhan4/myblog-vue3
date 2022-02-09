const express = require('express');
const route =express.Router();
const {userModal} = require('../modals');
const { auth,getToken} = require('../content/untils');



//用户注册
route.post('/register',async(req,res)=>{
     const findUser = await userModal.findOne({
      username:req.body.username,
     })
     if(findUser){
         res.send({
            code:200,
            message:'用户已存在'
         })
     }else{
      const user = await userModal.create({
         username:req.body.username,
         password:req.body.password,
         mobile:req.body?.mobile,
         status:req.body?.status,
         add_time:req.body?.add_time,
        })
        if(!user){
         res.send({
            code:200,
            message:'注册失败！'
         }) 
        }
         res.send({
            code:200,
            message:'注册成功！'
         })
     }
     
})


//用户登录
route.post('/login',async(req,res)=>{
      const user = await userModal.findOne({
         username:req.body.username,
        })
      if(!user){
         return res.send({
            code:422,
            message:'用户名不存在！'
         })
      }
   const isPasswordValid = require('bcryptjs').compareSync(req.body.password,user.password);
   if(!isPasswordValid){
      return res.send({
         code:422,
         message:'密码错误，请重新输入。'
      })
   }

   res.send({
      user,
      token:getToken(user._id)
   })
})

//个人信息
route.get('/profile',auth,async(req,res)=>{
   res.send(req.user);
})

module.exports = route;