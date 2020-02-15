// pages/home/home.js
import {getToken, getOrcTxt} from '../../service/text.js'
import { getObject_detect } from '../../service/image.js'

import { getBase64, getImg } from '../../utils/utils.js'

const app = getApp();
Page({
  data: {
    access_token:''
  },
  onLoad: function () { 
    wx.cloud.callFunction({
      name: 'request',//调用的云函数名称
    }).then(res => {
      console.log(res);
      console.log("res");
    })
  },

  //网络请求

  _getObject_detect(){
    let accessToken = "";
    let base64 = "";

    getToken().then(res => {
      accessToken = res.access_token //获取token
      getImg().then(res => {
        getBase64(res).then(res => {
          //获取Base64
          base64 = res
          getObject_detect(accessToken, base64).then(res => {
            console.log(res)
          })
        })
      })
    })
  }
})