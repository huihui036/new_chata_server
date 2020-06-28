const Router = require('koa-router')
var router = new Router({});
const { findemoji } = require('../module/emoji')
const { NewsModel } = require('../module/news')
const { Groupmodels } = require('../module/groups')
const { Filesupload } = require("../../app/controller/uploadfiles")
const { HttpException } = require('../../core/http-exception')

var filesupload = new Filesupload()
var newsmodel = new NewsModel()

var groups = new Groupmodels()

// 获取表情包
router.get("/emoji", async (ctx, next) => {
   let JsonEmjio = await findemoji();
   if (JsonEmjio && JsonEmjio.length > 0) {
      ctx.body = JsonEmjio
   } else {
      const error = new HttpException('表情包获取失败', 1001, 404)
      throw error
   }

})


//  获取聊天记录
router.get("/news/:uid/:fid", async (ctx, next) => {
   const userdata = ctx.params
   let newsmasssage = await newsmodel.getmessagedata(userdata.fid, userdata.uid)
   ctx.body = newsmasssage

})


// 获取群信息
router.get("/getgroup/:names", async (ctx, next) => {
   const userdata = ctx.params
   let listgroups = await groups.groupfind(userdata.names)
   if (listgroups.length < 1) {
      const error = new HttpException('不存在该群，请重新查找', 1001, 403)
      throw error
   } else {
      ctx.body = listgroups
   }
})


// 创建群
router.post("/creatgroup", async (ctx, next) => {
   const body = ctx.request.body
   body.group_creatTime = Date.now()
   let groupcreat = await groups.groupcreat(body)
   //let a =  await filesupload.handPortrait(ctx.req)
   if (groupcreat && groupcreat.group_creatTime) {
      ctx.body = groupcreat
   } else {
      const error = new HttpException('参数错误', 1001, 401)
      throw error
   }
})

module.exports = { router }