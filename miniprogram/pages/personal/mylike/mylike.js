// pages/personal/mylike/mylike.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: {
      ["Video"]: {
        page: 0,
        list: []
      }
    },
    currentType:"Video"
  },
  onLoad: function(options) {
    this.__findMovice()
  },
  onReachBottom: function () {
    this.__findMovice()
  },
  __findMovice: function() {
    const db = wx.cloud.database()
    const page = this.data.news["Video"].page
    console.log(page)
    db.collection('z_likemovice').skip(page * 10).limit(10).get().then(res => {
      let news = this.data.news
      news["Video"].list.push(...res.data)
      news["Video"].page ++
      console.log(news["Video"].page)
      this.setData({
        news
      })
    })
  }
})