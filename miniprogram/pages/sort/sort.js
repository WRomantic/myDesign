// pages/sort/sort.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortBodyDataArr: {
      one: {
        img: "https://772d-w-1314-1257815135.tcb.qcloud.la/bg/class/wzshu.png?sign=075bc3464c8f847e718a92dcf44386c3&t=1581340777",
        h1: "通用文字识别",
        h2: "基于业界领先的深度学习技术，提供多场景、多语种、高精度的整图文字检测和识别服务，多项ICDAR指标居世界第一"
      },
      two: {
        img: "https://772d-w-1314-1257815135.tcb.qcloud.la/bg/class/banner.jpg?sign=460084c290cd47fe2b0273080b98b036&t=1581425650",
        h1: "图像识别",
        h2: "精准识别超过十万种物体和场景，包含多项高精度的识图能力并提供相应的API服务，充分满足各类个人开发者和企业用户的业务需求"
      },
      three: {
        img: "https://772d-w-1314-1257815135.tcb.qcloud.la/bg/class/0645C45416B741ACA8EB3515F7163361.png?sign=b100821d653964e923395f3f00076eed&t=1581425850",
        h1: "汽车场景文字识别",
        h2: "基于业界领先的深度学习技术，提供对汽车购买及使用过程中所涉及的各类卡证、票据进行结构化识别的服务"
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              app.globalData.userInfo = res.userInfo
            }
          })
        }
      }
    })
  }
})