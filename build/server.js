var http = require('http');
const express = require("express");
const proxy = require('http-proxy-middleware');
const app = express();

app.use('/api',function(req,res,next){
    req.headers = {
        "Accept":"*/*",
        "Accept-Encoding":"gzip, deflate, br",
        "Accept-Language":"zh-CN,zh;q=0.9,en;q=0.8",
        "Connection":"keep-alive",
        "Referer":"http://localhost:8080",
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36"       
    }
    next();
});
app.use('/api',proxy({
    target: 'https://api.douban.com/v2/movie',
    // target: 'https://douban.uieee.com/v2/movie',
    changeOrigin: true,
    logLevel:"info",
    pathRewrite: {"^/api" : ""}
   })
);//api子目录下的都是用代理

   app.listen(8080, function(){
    console.log("服务器已经启动http://localhost:8080")
  });