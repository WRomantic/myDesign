// common/w-btn/w-btn.js
import { getToken, getOrcTxt } from '../../service/text.js'
import { getBase64, getImg } from '../../utils/utils.js'
Component({
  properties: {

  },
  data: {

  },
  methods: {
    //拍照
    __getCamera:async function(){
      try {
        let accessToken = await getToken();
        let Img = await getImg("camera");
        let imgBase64 = await getBase64(Img);
        let orcTxt = await getOrcTxt(accessToken.access_token, imgBase64)
        console.log(orcTxt)
        wx.navigateTo({
          url: "pages/scantxt/scantxt"
        })
      } catch (e) {

      }
    },
    //选取照片
    __getAlbum: async function () {
      try{
        let accessToken = await getToken();
        let Img = await getImg("album");
        let imgBase64 = await getBase64(Img);
        let orcTxt = await getOrcTxt(accessToken.access_token,imgBase64)
        let scan = JSON.stringify(orcTxt)        //取子集分类 数组传递需要序列化
        let scaning = JSON.stringify(Img.tempFilePaths[0])        //取子集分类 数组传递需要序列化
        wx.navigateTo({
          url: `/pages/scantxt/scantxt?scan=${scan}&scaning=${scaning}`,
        })
      } catch(e){

      }
    },
  }
})
