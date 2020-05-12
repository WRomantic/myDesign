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
    currentType: 522, //新闻类型
    playIndex: -1
  },
  onLoad: function(options) {

    this.__getNewsData(522) //Video
    // this.__getNewsData(525) //Recommend
    // this.__getNewsData(521) //Headlines
    // this.__getNewsData(511) //Game
    // this.__getNewsData(518) //Focus
  },
  onReady: function() {},
  //用户下拉加载更多
  onPullDownRefresh: function() {
    this.__onPullDownRefresh(this.data.currentType)
  },
   //用户上拉加载更多
  onReachBottom: function() {
    this.__scrollmoreData()
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
      console.log(res)
    })
  },

  /**
   * 上啦加载数据
   */
  __onPullDownRefresh: function(type) {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    const page = 1; // 1.获取数据对应的页码

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
      news[type].list = list
      news[type].page += 1;
      console.log(news)
      // 3.最新的goods设置到goods中
      this.setData({
        news: news,
        playIndex:-1
      })
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    })
  }
})