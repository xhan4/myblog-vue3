const mongoose = require("./mongoDbConnection");

let UserSchema = mongoose.Schema({
    username:{type:String,unique:true},
    password:{
        type:String,
        required:true,
        set(val){
            return require('bcryptjs').hashSync(val,10);//加密
        }
    },
    user_photo:{type:String},
    email:{type:String},
    mobile:{type:String},
    status:{type:Number,default:1},
    login_time:{
        type:Number
    },
    add_time:{
        type:Number
    },
    user_article:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

let ArticleSchema = mongoose.Schema({
    article_title:{type:String},
    article_content:{type:String},
    article_views:{type:Number},
    article_comment_count:{type:Number},
    article_like_count:{type:Number},
    add_time:{
        type:Number
    },
    article_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Article'
    }
});

const articleModal = mongoose.model("Article",ArticleSchema);
const userModal = mongoose.model("User",UserSchema);

module.exports = {
    articleModal,
    userModal
}