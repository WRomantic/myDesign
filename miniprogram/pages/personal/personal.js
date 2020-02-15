// pages/personal/personal.js
import { getHistory } from '../../service/collection.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ImgBg: "https://772d-w-1314-1257815135.tcb.qcloud.la/bg/orc/%E5%8F%B6%E5%AD%90.jpg?sign=8bb04673232943069eac2364ad6e0ea5&t=1581485415",
  },

  onLoad: function (options) {
    getHistory().then(res => {
        console.log(res);
    })
  }
})