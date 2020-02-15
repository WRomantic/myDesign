// components/w-nav-bar/w-nav-bar.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },
  data: {
    currentData: 0,
  },
  methods: {
    //获取当前滑块的index
    bindchange: function (e) {
      const that = this;
      that.setData({
        currentData: e.detail.current
      })
    },
    //点击切换，滑块index赋值
    __checkCurrent: function (e) {
      const that = this;

      if (that.data.currentData === e.target.dataset.current) {
        return false;
      } else {

        that.setData({
          currentData: e.target.dataset.current
        })
      }
    }
  }
})
