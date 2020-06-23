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
 
//创建一个模型类，P相当于类名 dict里面的键名就是类属性名
//有点特殊的就是不能直接用括号里的P,而是赋值给另外一个变量或者是常量
//然后用P实例一个对象p并赋值，也可以用p.属性名来赋值
// const P=mongoose.model('Per',dict)
// let p=new P({name:'mimi',age:128,pwd:'123434'});


 

// //用save保存
