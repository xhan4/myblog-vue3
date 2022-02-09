const express = require('express');
const app = express();
const routes = require("./routes");
const config =require('./config');

//express 设置允许跨域访问  app.all可以接受任何类型的请求
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,X-File-Name,authorization");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Cache-Control", "no-store");
  if (req.method == 'OPTIONS') {
      res.sendStatus(200).end();
  } else {
      next();
  }
});

app.use(express.json());
routes(app);

app.listen(config.port,()=>{
    console.log(`Express server listening at http://localhost:${config.port}`)
})

module.exports = app;
