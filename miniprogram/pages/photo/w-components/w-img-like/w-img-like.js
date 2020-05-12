// pages/photo/w-components/w-img-like/w-img-like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    course: {
      type: Object,
      type: null
    },
    bool_like: {
      type: Boolean,
      type: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likes_png: "/images/play/slike.png",
    like_png: "/images/play/like.png"
  },
  methods: {
    __like: function() {

      let that = this
      let bool_likes = !that.data.bool_like

      if (bool_likes) {
        that.setData({
          // like_png: "/images/play/like.png",
          bool_like: bool_likes
        })
        this.__savaMovice()
      } else {
        that.setData({
          // like_png: "/images/play/slike.png",
          bool_like: bool_likes
        })
        this.__delMovice()
      }
    },
    __savaMovice: async function() {
      try {
        const db = wx.cloud.database();
        let addData = await db.collection("z_likemovice").add({
          data: {
            title: this.data.course.title,
            imgList: this.data.course.imgList,
            postTime: this.data.course.postTime,
            source: this.data.course.source,
            digest: this.data.course.digest,
            videoList: this.data.course.videoList,
            type: "video",
            bool_like: true
          }
        })
        wx.showToast({
          title: '已收藏',
          icon: 'success',
          duration: 1000
        })
      } catch (e) {

      }
    },
    __delMovice: async function() {
      console.log(this.data.course.imgList)
      wx.cloud.callFunction({
        name: 'delMovice',
        data: {
          postTime: this.data.course.postTime,
          title: this.data.course.title
        },
        complete: wx.showToast({
          title: '取消',
          icon: 'none',
          duration: 2000
        })
      })
    }
  }
})