 const {UplodaFlie}= require('./files/files')

const fs = require("fs")

 class Filesupload {
  
    //群头像
    async handPortrait (req) {
        console.log(req)
        let form = await new UplodaFlie().fliespath('./public/head')
      
        return new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) {
                    console.log("头像上传失败")                 
                } else {
                   let path = files.file.path.split('public')[1]
                   console.log(files.file.name);  //--
                    fs.readFile(files.file.path, (err, datas) => {
                        console.log(datas.duration)
                    })
                   console.log(fields.file, )
                   // resolve(path)
                 //  console.log(path)
                    // console.log(names)
                    // 保存到数据库
                }

            })
        })


    }
}

module.exports = {Filesupload}