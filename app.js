//引入path内置模块
var path = require('path');
//引入express依赖模块,用来启动静态服务器
var express = require('express');

//实例express
var app = express();

console.log(__dirname);
//拼接物理路径，用来指定虚拟路径的访问（静态页面文件）
var viewsPath = path.join(__dirname,'views');
console.log(viewsPath);
//指定访问页面的路径
app.use('/',express.static(viewsPath));

//拼接物理路径，用来指定虚拟路径的访问（静态页面文件）
var publicPath = path.join(__dirname,'public');
//指定访问页面的路径
app.use('/public',express.static(publicPath));

//监听端口9999,用来启动服务
app.listen(9888,function(){
	console.log('server run at port 9888');
})

module.exports = app;