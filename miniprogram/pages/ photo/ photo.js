// pages/ photo/ photo.js
Page({

  data: {

  },
  onLoad: function (options) {
    let myComponent = this.selectComponent('#myComponent'); // 页面获取自定义组件实例
    myComponent.stretch("92vh"); // 通过实例调用组件事件
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
})