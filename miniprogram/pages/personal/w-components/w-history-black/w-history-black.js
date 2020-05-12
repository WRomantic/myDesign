// pages/personal/w-components/w-history-black/w-history-black.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    historyData:{
      type:Array,
      value:[]
    },
    typedata:{
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },
  lifetimes: {
    created(){
      
    },
    ready() {
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 长按提示删除
     */
    handleLongPress: function(event) {
    
      const hideIndex = event.currentTarget.dataset.index //传入参数索引 
      const fileID = event.currentTarget.dataset.fileid //图片ID显示
      const _id = event.currentTarget.dataset.id
      const typedata = this.data.typedata
      let collections = ''
      if (typedata == "font" || typedata == "accurate_base") {
         collections = "z_scanData"
      } else {
         collections = "z_imgScanData"
      }
      this.triggerEvent('myhandleLongPress', { typedata, fileID, _id, hideIndex, collections})
    },
    /**
     * 点击查看详情
     */
    handleClick: function (event) {
      let _id = event.currentTarget.dataset.id //数据的ID
      let typedata = event.currentTarget.dataset.typedata
      console.log(_id)
      wx.navigateTo({
        url: `../historyscan/historyscan?id=${_id}&typedata=${typedata}`,
      })
    }
  }
})