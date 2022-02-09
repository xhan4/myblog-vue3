const mongoose = require('mongoose');
const config = require('../config');

//连接数据库
mongoose.connect(config.dburl).then(res=>{
     console.log("远程数据库连接成功~")
}).catch(err=>{
    console.log("数据库连接失败"+err);
})

module.exports = mongoose;

