// pages/orcText/w-components/w-orctxt-body/w-orctxt-body.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    indexData: {
      type: Object,
      value: null
    }
  },
  data: {
    scanImg:"https://772d-w-1314-1257815135.tcb.qcloud.la/bg/index/3.jpg?sign=0ea88406eabf6277d21de1255882a007&t=1582699432"
  },
  lifetimes: {
    created() {
    },
    ready() {
      // 在组件在视图层布局完成后执行
      console.log(this.data)
    }
  },
  methods: {

  }
})
