// pages/Index-xiaoFn/Index-xiaoFn.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    delittxtx:[
      {
        texts:"您的评论的内容“这个活动太棒了啊哈哈哈哈哈”已经通过系统审核"
      },
      {
        texts: "您的评论的内容“这个活动太棒了啊哈哈哈哈哈”已经通过系统审核"
      }, {
        texts: "您的评论的内容“这个活动太棒了啊哈哈哈哈哈”已经通过系统审核"
      },
       {
        texts: "您的评论的内容“这个活动太棒了啊哈哈哈哈哈”已经通过系统审核"
      }
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = app.globalData.url + '/api/user/getUserMsg';
    let data = {
      user_id: app.globalData.user_id
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        this.setData({
          detilds: res.result,
          // fabulous_num: res.result.fabulous_num
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
    wx.showLoading({
      title: '加载中',
    })
    wx.hideLoading()
    this.onLoad()
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