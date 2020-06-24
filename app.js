
const Koa = require('koa')
const app = new Koa()
var cors = require('koa-cors');

var db = require("./core/db/db");

//var group = require("./app/module/groups")
var news = require("./app/module/news")

var ws = require("./webscoket/webscoket")
const paraser = require('koa-bodyparser')



const InitManager = require('./core/init')



app.use(paraser())
InitManager.initCore(app)


//静态资源
const staticFiles = require('koa-static')
const path = require('path')


app.use(staticFiles(path.resolve(__dirname, "./public")))



var emjios = require('./app/module/emoji')




app.listen(3001)