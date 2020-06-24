const {Emjiomodel} = require("./app/module/emoji")

// let emjios=new Emjiomodel({

//   emjio_id:2,
//   emjio_content:"String",
//   emjio_fielsId:1,

// });

// //用save保存  
// emjios.save().then(()=>{
//   console.log('success-save');
// }).catch(()=>{
//   console.log('error-save');
// });


// 修改数据库
function update(){
  var wherestr = {'emjio_id':2}
  var updatas={'emjio_content':"Stri---ng"}
  Emjiomodel.update(wherestr,updatas,function(err,res){
if(err){
  console.log(err)
}else{
  console.log(res)
}
  })
}

// 删除

function delet(){
  var wherestr = {'emjio_id':2}
  Emjiomodel.remove(wherestr,function(err,res){
   if(err){
    console.log(err)
   }else{
     console.log(res)
   }
  })
}

//查询

function finde(){
  var wherestr = {'emjio_id':2}
  Emjiomodel.find(wherestr,(err,res)=>{
    if(err){
      console.log(err)
    }else{
      console.log(res)
    }
  })
}

// 数量查询

function getCountByConditions() {

 // var wherestr = {'emjio_id':2}
  Emjiomodel.count({}, function(err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res); // 会输出数据库数据的数量
    }
  });
}

update()
//delet()
finde()
getCountByConditions()