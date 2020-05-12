// pages/personal/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyData: {
      font: {
        page: 0,
        list: []
      },
      animal: {
        page: 0,
        list: []
      },
      plant: {
        page: 0,
        list: []
      },
      redwine: {
        page: 0,
        list: []
      },
      food: {
        page: 0,
        list: []
      },
      scene: {
        page: 0,
        list: []
      },
      accurate_base: {
        page: 0,
        list: []
      },
      car: {
        page: 0,
        list: []
      },
    },
    typedata: "font",
    itemArr: ["文字", "高精度版", "动物", "植物", "红酒", "菜品", "场景", "车辆"]
  },
  onLoad:async function(options) {
     this.__getScan("z_scanData", "font", 0)
     this.__getScan("z_scanData", "accurate_base", 0)
     this.__getScan("z_imgScanData", "animal", 0)
     this.__getScan("z_imgScanData", "plant", 0)
     this.__getScan("z_imgScanData", "redwine", 0)
     this.__getScan("z_imgScanData", "food", 0)
     this.__getScan("z_imgScanData", "scene", 0)
     this.__getScan("z_imgScanData", "car", 0)
     wx.hideLoading()  //errMsg":"hideLoading:fail:toast can't be found"
  },

  /**
   * 底部加载更多
   */
  __scrollmoreData: async function() {
    const typedata = this.data.typedata
    const page = this.data.historyData[typedata].page

    if (typedata == "font" || typedata == "accurate_base") {
      this.__getScan("z_scanData", typedata, page)
    } else {
      this.__getScan("z_imgScanData", typedata, page)
    }
    wx.hideLoading()  //errMsg":"hideLoading:fail:toast can't be found"
  },

  /**
   * 获取网络请求的历史数据
   */
  __getScan: async function(collections, typedata, page) {
    const db = wx.cloud.database();
    wx.showLoading({
      title: '加载',
    })
    //获取的历史数据
    console.log(collections + typedata + page)
    try {
      let getScantxt = await db.collection(collections).where({
        typedata
      }).skip(page * 10).limit(10).get()
      const historyData = this.data.historyData;

      historyData[typedata].list.push(...getScantxt.data) //将新数据加到historyData中
      historyData[typedata].page += 1
      console.log(historyData)
      this.setData({
        historyData
      })

      
    } catch (e) {
      console.log(e)
    }
  },
  tabClick(e) {
    // 1.根据当前的点击赋值最新的currentType
    let typedata = ''
    console.log(e.detail.index)
    switch (e.detail.index) {
      case 0:
        typedata = "font"
        break
      case 1:
        typedata = "accurate_base"
        break
      case 2:
        typedata = "animal"
        break
      case 3:
        typedata = "plant"
        break
      case 4:
        typedata = "redwine"
        break
      case 5:
        typedata = "food"
        break
      case 6:
        typedata = "scene"
        break
      case 7:
        typedata = "car"
        break
    }
    this.setData({
      typedata
    })
  },
  __myhandleLongPress: async function(even) {
    const that = this
    const db = wx.cloud.database(); //数据库定义
    const fileID = even.detail.fileID
    const typedata = even.detail.typedata
    const _id = even.detail._id
    const historyData = this.data.historyData
    const hideIndex = even.detail.hideIndex
    const mycollections = even.detail.collections


    try {
      //提示框的显示---删除与取消
      wx.showModal({
        title: '提示',
        content: '是否删除',
        success(res) {
          if (res.confirm) {
            historyData[typedata].list.splice(hideIndex, 1)

            //1、删除图片
            wx.cloud.deleteFile({
              fileList: [fileID]
            })
            //2、删除数据库数据
            db.collection(mycollections).doc(_id).remove({
              success: function(res) {
                that.setData({
                  historyData: historyData
                })
              }
            })
          }
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
})