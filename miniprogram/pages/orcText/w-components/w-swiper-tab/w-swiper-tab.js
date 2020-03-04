// pages/orcText/w-components/w-swiper-tab/w-swiper-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arrayLenth: {
      type: Number,
      value: null
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: 4
  },
  ready(){

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
