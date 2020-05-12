// pages/ photo/w-components/w-video-black/w-video-black.js
//获取应用实例
var app = getApp();
Component({
  properties: {
    news: {
      type: Object,
      value: null
    },
    typeindex: {
      type: Number || String,
      value: null
    },
    typeindex: {
      type: String,
      value: ""
    },
    playIndex:{
      type: Number,
      value: null
    }
  },

  data: {

  },
  methods: {
    videoPlay: function(e) {
      var curIdx = e.currentTarget.dataset.index;
      let playIndex = this.data.playIndex;
      // 没有播放时播放视频
      console.log(playIndex)
      if (!playIndex) {  
        this.setData({
          playIndex: curIdx
        })
        var videoContext = wx.createVideoContext('video' + curIdx) //这里对应的视频id
        videoContext.play()
      } else { // 有播放时先将prev暂停，再播放当前点击的current
        var videoContextPrev = wx.createVideoContext('video' + playIndex)
        if (playIndex != curIdx) {
          videoContextPrev.pause()
        }
        this.setData({
          playIndex: curIdx
        })
        
        var videoContextCurrent = wx.createVideoContext('video' + curIdx)
        videoContextCurrent.play()
      }
    }
  }
})