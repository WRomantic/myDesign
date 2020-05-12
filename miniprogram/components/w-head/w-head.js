// components/w-head/w-head.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  ready() {
    /**
     * 通过全局获取userInfo用户ID
     */
    this.__judgeUser()
  },


  methods: {
    getUserInfo: function(e) {
      console.log(e)
      //判断用户是否同意
      if (e.detail.userInfo){
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true
        })
      }
    },
    __judgeUser:function(){
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: res => {
                app.globalData.userInfo = res.userInfo
                this.setData({
                  userInfo: res.userInfo,
                  hasUserInfo: true
                })
              }
            })
          }
        }
      })
    }
  }
})