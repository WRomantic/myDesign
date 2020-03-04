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
    history_img: 'https://772d-w-1314-1257815135.tcb.qcloud.la/photo/icon/%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%20(2).png?sign=d1016a01955ba8e3ea9d05a108b03f4f&t=1582519014"'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    __showdata: async function() {
      const db = wx.cloud.database();
      // let getAllsum = await db.collection('z_frequency').limit(3).get()
      // console.log(getAllsum);

      let fontSum = await db.collection("z_frequency").where({
        scanType: "font"
      }).get()
      let animalSum = await db.collection("z_frequency").where({
        scanType: "animal"
      }).get()
      let plantSum = await db.collection("z_frequency").where({
        scanType: "plant"
      }).get()

      let fontSumData = 0;
      let animalSumData = 0;
      let plantSumData = 0;
      // console.log(animalSum.data.length > 0);
      
      let y = (fontSum.data.length > 0) ? (fontSumData = fontSum.data[0].sum) : (fontSumData = 0)
      let x = (animalSum.data.length > 0) ? (animalSumData = animalSum.data[0].sum) : (animalSumData = 0)
      let z = (plantSum.data.length > 0) ? (plantSumData = plantSum.data[0].sum) : (plantSumData = 0)
      

      wx.showModal({
        title: '',
        content: `文字识别:${fontSumData}次；动物识别:${animalSumData}次；植物识别:${plantSumData}次`,
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