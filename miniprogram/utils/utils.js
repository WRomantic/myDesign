// utils/utils.js
//获取图片
export function getImg(sourceType) { //选择图片的来源
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      sourceType: [sourceType],
      success: function (res) {
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
      success: function (res) {
        //console.log(res.data)
        resolve(res.data)
      },
      fail: reject,
    })
  })
}