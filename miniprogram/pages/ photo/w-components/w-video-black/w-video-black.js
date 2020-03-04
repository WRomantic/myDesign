// pages/ photo/w-components/w-video-black/w-video-black.js
//获取应用实例
var app = getApp();
Component({
  properties: {
    course: {
      type: Object,
      value: null
    },
    idx:{
      type: Number,
      value: null
    }
  },

  data: {
    like_png: "/images/play/slike.png",
    bool_like: false,
  },
  methods: {
    videoPlay: function(e) {
      var curIdx = e.currentTarget.dataset.index;
      // 没有播放时播放视频
      if (!this.data.playIndex) {
        this.setData({
          playIndex: curIdx
        })
        var videoContext = wx.createVideoContext('video' + curIdx) //这里对应的视频id
        videoContext.play()
      } else { // 有播放时先将prev暂停，再播放当前点击的current
        var videoContextPrev = wx.createVideoContext('video' + this.data.playIndex)
        if (this.data.playIndex != curIdx) {
          videoContextPrev.pause()
        }
        this.setData({
          playIndex: curIdx
        })
        var videoContextCurrent = wx.createVideoContext('video' + curIdx)
        videoContextCurrent.play()
      }
    },
    __like: function() {
      let that = this
      let bool_likes = !that.data.bool_like

      if (bool_likes){
        that.setData({
          like_png: "/images/play/like.png",
          bool_like: bool_likes
        })
      }else{
        that.setData({
          like_png: "/images/play/slike.png",
          bool_like: bool_likes
        })
      }
    }
  }
})