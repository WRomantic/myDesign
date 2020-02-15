import {
  baseURL,
  timeout
} from './config.js'

//options请求的是一个对象
function request(options) {
  //showLoading弹出加载图标，和wx.hideLoading()一起使用“取消加载图标”
  wx.showLoading({
    title: '数据加载中',
  })

  //返回一个对象
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method,
      timeout: timeout,
      header: options.header,
      data: options.data,
      success: function (res) {
        resolve(res.data)
      },
      fail: reject,
      complete: res => {
        wx.hideLoading()    //wx.hideLoading()一起使用“取消加载图标”
      }
    })
  })
}

export default request;