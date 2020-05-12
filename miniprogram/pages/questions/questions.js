// pages/questions/questions.js

Page({
  data: {
    questions: null,
    serial: ["A", "B", "C", "D"],
    grade: 0, //成绩
    questionnum: 6, //题目总数
    index: 0, //下标
    canAnswer: '', //是否可以答题
    reverseTimes: false,
    btn_disabled: false,
    yes:0,
    error:0
  },
  onLoad: function(options) {
    // const reverse = this.selectComponent("#w-reverse")
    // reverse.countDown(0, 15, this.__showModal)

    this.__getTopic();
  },

  onUnload() {
    const reverse = this.selectComponent("#w-reverse")
    reverse.clearDown()
  },
  //选项点击操作
  __Click: async function(e) {
    this.setData({
      btn_disabled:true,
    })
    const reverse = this.selectComponent("#w-reverse")
    reverse.clearDown()
    // reverse.countDown(0, 15, this.__showModal)

    //获取点击元素的id
    let select = e.currentTarget.dataset.id;
    //获取点击问题的正确答案
    let right_answer = this.data.questions.right_answer;
    //答案正确
    if (select == right_answer) {
      this.__tick("恭喜答对", "/images/play/true.png")
      this.setData({
        answers:right_answer,
        grade: this.data.grade + 10, //得分+10
        yes:this.data.yes + 1
      })
    } else {
      this.setData({
        answers:right_answer,
        error: this.data.error + 1
      })
      this.__tick("很遗憾", "/images/play/erron.png")
    }
    //不是最后一道题，跳转下一题
    if (this.data.index < this.data.questionnum - 1) {
      setTimeout(() => {
        this.__getTopic()   //获取数据并跳转到下一页
        this.setData({
          btn_disabled: false,
          answers: '',
        })
      }, 1500)
    } else if (this.data.index == this.data.questionnum - 1) {
      //最后一道题
      this.setData({
        canAnswer: 'true' //禁止答题
      })
      setTimeout(() => {
        this.GoEnd();
        reverse.clearDown()
      }, 1000)
    }
  },
  //跳转下一道题
  NextQuestion: function() {
    //不是最后一道题
    if (this.data.index < this.data.questionnum - 1) {
      this.setData({
        index: this.data.index + 1,
      })
    }
    //最后一道题
    if (this.data.index == this.data.questionnum - 1) {
      this.setData({
        index: this.data.index,
      })
    }
  },
  //跳转结束页面
  GoEnd: function() {
    wx.navigateTo({
      url: `./end/end?yes=${this.data.yes}&erron=${this.data.error}`,
    })
  },
  __tick: function(title, image) {
    wx.showToast({
      title: title,
      image: image,
      duration: 1000,
      mask:true
    })
  },
  /**
   * 回调
   */
  __showModal: function() {
    const reverse = this.selectComponent("#w-reverse")
    //不是最后一道题，跳转下一题
    this.setData({
      answers: this.data.questions.right_answer,
      error: this.data.error + 1,
      btn_disabled: true,
    })
    if (this.data.index < this.data.questionnum - 1) {
      setTimeout(() => {
        this.__getTopic()   //获取数据并跳转到下一页
        this.setData({
          btn_disabled: false,
          answers: '',
        })
      }, 1500)
    } else if (this.data.index == this.data.questionnum - 1) {
      //最后一道题
      this.setData({
        canAnswer: 'true' //禁止答题
      })
      setTimeout(() => {
        this.GoEnd();
        reverse.clearDown()
      }, 1000)
    }
  },
  __getTopic:async function(){
    const db = wx.cloud.database();
    await db.collection('z_text').aggregate().sample({size:  1}).end().then(res  =>  {   
      console.log(res.list[0]);
      this.setData({
        questions: res.list[0]
      })
    })
    
    console.log(this.data.index)
    this.NextQuestion();
    const reverse = this.selectComponent("#w-reverse")
    reverse.countDown(0, 15, this.__showModal)
  }
})