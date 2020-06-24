const Router = require('koa-router')
var router = new Router({});

const { findemoji } = require('../module/emoji')

router.get("/emoji", async (ctx, next) => {

   let JsonEmjio= await findemoji();
   ctx.body =JsonEmjio
  
  })
  
  module.exports={router}