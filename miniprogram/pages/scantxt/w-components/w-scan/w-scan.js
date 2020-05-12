// pages/scantxt/w-components/w-scan/w-scan.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img:{
      type:String,
      value:''
    },
    typedata: {
      type: String,
      value: ''
    },
    redwine_result:{
      type: Object,
      value: null
    },
    words_result:{
      type:Array,
      value:[]
    },
    scan_pic:{
      type: Array,
      value: []
    }
  },
  lifetimes: {
    created() {

    },
    ready() {
      // 在组件在视图层布局完成后执行
      console.log(this.data)
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

  }
})
