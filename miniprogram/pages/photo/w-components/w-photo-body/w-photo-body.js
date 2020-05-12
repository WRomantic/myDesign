// pages/ photo/w-photo-body/w-photo-body.js
//获取应用实例
var app = getApp();
Component({
  properties: {
    news: {
      type: Object,
      value: null
    },
    typeindex: {
      type: Number,
      value: null
    }
  },

  data: {
    like_png: "/images/play/slike.png",
    bool_like: false,
    TYPE: 522,
    playIndex:null
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
