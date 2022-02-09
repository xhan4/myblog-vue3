const config = require('../config');
const jwt = require('jsonwebtoken');
const {UserModal} = require('../modals');

  //生成token
  const getToken =(id)=>{
   return jwt.sign({
      id:String(id)
   },config.secretOrPrivateKey)
  } 

 //中间件
const auth =  (req,res,next)=>{
    const raw = String(req.headers.authorization).split(" ").pop();
    jwt.verify(raw, config.secretOrPrivateKey, async(err, decoded)=>{
       if (err) {
         return res.send({ code: "404", msg: "token无效" });
       }
       req.user = await UserModal.findById(decoded.id);
       next()
    })
 }
module.exports={
    getToken,
    auth
}