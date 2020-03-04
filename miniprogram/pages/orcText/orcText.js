// pages/home/home.js
import {
  getToken,
  getOrcTxt
} from '../../service/text.js'
import {
  getObject_detect
} from '../../service/image.js' 

import {
  getBase64,
  getImg
} from '../../utils/utils.js'
import {
  IMGCLASSIFYurl,
  ANIMALurl,
  PLANTurl,
  REDWINEurl,
  GENERALurl
} from '../../utils/const.js'

const app = getApp();
Page({
  data: {
    access_token: '',
    indexDatas: [{
        title: "植物识别",
        indexImg: "https://772d-w-1314-1257815135.tcb.qcloud.la/bg/index/3.jpg?sign=0ea88406eabf6277d21de1255882a007&t=1582699432",
        footTxt: "支持识别超过2万种通用植物和近8千种花卉，接口返回植物的名称，并获取百科信息，适用于拍照识图类APP中",
        url: PLANTurl,
        type: "plant"
      },
      {
        title: "文字识别",
        indexImg: "https://772d-w-1314-1257815135.tcb.qcloud.la/bg/index/%E6%96%87%E5%AD%97.jpg?sign=a6215b7066674cf2c76c067cfa36f63e&t=1582706137",
        footTxt: "基于业界领先的深度学习技术，提供多场景、多语种、高精度的整图文字检测和识别服务，多项ICDAR指标居世界第一",
        url: GENERALurl,
        type: "font"
      },
      {
        title: "动物识别",
        indexImg: "https://772d-w-1314-1257815135.tcb.qcloud.la/bg/index/%E7%8C%AB.jpg?sign=d6c5571862d62fb949b87e675ef3cb1c&t=1582705993",
        footTxt: "识别近八千种动物，接口返回动物名称，并获取百科信息，适用于拍照识图类APP中",
        url: ANIMALurl,
        type: "animal"
      }
    ]
  },
  onLoad: function() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res.authSetting['scope.userInfo']);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              app.globalData.userInfo = res.userInfo
              console.log(res);
            }
          })
        }
      }
    })
  }
})