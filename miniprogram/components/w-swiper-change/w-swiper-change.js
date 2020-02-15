// components/w-swiper-change/w-swiper-change.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      'https://772d-w-1314-1257815135.tcb.qcloud.la/bg/photo/16746.jfif?sign=d873bb30525bb5d6bf6000b0cd0ed3e4&t=1581495187',
      'https://772d-w-1314-1257815135.tcb.qcloud.la/bg/photo/16746.jfif?sign=d873bb30525bb5d6bf6000b0cd0ed3e4&t=1581495187',
      'https://772d-w-1314-1257815135.tcb.qcloud.la/bg/photo/16746.jfif?sign=d873bb30525bb5d6bf6000b0cd0ed3e4&t=1581495187'
    ],
    current: 0,
    animationData: {},
    animationData2: {}
  },


  // lifetimes: {
  //   created(){
  //     this.stretch(350)
  //   },
  // },

  /**
   * 组件的方法列表
   */
  methods: {
  change(e) {
    this.setData({
      current: e.detail.current
    })
    this.stretch("92vh")

    this.shrink("84vh")
  },
  // 收缩
  stretch(h) {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.height(h).step()
    this.setData({
      animationData: animation.export(),
    })
  },
  // 展开
  shrink(h) {
    var animation2 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation2 = animation2
    animation2.height(h).step()
    this.setData({
      animationData2: animation2.export()
    })
  },
  }
})
