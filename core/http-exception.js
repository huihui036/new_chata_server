class HttpException extends Error {
  constructor(msg = '服务器异常', errorCrcode = 1001, code = 400) {
    super()
    this.msg = msg
    this.errorCrcode = errorCrcode
    this.code = code
  }
}


module.exports = {
  HttpException,

}