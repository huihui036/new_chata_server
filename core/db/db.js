const mongoose=require('mongoose');
const {
    daname,
    host,
   
  } = require("../../config/config").dbdata
 
//链接并创建数据库chatadb,chatadb数据库不存在会自动创建
mongoose.connect(`${host}${daname}`,{ useNewUrlParser: true, useUnifiedTopology: true },);
//创建一个连接实例
const db=mongoose.connection;
 
//成功则回调
db.on('open',()=>{
    console.log('链接成功-success！')
});
 
//失败则回调
db.on('error',()=>{
    console.log('链接失败！-error')
});
 

