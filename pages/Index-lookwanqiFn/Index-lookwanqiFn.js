// pages/Index-lookwanqiFn/Index-lookwanqiFn.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noter: [
      {
        image: "../../images/fu.png",
        title: "求忏悔，忏悔三世罪",
        txt: "只有忏悔才有效,真正的忏悔是念佛,念佛救西方净土,园成佛果。"
      },
      {
        image: "../../images/fu.png",
        title: "求忏悔，忏悔三世罪",
        txt: "只有忏悔才有效,真正的忏悔是念佛,念佛救西方净土,园成佛果。"
      },
      {
        image: "../../images/fu.png",
        title: "求忏悔，忏悔三世罪",
        txt: "只有忏悔才有效,真正的忏悔是念佛,念佛救西方净土,园成佛果。"
      },
      {
        image: "../../images/fu.png",
        title: "求忏悔，忏悔三世罪",
        txt: "只有忏悔才有效,真正的忏悔是念佛,念佛救西方净土,园成佛果。"
      },
      {
        image: "../../images/fu.png",
        title: "求忏悔，忏悔三世罪",
        txt: "只有忏悔才有效,真正的忏悔是念佛,念佛救西方净土,园成佛果。"
      },
      {
        image: "../../images/fu.png",
        title: "求忏悔，忏悔三世罪",
        txt: "只有忏悔才有效,真正的忏悔是念佛,念佛救西方净土,园成佛果。"
      },
      {
        image: "../../images/fu.png",
        title: "求忏悔，忏悔三世罪",
        txt: "只有忏悔才有效,真正的忏悔是念佛,念佛救西方净土,园成佛果。"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = app.globalData.url + '/api/index/getAllArticle';
    let data = {
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        for (var i = 0; i < res.result.length; i++) {
          res.result[i].content = res.result[i].content.replace(/<[^>]+>/g, "")
        }
        this.setData({
          detailcont: res.result
        })
      } else {
        wx.showToast({
          title: res.msg,
        })
      }
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  noterFn:function(e){
    wx.navigateTo({
      url: "../Index-lookAllnewdeilt/Index-lookAllnewdeilt?id=" + e.currentTarget.dataset.id,
    });
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})