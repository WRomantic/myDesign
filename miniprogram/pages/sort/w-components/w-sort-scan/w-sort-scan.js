// pages/sort/w-components/w-sort-scan/w-sort-scan.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    indexData:{
      type:Object,
      value:null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    __flostBool:function(){
      this.triggerEvent('flostBool', { btnScan: false })
    }
  }
})
