// pages/sort/sort.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortArr: {
      text: [{
          title: "通用文字识别",
          icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E6%99%AE%E9%80%9A%E6%96%87%E5%AD%97%E8%AF%86%E5%88%AB.png?sign=3ccb08024bf25bf08b28f9e0caa556ed&t=1583203910"
        },
        {
          title: "高精度版文字识别",
          icon: "cloud://w-1314.772d-w-1314-1257815135/photo/icon/初级文字.png"
        },
        {
          title: "高精度含位置版",
          icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E6%96%87%E5%AD%97%E8%AF%86%E5%88%AB2.png?sign=efad68498998818a5b1b917ce817d203&t=1583209453"
        }
      ],
      photo: [{
          title: "动物识别",
          icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/Animals%20and%20Birds%20%E5%8A%A8%E7%89%A9%E5%92%8C%E9%B8%9F.png?sign=4c63ee5c0f0e4482f300ea8e470f8666&t=1583211119"
        },
        {
          title: "植物识别",
          icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E6%A4%8D%E7%89%A9.png?sign=d5f2f232e4974611dacbc85db42bd80f&t=1583211193"
        },
        {
          title: "红酒识别",
          icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/Jaye%E7%9A%84%E7%BA%A2%E9%85%92%E6%9D%AF(%E5%BD%A9%E8%89%B2).png?sign=dade99e1bc008290bc65dd77219229a7&t=1583211328"
        },
        {
          title: "菜品识别",
          icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E8%8F%9C%E5%93%81%E5%88%86%E6%9E%90.png?sign=cd9f6e9030bf648579522e4ea4ffb87b&t=1583211861"
        },
        {
          title: "图像主体检测",
          icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E5%9B%BE%E7%89%87.png?sign=931cfd196f45e7b8376486685ab04916&t=1583211887"
        },
        {
          title: "通用物体和场景识别",
          icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E5%A4%9A%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF.png?sign=e973bce5f128792d448a884d02c35094&t=1583211874"
        }
      ],
      other: [{
        title: "期待更多",
        icon: "https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E6%9B%B4%E5%A4%9A.png?sign=9b6825b75b2bdfad69c7a16d2943124f&t=1583211507"
      }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  }
})