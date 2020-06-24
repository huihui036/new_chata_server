const mongoose=require('mongoose');

//链接并创建数据库pp,如果不指定，默认是用自带的admin数据库
//chatadb数据库不存在会自动创建
mongoose.connect('mongodb://localhost:27017/chatadb',{ useNewUrlParser: true, useUnifiedTopology: true },);
 
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
 



 

// //用save保存
