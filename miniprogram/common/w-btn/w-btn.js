// common/w-btn/w-btn.js
import {
  getToken,
  getOrcTxt
} from '../../service/text.js'
import {
  getBase64,
  getImg,
  getToday,
  timeIsEqual
} from '../../utils/utils.js'

const app = getApp();

Component({
  properties: {
    urlDase: {
      type: String,
      value: ''
    },
    typedata: {
      type: String,
      value: ''
    },
  },
  data: {

  },
  methods: {
    //拍照
    __getCamera: async function(event) {
      const urlDase = event.currentTarget.dataset.urldase //获取父组件传入的方法URL
      const typedata = event.currentTarget.dataset.typedata //获取父组件传入方法的类型
      const limitTimesBoole = await this.__limitTimesBoole(typedata) //获取限制的次数布尔
      console.log(await this.__limitTimesBoole(typedata))
      if (app.globalData.userInfo) {
        await this.__toStart(urlDase, typedata, limitTimesBoole, "camera")
      }
    },
    //选取照片  Select photos
    __getAlbum: async function(event) {
      const urlDase = event.currentTarget.dataset.urldase //获取父组件传入的方法URL
      const typedata = event.currentTarget.dataset.typedata //获取父组件传入方法的类型
      const limitTimesBoole = await this.__limitTimesBoole(typedata) //获取限制的次数布尔
      console.log(await this.__limitTimesBoole(typedata))
      if (app.globalData.userInfo) {
        await this.__toStart(urlDase, typedata, limitTimesBoole, "album")
      }
    },
    //限制使用次数 Limit usage
    __limitTimesBoole: async function(typedata) {
      let boole = false //返回的布尔值
      const sum = 4 //限制总数 limit sum
      const db = wx.cloud.database();

      try {
        const scanTypeSum = await db.collection("z_frequency").get()
        const sun_idArr = scanTypeSum.data
        //业务逻辑 
        //业务逻辑 
        switch (sun_idArr.length) {
          case 0:
            { //0代表刚使用需要判断
              boole = true
              break;
            }
          case 1:
            { //1代表已经使用1次了
              if (sun_idArr[0].scanTypeObj[typedata]) { //是否使用个指定的功能
                if (!timeIsEqual(sun_idArr[0].scanTypeObj[typedata].new_data)) {//判断是否是同一天，不是-----就执行更新
                  let scanTypeUpdate = await db.collection("z_frequency").doc(sun_idArr[0]._id).update({
                    data: {
                      scanTypeObj: {
                        [typedata]: {
                          dayTotal:0,
                          new_data: getToday()
                        }
                      }
                    },
                  })
                  boole = true
                } else if (sun_idArr[0].scanTypeObj[typedata].dayTotal < sum){
                  boole = true
                }
              } else {
                boole = true
              }
              break;
            }
        }
      } catch (e) {
        console.log(e)
      }
      return boole
    },
    /*
     *业务逻辑
     *1.判断是否超过免费次数
     */
    __toStart: async function(urlDase, typedata, limitTimesBoole, cameraType) {
      if (limitTimesBoole) {
        try {
          let accessToken = await getToken();
          let img = await getImg(cameraType);
          let imgBase64 = await getBase64(img);
          let orcTxt = await getOrcTxt(accessToken.access_token, imgBase64, urlDase)
          let scan = JSON.stringify(orcTxt) //取子集分类 数组传递需要序列化
          let scaning = JSON.stringify(img.tempFilePaths[0]) //取子集分类 数组传递需要序列化

          console.log(orcTxt)
          wx.navigateTo({
            url: `/pages/scantxt/scantxt?scan=${encodeURIComponent(scan)}&scaning=${scaning}&typedata=${typedata}`,
          })
        } catch (e) {
          if (e.errMsg != "chooseImage:fail cancel") {
            wx.showToast({
              title: '格式不正确或者文件太大', //标题
              icon: 'none',
              duration: 3000
            })
          }
        }
      } else {
        wx.showModal({
          title: '温馨提示',
          content: '今天免费次数已用完',
          showCancel: false,
          success(res) {}
        })
      }
    }
  }
})