const mongoose = require('mongoose');
const { emjioDict } = require('./schema')
const fs = require('fs')

const Emjiomodel = mongoose.model('emjio', emjioDict)
// 文件读取
async function getdatas() {
    var file = 'static/format.json'
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                ctx.throw(err)
            } else {

                resolve(data)
            }
        });
    })


}

// 保存到数据库
async function uplouada() {
    var data = await getdatas()
    // console.log(data)
    let emojis = JSON.parse(data)
    Emjiomodel.countDocuments({}, (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log(res)
            // 表情个数小于60个进行保存，否则不进行保存
            if (res < 60) {
                emojis.data.forEach(element => {
                    Emjiomodel.create({
                        emjio_id: element.id,
                        emjio_content: element.emoji,
                        emjio_fielsUrl: element.icon,
                    }, (err, res) => {
                        if (err) {
                            console.log("表情包保存错误", err)
                        } else {
                            console.log(res)
                        }
                    })
                })
            }
        }
    })
}

// 表情包查询获取
function findemoji() {
    return new Promise((resolve, reject) => {
        Emjiomodel.find({}, (err, res) => {
            if (err) { console.log("表情包获取失败",err) } else {
                resolve(res)
            }
        })
    })

}


uplouada()

module.exports = { Emjiomodel, findemoji }
