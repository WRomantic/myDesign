// pages/ photo/ photo.js
import {
  Recommend,
  Video,
  Headlines,
  Game,
  Focus
} from '../../utils/const.js'

Page({

  data: {
    videoArrays: [],
    page: 1, //页数
    news: {
      [Recommend]: {
        page: 1,
        list: []
      },
      [Video]: {
        page: 1,
        list: []
      },
      [Headlines]: {
        page: 1,
        list: []
      },
      [Game]: {
        page: 1,
        list: []
      },
      [Focus]: {
        page: 1,
        list: []
      },
    }, //新闻
    currentType: 521, //新闻类型
  },
  onLoad: function(options) {

    this.__getNewsData(522) //Video
    this.__getNewsData(525) //Recommend
    this.__getNewsData(521) //Headlines
    this.__getNewsData(511) //Game
    this.__getNewsData(518) //Focus
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  __scrollmoreData: async function() {
    this.__getNewsData(this.data.currentType);
  },
  tabClick(e) {
    // 1.根据当前的点击赋值最新的currentType
    let currentType = ''
    switch (e.detail.index) {
      case 0:
        currentType = 521
        break
      case 1:
        currentType = 522
        break
      case 2:
        currentType = 525
        break
      case 3:
        currentType = 511
        break
      case 4:
        currentType = 518
        break
    }
    this.setData({
      currentType: currentType
    })
    // console.log(this.selectComponent('.tab-control'));
    // this.selectComponent('.tab-control').setCurrentIndex(e.detail.index)
    // this.selectComponent('.tab-control-temp').setCurrentIndex(e.detail.index)
  },
  __getNewsData(type) {
    // 1.获取数据对应的页码
    const page = this.data.news[type].page;

    // 2.请求数据
    wx.cloud.callFunction({
      name: 'request',
      data: {
        page,
        type
      }
    }).then(res => {
      // 1.取出数据
      const list = JSON.parse(res.result).data;

      // 2.将数据临时获取
      const news = this.data.news;
      news[type].list.push(...list)
      news[type].page += 1;
      console.log(news)
      // 3.最新的goods设置到goods中
      this.setData({
        news: news
      })
    })
  },


  __onPullDownRefresh: function() {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    setTimeout(function() {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  }
})