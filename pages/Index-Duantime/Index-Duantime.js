// pages/Index-Duantime/Index-Duantime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '请选择',
    timel: "请选择",
    timell:"请选择",
    indexidxshi:[
      { idxs: '00' }, { idxs: '01' }, { idxs: '02' }, { idxs: '03' }, { idxs: '04' }, { idxs: '05' }, { idxs: '06' }, { idxs: '07' }, { idxs: '08' }, { idxs: '09' }, { idxs: '10' }, { idxs: '11' }, { idxs: '12' }, { idxs: '13' }, { idxs: '14' }, { idxs: '15' }, { idxs: '16' }, { idxs: '17' }, { idxs: '18' }, { idxs: '19' }, { idxs: '20' }, { idxs: '21' }, { idxs: '22' }, { idxs: '23' }
    ],
    indexidxfen: [
      { idxsf: '00' }, { idxsf: '01' }, { idxsf: '02' }, { idxsf: '03' }, { idxsf: '04' }, { idxsf: '05' }, { idxsf: '06' }, { idxsf: '07' }, { idxsf: '08' }, { idxsf: '09' }, { idxsf: '10' }, { idxsf: '11' }, { idxsf: '12' }, { idxsf: '13' }, { idxsf: '14' }, { idxsf: '15' }, { idxsf: '16' }, { idxsf: '17' }, { idxsf: '18' }, { idxsf: '19' }, { idxsf: '20' }, { idxsf: '21' }, { idxsf: '22' }, { idxsf: '23' }, { idxsf: '24' }, { idxsf: '25' }, { idxsf: '26' }, { idxsf: '27' }, { idxsf: '28' }, { idxsf: '29' }, { idxsf: '30' }, { idxsf: '31' }, { idxsf: '32' }, { idxsf: '33' }, { idxsf: '34' }, { idxsf: '35' }, { idxsf: '36' }, { idxsf: '37' }, { idxsf: '38' }, { idxsf: '39' }, { idxsf: '40' }, { idxsf: '41' }, { idxsf: '42' }, { idxsf: '43' }, { idxsf: '44' }, { idxsf: '45' }, { idxsf: '46' }, { idxsf: '47' }, { idxsf: '48' }, { idxsf: '49' }, { idxsf: '50' }, { idxsf: '51' }, { idxsf: '52' }, { idxsf: '53' }, { idxsf: '54' }, { idxsf: '55' }, { idxsf: '56' }, { idxsf: '57' }, { idxsf: '58' }, { idxsf: '59' }, 
    ],
    hour:'',
    minute:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  bindChange:function(e){
    var val = e.detail.value
    this.setData({
      hour: this.data.indexidxshi[val[0]],
    })
    console.log(this.data.hour)

  },
  bindChanges: function (e) {
    var val = e.detail.value
    this.setData({
     
      minute: this.data.indexidxfen[val[0]]
    })

    console.log(this.data.minute)
  },
  pickerProChangeh: function (e) {
    this.setData({
      time: e.detail.value
    })
  
    console.log(this.data.time)
  },
  pickerProChange: function (e) {
    this.setData({
      timel: e.detail.value
    })
    console.log(this.data.timel)
  },
  pickerProChangehs: function (e) {
    this.setData({
      timell: e.detail.value
    })
    console.log(this.data.timell)
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