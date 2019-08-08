/**
*  AWEB Node.js Static Server
*  version:6.0.0
*  author:lijiancheng@agree.com.cn
*  date:2018/12/21
* 
*  */
// Local Server Path
const PORT = '12345';

// Dependences
const Koa = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body');
const cors = require('koa-cors');


//热搜
require('./module/v1/hot')(router);

//app
const app = new Koa();
app.use(cors());

//parser
app.use(koaBody());

app.use(router.routes());

app.listen(PORT, () => console.log(`启动项目：http://localhost:${PORT} 成功！`));