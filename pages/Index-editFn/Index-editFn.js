// pages/Index-editFn/Index-editFn.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:'',
    avatarUrl:'',
    real_name:'',
    user_birth:'',
    phone:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = app.globalData.url + '/api/user/getUserInfo';
    console.log(url)
    let data = {
      openid: app.globalData.openId
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      this.setData({
        nickName: res.result.user_name,
        avatarUrl: app.globalData.userInfo.avatarUrl,
        real_name: res.result.real_name,
        user_birth: res.result.user_birth,
        phone: res.result.phone,
        user_id: app.globalData.user_id


      })
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
   
  },
  nickNameFn:function(e){
    this.setData({
      nickName: e.detail.value
    })
  },
  realFn:function(e){

    this.setData({
      real_name:e.detail.value
    })
  },
  birthFn: function (e) {

    this.setData({
      user_birth: e.detail.value
    })
  },
  phoneFn: function (e) {

    this.setData({
      phone: e.detail.value
    })
  },
  subiops:function(e){
    let url = app.globalData.url + '/api/user/editUser';
    let data = {
      user_id: app.globalData.user_id,
      user_name: this.data.nickName,
      real_name: this.data.real_name,
      user_birth: this.data.user_birth,
      phone: this.data.phone
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        wx.showToast({
          title: res.msg+"审核中",
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