// pages/personal/w-components/w-history-black/w-history-black.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // historyData:null
  },
  lifetimes: {
    created(){
      this.__getScan()
    },
    ready() {
      // 在组件在视图层布局完成后执行
      console.log(this.data.historyData)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLongPress: function(event) {
      const db = wx.cloud.database();
      const hideIndex = event.currentTarget.dataset.index
      const fileID = event.currentTarget.dataset.fileid
      let sto_historyData = wx.getStorageSync('sto_historyData')
      const that = this;
      // console.log(wx.getStorageSync('sto_historyData'));
      // console.log(hideIndex)

      wx.showModal({
        title: '提示',
        content: '是否删除',
        success: function(res) {
          if (res.confirm) {
            sto_historyData.splice(hideIndex, 1)
            wx.setStorageSync('sto_historyData', sto_historyData)

            wx.cloud.deleteFile({
              fileList: [fileID]
            })
            //删除数据库数据
            db.collection('scanData').doc(event.currentTarget.dataset.id).remove({
              success: function(res) {
                that.setData({
                  historyData: sto_historyData
                })
              }
            })
          } else {
            console.log('用户点击取消')
          }

        }
      })
    },
    handleClick: function() {
      console.log("b")
    },
    __getScan: async function () {
      const db = wx.cloud.database();
      let getScantxt = await db.collection('scanData').limit(20).get()
      wx.setStorageSync('sto_historyData', getScantxt.data)
      this.setData({
        historyData: getScantxt.data
      })
      console.log(getScantxt.data)
    }
  }
})