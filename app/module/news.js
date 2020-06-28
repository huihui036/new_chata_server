const mongoose = require('mongoose');
const { newsDict } = require('./schema')

var News = mongoose.model('news', newsDict)

class NewsModel {
    // 聊天记录保存
    newscreat(meassagedata) {
        News.create({
            news_content: meassagedata.news_content,//消息内容
            news_type: "String", //消息类型
            news_senderId: meassagedata.news_senderId,// 发送人id
            news_receiveId: meassagedata.news_receiveId,//接收人数组
            news_times: meassagedata.news_times,//发送时间
            news_statecode: 1001,//消息状态
            news_readlist: "String",//已读消息
            news_replyId: [1, 2],//回复列表
            news_forwardId: 2,// 转发消息ID
            news_commentlist: [1, 2],// 评论列表
            news_tips: [1, 2], // @ 人
            news_friendID: 2, //好友id
            news_belongGroupId: 1,
            news_filesId: 1
        }, (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res)
            }
        })

    }
    // 获取聊天记录---传递消息接收人消息数组
    getmessagedata(uid, fid) {
        return new Promise((resolve, reject) => {
            News.find({
                $or: [{
                    news_senderId: uid,
                    news_friendID: fid
                },
                {
                    news_senderId: fid,
                    news_friendID: uid,
                }
                ]

            }, (err, res) => {
                if (err) {
                    console.log(err)
                } else {
                    resolve(res)
                }
            })
        })

    }
}


module.exports = { NewsModel }