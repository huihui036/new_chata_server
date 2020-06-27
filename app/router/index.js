const Router = require('koa-router')
var router = new Router({});

const { findemoji } = require('../module/emoji')
const { NewsModel } = require('../module/news')
const { Groupmodels } = require('../module/groups')
var newsmodel = new NewsModel()

var groups = new Groupmodels()

router.get("/emoji", async (ctx, next) => {
   let JsonEmjio = await findemoji();
   ctx.body = JsonEmjio
})
// // 
router.get("/news/:uid/:fid", async (ctx, next) => {
   const userdata = ctx.params
   let newsmasssage = await newsmodel.getmessagedata(userdata.fid, userdata.uid)
   ctx.body = newsmasssage
})


router.get("/getgroup/:names", async (ctx,next)=>{
   const userdata = ctx.params
  let listgroups =  await groups.groupfind(userdata.names)
  ctx.body = listgroups
})
router.post("/creatgroup",async(ctx,next)=>{
   const body = ctx.request.body
   body.group_creatTime= Date.now()
   let groupcreat =  await groups.groupcreat(body)
   ctx.body = groupcreat

})

module.exports = { router }