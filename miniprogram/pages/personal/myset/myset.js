// pages/personal/myset/myset.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    circular:false,
    checked: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      checked: app.globalData.circular
    })
  },
  onUnload: function(){
    this.__savaSet(app.globalData.circular, app.globalData.mybg)
  },
  __switch1Change: function (event){
    console.log(event.detail.value)
    app.globalData.circular = event.detail.value
  },
  /**
   * 保存设置数据到数据库
   */
  __savaSet: async function (circular = false, mybg = "") {
    const db = wx.cloud.database();
    const savaSetDatas = await db.collection("z_myset").get()
    const savaSetData = savaSetDatas.data
    console.log(circular)
    if (savaSetData.length) {
      let scanTypeUpdate = await db.collection("z_myset").doc(savaSetData[0]._id).update({
        data: {
          circular,
          mybg
        },
      })
    } else {
      let addData = await db.collection("z_myset").add({
        data: {
          circular,
          mybg
        }
      })
    }
  }
})