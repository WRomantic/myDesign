// common/w-btn/w-btn.js
import { getToken, getOrcTxt } from '../../service/text.js'
import { getBase64, getImg } from '../../utils/utils.js'
Component({
  properties: {
    urlDase:{
      type:String,
      value:''
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
    __getCamera: async function (event){
      const urlDase = event.currentTarget.dataset.urldase

      try {
        let accessToken = await getToken();
        let Img = await getImg("camera");
        let imgBase64 = await getBase64(Img);
        let orcTxt = await getOrcTxt(accessToken.access_token, imgBase64, urlDase)
        console.log(orcTxt)
        wx.navigateTo({
          url: "pages/scantxt/scantxt"
        })
      } catch (e) {

      }
    },
    //选取照片
    __getAlbum: async function (event) {
      const urlDase = event.currentTarget.dataset.urldase
      const typedata = event.currentTarget.dataset.typedata
      
      try{
        let accessToken = await getToken();
        let img = await getImg("album");
        let imgBase64 = await getBase64(img);
        let orcTxt = await getOrcTxt(accessToken.access_token, imgBase64, urlDase)
        let scan = JSON.stringify(orcTxt)        //取子集分类 数组传递需要序列化
        let scaning = JSON.stringify(img.tempFilePaths[0])        //取子集分类 数组传递需要序列化

        console.log(orcTxt)
        wx.navigateTo({
          url: `/pages/scantxt/scantxt?scan=${encodeURIComponent(scan)}&scaning=${scaning}&typedata=${typedata}`,
        })
      } catch(e){
        if(e.errMsg !="chooseImage:fail cancel"){
          wx.showToast({
            title: '格式不正确或者文件太大',  //标题
            icon: 'none',
            duration: 3000
          })
        }
      }
    }
  }
})
