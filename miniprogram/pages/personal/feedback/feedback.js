// pages/personal/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true,
    primary:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    console.log(len);
    (len >= 15) ? (this.setData({ disabled: false, primary: "primary" })) : (this.setData({ disabled: true, primary:"" }))
    
    console.log(this.disabled);
  }
})