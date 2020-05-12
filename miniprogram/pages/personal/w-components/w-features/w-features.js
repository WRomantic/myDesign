// pages/personal/w-components/w-features/w-features.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    history_img: 'https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%20(2).png?sign=d1016a01955ba8e3ea9d05a108b03f4f&t=1582519014"',
    scanObj:{
      animal:0,
      plant: 0,
      redwine: 0,
      food: 0,
      scene: 0,
      car: 0,
      font: 0,
      accurate_base: 0,
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    __showdata: async function() {
      await wx.showLoading({
        title: '加载',
      })
      const db = wx.cloud.database();
      const scanData = await db.collection("z_frequency").get()
      const scanTypeObj = scanData.data[0].scanTypeObj
      let scanObj = this.data.scanObj

      Object.getOwnPropertyNames(scanTypeObj).forEach(function (key) {
        scanObj[key] = scanTypeObj[key].sum
      })
      console.log(scanObj)

      wx.hideLoading()
      wx.showModal({
        title: '',
        content: `文字识别:${scanObj.font}次；动物识别:${scanObj.animal}次； 
        植物识别:${scanObj.plant}次； 红酒识别:${scanObj.redwine}次；  菜品识别:${scanObj.food}次；  
        场景识别:${scanObj.scene}次；  汽车识别:${scanObj.car}次；  精度文字识别:${scanObj.accurate_base}次`,
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
})