// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    console.log(event.img);
    const result = await cloud.openapi.ocr.printedText({
      type: 'photo',
      imgUrl: event.img,
      header: { 'content-type': 'application/x-www-form-urlencoded' }
    })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}