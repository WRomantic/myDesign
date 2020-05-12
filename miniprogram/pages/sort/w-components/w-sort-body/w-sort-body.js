// pages/sort/w-components/w-sort-body/w-sort-body.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    oneText:{
      type:Object,
      value:""
    },
    textarr: {
      type: Array,
      value: null
    },
    sortType:{
      type: String,
      value: ""
    }
  },
  data: {
  },
  created(){
  },


  methods: {
    btnScan: function (even) {
      
      this.triggerEvent('btnScan', { sortmyindex: even.currentTarget.dataset.myindex, sortType: this.data.sortType})
    }
  }
})
