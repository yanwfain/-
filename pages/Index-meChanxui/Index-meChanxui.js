// pages/Index-meChanxui/Index-meChanxui.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickerProData: {
      index: 0,
      items: ['请选择年份', '   2019年   ', '   2020年   ']
    },
    pickerProDatas: {
      index: 0,
      items: ['请选择月份', '   01月   ', '   12月   ']
    },
    contdeilt:[
      {
        times:'2019.0617',
        frequency:'3',
        total:'58',
        rangkin:'49',
        tit:'打坐'
      },
      {
        times: '2019.0617',
        frequency: '3',
        total: '58',
        rangkin: '49',
        tit: '念佛'
      }, {
        times: '2019.0617',
        frequency: '3',
        total: '58',
        rangkin: '49',
        tit: '持咒'
      }, {
        times: '2019.0617',
        frequency: '3',
        total: '58',
        rangkin: '49',
        tit: '心密'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  pickerProChange: function (e) {
    this.setData({
      'pickerProData.index': e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProData.index)
    console.log(that.data.pickerProData.items[that.data.pickerProData.index])

  },
  pickerProChanges:function(e){
    this.setData({
      'pickerProDatas.index': e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProDatas.index)
    console.log(that.data.pickerProDatas.items[that.data.pickerProDatas.index])
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