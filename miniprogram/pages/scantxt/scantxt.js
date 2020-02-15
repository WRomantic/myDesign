// pages/scantxt/scantxt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words_result:[],
    img:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(JSON.parse(options.scan).words_result)
    this.setData({
      words_result: JSON.parse(options.scan).words_result,
      img: JSON.parse(options.scaning)
    })
  }
})