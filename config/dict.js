//  表情包
emjioDict = {
    emjio_id: Number,
    emjio_content: String,
    emjio_fielsId: Number,
}
// 文件
filesDict = {
    files_id: Number,
    files_names: String,
    files_url: String,
    files_uploadUser: String,
    files_uploadTime: String,
    files_stateCode: Number,
    files_hash: String,
    files_thumbnailUrl: String // 缩略图
}

// 群组
Groupdict = {
    group_name: String,
    creat_time: String,
    creat_userId: Number,
    administrator_Id: Number,
    company: String,
    member_ID: Number,
    introduction: String,
    notice: String,
    headportrait: String,
    type: String,
    statecode: Number,
}

// 消息
newsDict = {
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
}


module.exports = {
    emjioDict,
    filesDict,
    Groupdict,
    newsDict
}