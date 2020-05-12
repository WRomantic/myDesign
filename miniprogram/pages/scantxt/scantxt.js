// pages/scantxt/scantxt.js
import {
  getToday
} from '../../utils/utils.js'

Page({
  data: {
    words_result: [],
    scan_pic: [],
    redwine_result: null,
    img: '',
    typedata: ''
  },
  onLoad: function(options) {
    let scanTxt = JSON.parse(decodeURIComponent(options.scan)).words_result //文字识别
    let scanPic = JSON.parse(decodeURIComponent(options.scan)).result //图片识别

    let scanIng = JSON.parse(options.scaning) //获取的图片
    const typedata = options.typedata
    console.log(typedata);
    switch (typedata) {
      case "redwine":
        {
          this.__saveScanTxt(scanIng, scanPic, "picScan/", 'z_imgScanData', typedata); //文字识别保存
          this.setData({
            redwine_result: scanPic,
            img: scanIng,
            typedata
          })
          break
        }
      case "subject":
        {
          this.__saveScanTxt(scanIng, scanPic, "picScan/", 'z_imgScanData', typedata); //文字识别保存
          this.setData({
            redwine_result: scanPic,
            img: scanIng,
            typedata
          })
          break
        }
      case "font":
        {
          this.__saveScanTxt(scanIng, scanTxt, "scan/", 'z_scanData', typedata); //文字识别保存
          this.setData({
            words_result: scanTxt,
            img: scanIng,
            typedata
          })
          break
        }
      case "accurate_base":
        {
          this.__saveScanTxt(scanIng, scanTxt, "scan/", 'z_scanData', typedata); //文字识别保存
          this.setData({
            words_result: scanTxt,
            img: scanIng,
            typedata
          })
          break
        }
      default:
        {
          this.__saveScanTxt(scanIng, scanPic, "picScan/", 'z_imgScanData', typedata); //图片识别保存
          this.setData({
            scan_pic: scanPic,
            img: scanIng,
            typedata
          })
        }
    }
  },

  __saveScanTxt: async function(filePath, scanTxt, path, collect, typedata) {
    const new_data = getToday()
    const name = Math.random() * 1000000;
    const cloudPath = path + name + filePath.match(/\.[^.]+?$/)[0] //保存路径
    //保存图片
    let updata = await wx.cloud.uploadFile({
      cloudPath,
      filePath
    })
    //保存进数据库
    const db = wx.cloud.database();
    let addData = await db.collection(collect).add({
      data: {
        fileID: updata.fileID,
        scanTxt,
        new_data,
        typedata
      }
    })
    //获取使用次数
    this.__sunCallection(typedata, new_data);
  },

  //获取使用次数
  __sunCallection: async function(scanType, new_data) {
    const db = wx.cloud.database();
    let scanTypeObj = {   //向数据库添加的对象
      [scanType]: {
        scanType,
        sum: 1,
        dayTotal: 1,
        new_data
      }
    }
    try{
      const scanTypeSum = await db.collection("z_frequency").get() //获取数据库的整体数据
      const sun_idArr = scanTypeSum.data  //获取数据0或1

      if (sun_idArr.length) {
        const scanData = sun_idArr[0].scanTypeObj[scanType] //获取是否有该类型的保存数据
        if (!scanData) {
          let scanTypeUpdate = await db.collection("z_frequency").doc(sun_idArr[0]._id).update({
            data: {
              scanTypeObj
            },
          })
        } else {
          let scanTypeUpdate = await db.collection("z_frequency").doc(sun_idArr[0]._id).update({
            data: {
              scanTypeObj: {
                [scanType]: {
                  scanType,
                  sum: scanData.sum + 1,
                  dayTotal: scanData.dayTotal + 1,
                  new_data
                }
              }
            },
          })
        }
      } else {
        let addData = await db.collection("z_frequency").add({
          data: {
            scanTypeObj
          }
        })
      }




    }catch(e){
      console.log(e)
    }
  }
})