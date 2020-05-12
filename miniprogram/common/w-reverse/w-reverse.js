// pages/questions/w-components/w-reverse/w-reverse.js
let timer = null

Component({
  properties: {
    reverseTimes: {
      type: Boolean,
      value: false
    }
  },

  data: {

  },
  // lifetimes: {
  //   created: function() {
  //     this.countDown(0, 15)
  //   },
  // },
  methods: {
    /**
     * [倒计时函数，最后十秒只显示一个数字，且有放大动画效果]
     * @param  {Number} minutes         [分钟]
     * @param  {Number} second          [秒]
     * @param  {function} TimeoutCallback [倒计时结束执行的函数]
     */
    countDown: function(minutes, second, TimeoutCallback) {
      let animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease',
      })

      const that = this
      let interval = () => {
        if (that.data.reverseTimes) {
          clearInterval(timer)
          
        }
        if (minutes > 0 && second >= 0 || second > 10) {
          that.setData({
            // time: minutes + ':' + second--
            time: second--
          })
        } else if (minutes > 0) {
          minutes--;
          second = 59;
          that.setData({
            time: minutes + ':' + second--
          })
        } else if (second >= 0) {
          animation.scale(1.5, 1.5).step()
          animation.scale(1, 1).step()
          that.setData({
            time: second--,
            animationData: animation.export()
          })
        } else {
          clearInterval(timer)
          // 倒计时结束回调
          if (typeof TimeoutCallback !== 'function') {
            return
          }
          TimeoutCallback()
        }

      }

      // 因为定时器会延时一个间隔单位，所以先执行一次
      interval()
      timer = setInterval(interval, 1000)
    },
    clearDown:function(){
      clearInterval(timer)
    }
  }
})