// pages/scantxt/scantxt.js
Page({
  data: {
    words_result: [],
    scan_pic:[],
    img: '',
    scan_class:''
  },
  onLoad: function(options) {
    let scanTxt = JSON.parse(decodeURIComponent(options.scan)).words_result //文字识别
    let scanPic = JSON.parse(decodeURIComponent(options.scan)).result //图片识别

    let scanIng = JSON.parse(options.scaning) //获取的图片
    const typedata = options.typedata

    if (scanTxt) {
      this.__saveScanTxt(scanIng, scanTxt, "scan/", 'scanData', typedata); //文字识别保存
      console.log(scanTxt);
      //文字识别保存
      this.setData({
        words_result: scanTxt,
        img: scanIng,
        scan_class:'txt'
      })
    } else {
      this.__saveScanTxt(scanIng, scanPic, "picScan/", 'imgScanData', typedata); //图片识别保存
      console.log(scanPic);
      //图片识别保存
      this.setData({
        scan_pic: scanPic,
        img: scanIng,
        scan_class: 'pic'
      })
    }

  },

  __saveScanTxt: async function (filePath, scanTxt, path, collect, typedata) {
    const new_data = new Date().toLocaleDateString()
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
        new_data
      }
    })
    this.__sunCallection(typedata,new_data);
  },

  //获取使用次数
  __sunCallection: async function ( scanType, new_data) {
    const db = wx.cloud.database();

    let scanTypeSum = await db.collection("z_frequency").where({ scanType }).get()
    const sun_idArr = scanTypeSum.data
    console.log(sun_idArr.length)

    if (sun_idArr.length){
      const sun_count = sun_idArr[0].sum

      let scanTypeUpdate = await db.collection("z_frequency").doc(sun_idArr[0]._id).update({
        data: {
          sum: sun_count + 1
        },
      })
    }else{
      console.log("sun_count");
      let addData = await db.collection("z_frequency").add({
        data: {
          scanType,
          sum: 1,
          new_data
        }
      })
    }
  }
})