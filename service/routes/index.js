const userRoute = require('./userRoute');
const articleRoute = require('./articleRoute');
 module.exports = app =>{
    app.use("/user",userRoute)
    app.use("/article",articleRoute)
 }
