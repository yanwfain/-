// pages/Index-xinQiFn/Index-xinQiFn.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickerProDatadst: {
      index: 0,
      items: ['请选择', '   01   ', '  02   ']
    },
    pickerProDatadsq: {
      index: 0,
      items: ['请选择', '   01   ', '  02   ']
    },
    leiname:'',
    optian:'',
    optians:'',
    idopst:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      leiname: options.leiname,
      idopst: options.idopst
    })
    let url = app.globalData.url + '/api/Meditation/getAllMeditation';
    let data = {
      user_id: app.globalData.user_id,
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        this.setData({
          detilds: res.result,
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
  optianFn:function(e){
    this.setData({
      optian: e.detail.value
    })
    console.log(e.detail.value)
  },
  optiansFn: function (e) {
    this.setData({
      optians: e.detail.value
    })
    console.log(e.detail.value)
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
  pickerProChangedst: function (e) {
    this.setData({
      'pickerProDatadst.index': e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProDatadst.index)
    console.log(that.data.pickerProDatadst.items[that.data.pickerProDatadst.index])
  },
  pickerProChangedsq: function (e) {
    this.setData({
      'pickerProDatadsq.index': e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProDatadsq.index)
    console.log(that.data.pickerProDatadsq.items[that.data.pickerProDatadsq.index])
  },
  baiFn: function (e) {
    console.log(this.data.optian)
    if(this.data.optian==""||this.data.optians == ""){
      console.log('eeeee')
      wx.showToast({
        title: '请完善',
      })
    }else{
      var timestamp = Date.parse(new Date());
      // timestamp = timestamp / 1000;
      app.globalData.timeing = timestamp
      wx.navigateTo({
        url: "../Index-statuGo/Index-statuGo?idx=" + "3" + '&leiname=' + this.data.leiname + '&optian=' + this.data.optian + '&optians=' + this.data.optians + '&loit=' + "心密打坐" + "&idopst=" + this.data.idopst,
      })
    }
  
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