const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isteast: false,
    scroll_height: 0,
    input_firm: '',
    liuid: '',
    fabulous_num:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      liuid:options.id
    })
    var that = this;
    let url = app.globalData.url + '/api/index/getArticleInfo';
    let data = {
      article_id:options.id
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        this.setData({
          detilds: res.result,
          fabulous_num: res.result.fabulous_num
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
    let url1 = app.globalData.url + '/api/index/getComment';
    let data1 = {
      type: 1,
      id: options.id
    };
    console.log(data1)
    app.wxRequest('POST', url1, data1, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        this.setData({
          getComment: res.result
        })
      } 
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    let url2 = app.globalData.url + '/api/index/addDetail';
    let data2 = {
      type: 1,
      id: options.id
    };
    console.log(data)
    app.wxRequest('POST', url2, data2, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        // this.setData({
        //   getComment: res.result
        // })
      }
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    app.scrollHeight(that);
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
  liuYfn:function(e){
    var that = this;
    that.setData({
      isteast:true
    })

  },
  getTextareaInput: function (e) {
    console.log(e.detail.value)
    var that = this;
    // var discountName = e.detail.value['search - input'] ? e.detail.value['search - input'] : e.detail.value
    // console.log('e.detail.value', discountName)
    this.setData({
      input_firm: e.detail.value
    })
    console.log(this.data.input_firm)
  },
  dianZan: function (e) {
    if (app.globalData.user_id == "") {
      wx.showToast({
        title: '请先授权',
      })
    }else{

    
    var that = this;
    let url = app.globalData.url + '/api/index/addFabulous';
    let data = {
      type: 1,
      id: this.data.liuid,
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        var fabulous_num = that.data.fabulous_num
        fabulous_num++
        this.setData({
          fabulous_num: fabulous_num
        })
        wx.showToast({
          title: res.msg,
        })
        // })
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
    }
  },
  sub_fasong: function (e) {
    if (app.globalData.user_id == ""){
      wx.showToast({
        title: '请先授权',
      })
    }else{
    var that = this;
    console.log("1")
    let url = app.globalData.url + '/api/index/addComment';
    let data = {
      resources_type: 1,
      resources_id: this.data.liuid,
      user_id: app.globalData.user_id,
      user_name: app.globalData.userInfo.nickName,
      headimg: app.globalData.userInfo.avatarUrl,
      content: this.data.input_firm
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        // this.setData({
        //   detilds: res.result
        // })
        wx.showToast({
          title: res.msg + '审核中',
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
    that.setData({
      isteast: false,
      input_firm: '',
    })
    }
  },
  opcthide:function(e){
    var that = this;
    that.setData({
      isteast: false
    })
  },
  // sub_fasong:function(e){
  //   var that = this;
  //   that.setData({
  //     isteast: false
  //   })
  // },
  // textarea 输入时触发
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