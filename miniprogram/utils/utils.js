// utils/utils.js
//获取图片
export function getImg(sourceType) { //选择图片的来源
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      sourceType: [sourceType],
      success: function(res) {
        console.log(res)
        resolve(res)
      },
      fail: reject,
    })
  })
}
//获取Base64
export function getBase64(resSrc) {
  return new Promise((resolve, reject) => {
    wx.getFileSystemManager().readFile({
      filePath: resSrc.tempFilePaths[0], // 选择图片返回的相对路径
      encoding: 'base64', // 编码格式
      success: function(res) {
        //console.log(res.data)
        resolve(res.data)
      },
      fail: reject,
    })
  })
}
//获取当天的时间
export function getToday() {
  let myDate = new Date(); //获取系统时间

  const YEAR = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
  const Month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
  const Day = myDate.getDate(); //获取当前日(1-31)
  // return myDate.toLocaleDateString()
  return `${YEAR}/${Month}/${Day}`
}
/**
 * 判断是否为同一天
 */
export function timeIsEqual(time) {
  return new Date(time).toDateString() == new Date().toDateString()
}

