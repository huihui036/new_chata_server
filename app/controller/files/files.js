
var formidable = require('formidable');
class UplodaFlie {
    constructor(paht) { paht = this.paht }
    fliespath(paht) {
        var form = new formidable.IncomingForm();   //创建上传表单
        form.encoding = 'utf-8';        //设置编辑
        form.uploadDir = paht;     //设置上传目录
        form.keepExtensions = true;     //保留后缀
        form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
        return form
    }

}

module.exports= {UplodaFlie}