// pages/personal/historyscan/historyscan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words_result: [],
    scan_pic: [],
    redwine_result: null,
    img: '',
    typedata: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.__getScan(options.id, options.typedata)

  },
  __getScan: async function (_id, typedata) {
    let that = this
    const db = wx.cloud.database()

    if (typedata == "font" || typedata == ""){
      db.collection('z_scanData').where({
        _id
      }).get({
        success: function (res) {
          console.log(res.data[0].scanTxt)
          that.__setData(typedata, res.data[0].scanTxt, res.data[0].fileID)
        },
        fail: console.error
      })
    }else{
      db.collection('z_imgScanData').where({
        _id
      }).get({
        success: function (res) {
          console.log(typedata)
          that.__setData(typedata, res.data[0].scanTxt, res.data[0].fileID)
        },
        fail: console.error
      })
    }
  },

  __setData: function (typedata, scanTxt, scanIng){
    let that = this
    console.log(typedata)
    switch (typedata) {
      case "font":
        {
          that.setData({
            words_result: scanTxt,
            img: scanIng,
            typedata
          })
          break
        }
      case "redwine":
        {
          that.setData({
            redwine_result: scanTxt,
            img: scanIng,
            typedata
          })
          break
        }
      case "subject":
        {
          that.setData({
            redwine_result: scanTxt,
            img: scanIng,
            typedata
          })
          break
        }
      case "accurate_base":
        {
          that.setData({
            words_result: scanTxt,
            img: scanIng,
            typedata
          })
          break
        }
      default:
        {
          that.setData({
            scan_pic: scanTxt,
            img: scanIng,
            typedata
          })
        }
    }
  }
})