const { Schema } = require("mongoose")

//  表情包
var emjioDict = new Schema({
    emjio_id: Number,
    emjio_content: String,
    emjio_fielsUrl: String
})


// 群组
var groupDict = new Schema({
    // 群名称
    group_name: {
        type: String,

    },
    //创建人id
    group_creatUserId: {
        type: Number,
        required: true
    },
    //群头像
    group_headportrait: {
        type: String,

    },
    group_creatTime: String,
    group_administratorId: Array,
    group_company: String,
    group_memberListID: Array,
    group_introduction: String,  // 简介
    group_notice: String,
    group_type: String,
    group_statecode: Number,
})

// 聊天室
var ChatclassDict = new Schema({
    chatclass_names: Array,

})



// 消息
var newsDict = new Schema({
    news_id: {
        type: Number,
        default: 0,

    }, // id
    news_content: String,//消息内容
    news_type: String, //消息类型
    news_senderId: Number,// 发送人id
    news_receiveId: Array,//接收人
    news_times: String,//发送时间
    news_statecode: Number,//消息状态
    news_readlist: String,//已读消息
    news_replyId: Array,//回复列表
    news_forwardId: Number,// 转发消息ID
    news_commentlist: Array,// 评论列表
    news_tips: Array, // @ 人
    //加
    news_belongGroupId: Number,
    news_filesId: Number
})

// 文件
var filesDict = new Schema({
    fils_id :{
        type: Number,

    },
    file_names: {
        type: String,
        required: true
    },
    file_urls: {
        type: String,
        required: true
    },
    file_userID: {
        type: Number,
        required: true
    },
    file_uploadTime: {
        type: String,

        default: Date.now
    },
    file_stateCode: {
        type: Number,
        enum: [1001, 1002, 1003],
        default: 10001

    },
    files_hash: {
        type: String,
        required: true
    },
    files_thumbnailUrl: {
        type: String,
    },


})

var recentChatDist = new Schema({
    chat_userId: String,
    chat_groupId: String,
    chat_userId: String

})






module.exports = {
    emjioDict,
    filesDict,
    groupDict,
    newsDict,
    ChatclassDict,
    recentChatDist
}