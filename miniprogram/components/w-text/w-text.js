// components/w-text/w-text.js
const app = getApp()
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

  },
  created(){
    userInfo:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    __start:function(){
      wx.navigateTo({
        url: `/pages/questions/questions`,
      })
    },
    __getUser:function(){
      wx.getSetting({
        success: res => {
          console.log(res.authSetting['scope.userInfo']);
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                this.globalData.userInfo = res.userInfo
                setData({
                  userInfo: res.userInfo
                })
              }
            })
          }
        }
      })
    }
  }
})
