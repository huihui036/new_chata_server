const mongoose = require('mongoose');

const { groupDict } = require('./schema')

const Groupmodel = mongoose.model('group', groupDict)
class Groupmodels {
    groupcreatcs() {
        let Group = new Groupmodel({
            group_name: "001群",
            group_creatTime: '20200625',
            group_creatUserId: 1,
            group_administratorId: [2, 3],
            group_company: '本能管家',
            group_memberListID: [1, 2, 3, 4, 5, 6, 7],
            group_introduction: "简介简介简介",  // 简介
            group_notice: '公告---公告',
            group_headportrait: 'htts://xxx.xx.群头像图片链接',
            group_type: "闲聊类型",
            group_statecode: 1001,
         
        });
        //用save保存
        Group.save().then(() => {
            console.log('success-save');
        }).catch(() => {
            console.log('error-save');
        });

    }
    //查找群
    groupfind(group_name) {
        return new Promise((resolve, reject) => {
            Groupmodel.find({ group_name }, (err, res) => {
                if (err) {
                    console.log("查找失败",err)
                } else {
                    console.log(res)
                    resolve(res)
                }
            })
        })
    }
    // 创建群
    groupcreat(Gropudata) {
        return new Promise((resolve, reject) => {
            Groupmodel.create(Gropudata, (err, res) => {
                if (err) {
                    resolve("群创建失败")
                } else {
                    resolve(res)
                }
            })
        })
    }

}

module.exports = { Groupmodels }

