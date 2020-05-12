// pages/sort/sort.js
const app = getApp()
import {
  SORT_INDEXDATAS,
  SORT_Arr
} from '../../utils/constdata.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scanBool: false,
    sortArr: SORT_Arr,
    indexDatas: SORT_INDEXDATAS
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  btnScan: function(e) {
    // console.log(e.detail.sortmyindex)
    // console.log(e.detail.sortType)
    const sortmyindex = e.detail.sortmyindex
    const sortType = e.detail.sortType
    this.setData({
      scanBool: true,
      indexData: this.data.indexDatas[sortType][sortmyindex]
    })
  },
  flostBool: function(e) {
    this.setData({
      scanBool: false
    })
  },
})