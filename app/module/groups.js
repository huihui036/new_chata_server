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
            group_onlineuser: [1, 2, 3],

        });
        //用save保存
        Group.save().then(() => {
            console.log('success-save');
        }).catch(() => {
            console.log('error-save');
        });

    }
    //查找群
    groupfind(memberList) {
        return new Promise((resolve, reject) => {
            Groupmodel.find({ group_memberListID: memberList }, (err, res) => {
                if (err) {
                    console.log("查找失败", err)
                } else {
                    resolve(res)
                }
            })
        })
    }
    // 创建群
    groupcreat(Gropudata) {
        console.log("====", Gropudata)
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

    // 计算组组个数 实现id 自增
    getconte() {
        return new Promise((reslove, reject) => {
            Groupmodel.countDocuments({}, (err, res) => {
                if (err) {
                    reslove(0)
                } else {
                    reslove(res + 1)
                }
            })

        })
    }


    // 修改在线人员数组

    // 添加
    grouponlieAdd(id, senderId) {
        var wherestr = { 'group_memberListID': [1, 2] }
        console.log("---")
        return new Promise((resolve, reject) => {
            Groupmodel.updateOne({ _id: id }, {
                '$push': {
                    group_onlineuser: [senderId]
                }
            }, (err, res) => {
                if (err) {
                    resolve("添加在线失败")
                } else {
                    console.log(res)
                    resolve(res)
                }

            })

        })

    }

    grouponLineremove(id, senderId){
        Groupmodel.updateOne({_id: id},{
            $pull:{
                group_onlineuser: senderId
            }
        },(err,res)=>{
            if(err){
                console.log("删除失败");
                
            }else{
                console.log("-------",res)
            }
        })
    }

}

module.exports = { Groupmodels }

