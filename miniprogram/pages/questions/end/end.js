// pages/questions/end/end.js
const app = getApp()
Page({

  data: {
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      userInfo: app.globalData.userInfo,
      yes: options.yes,
      erron: options.erron
    })
  },
  __goHome: function() {
    wx.navigateBack({
      delta: 3
    })
  }
})