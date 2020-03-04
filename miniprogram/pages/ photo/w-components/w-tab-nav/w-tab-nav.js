// pages/ photo/w-components/w-tab-nav/w-tab-nav.js
Component({
  properties: {
    itemArr: {
      type: Array,
      value: []
    }
  },


  data: {
    currentData: 0
  },

  methods: {
    //点击切换，滑块index赋值
    __checkCurrent: function(e) {

      if (this.data.currentData === e.target.dataset.current) {
        return false;
      } 
      else {
        this.setData({
          currentData: e.target.dataset.current
        })
        const data = { index: e.target.dataset.current }
        this.triggerEvent("tabclick", data, {})
      }
    }
  }
})