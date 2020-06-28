
const Koa = require('koa')
const app = new Koa()
var cors = require('koa-cors');

var db = require("./core/db/db");


var ws = require("./webscoket/webscoket")
const paraser = require('koa-bodyparser')


const InitManager = require('./core/init')

// 错误处理
const Middlewares = require('./middlewares/exception')
app.use(Middlewares)

app.use(paraser())
InitManager.initCore(app)

//静态资源
const staticFiles = require('koa-static')
const path = require('path')


app.use(staticFiles(path.resolve(__dirname, "./public")))

//var chatclass = require("./app/module/chatclass")

app.listen(3001)