// pages/Index-administration/Index-administration.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    selected3: false,
    selected4: false,
    selected5: false,
    selected6: false,
    selected0: false,
    idsc: "",
    admin_id:'',
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
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      idsc:options.idsc,
      admin_id: options.admin_id
    })
    let url = app.globalData.url + '/api/user/getUserOrganizer';
    let data = {
      admin_id: this.data.admin_id,
      category_id: 1
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      wx.showLoading({
        title: '加载中',
      })
      wx.hideLoading()
      if (res.status == 1) {
        for (var i = 0; i < res.result.length; i++) {
          res.result[i].activity_content = res.result[i].activity_content.replace(/<[^>]+>/g, "")
        }
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
    let url1 = app.globalData.url + '/api/index/getCategory';
    let data1 = {
    };
    console.log(data1)
    app.wxRequest('POST', url1, data1, (res) => {
      console.log(res)
      var that = this;
      wx.showLoading({
        title: '加载中',
      })
      wx.hideLoading()
      that.setData({
        name1: res.result[0],
        name2: res.result[1],
        name3: res.result[2],
        name4: res.result[3],
        name5: res.result[4],
        name6: res.result[5],
        name7: res.result[6],
        name8:res.result[7],
      })
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    this.setData({
      selected1: false,
      selected0: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected6: false,
      selected: true
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
  noterFnnei_me:function(e){
    wx.navigateTo({
      url: "../Index-hdonghdelit/Index-hdonghdelit?idsc=guanli" + '&id=' + e.currentTarget.dataset.id,
    })
  },
  selected: function (e) {
   
    let url = app.globalData.url + '/api/user/getUserOrganizer';
    let data = {
      admin_id: this.data.admin_id,
      category_id: e.currentTarget.dataset.id
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      wx.showLoading({
        title: '加载中',
      })
      wx.hideLoading()
      if (res.status == 1) {
        for (var i = 0; i < res.result.length; i++) {
          res.result[i].activity_content = res.result[i].activity_content.replace(/<[^>]+>/g, "")
        }
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
    
    this.setData({
      selected1: false,
      selected0: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected6: false,
      selected: true
    })
  },
  selected1: function (e) {

    this.setData({
      selected0: false,
      selected2: false,
      selected: false,
      selected1: true,
        selected3: false,
      selected4: false,
      selected5: false,
      selected6: false,
    })
   
    let url = app.globalData.url + '/api/user/getUserOrganizer';
    let data = {
      admin_id: this.data.admin_id,
      category_id: e.currentTarget.dataset.id
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      wx.showLoading({
        title: '加载中',
      })
      wx.hideLoading()
      if (res.status == 1) {
        for (var i = 0; i < res.result.length; i++) {
          res.result[i].activity_content = res.result[i].activity_content.replace(/<[^>]+>/g, "")
        }
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
  selected2: function (e) {

    this.setData({
      selected0: false,
      selected2: true,
      selected: false,
      selected1: false, 
      selected3: false,
      selected4: false,
      selected5: false,
      selected6: false,
    })
    let url = app.globalData.url + '/api/user/getUserOrganizer';
    let data = {
      admin_id: this.data.admin_id,
      category_id: e.currentTarget.dataset.id
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      wx.showLoading({
        title: '加载中',
      })
      wx.hideLoading()
      if (res.status == 1) {
        for (var i = 0; i < res.result.length; i++) {
          res.result[i].activity_content = res.result[i].activity_content.replace(/<[^>]+>/g, "")
        }
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
  selected0: function (e) {

    this.setData({
      selected0: true,
      selected2: false,
      selected: false,
      selected1: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected6: false,
    })

    
    let url = app.globalData.url + '/api/user/getUserOrganizer';
    let data = {
      admin_id: this.data.admin_id,
      category_id: e.currentTarget.dataset.id
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      wx.showLoading({
        title: '加载中',
      })
      wx.hideLoading()
      if (res.status == 1) {
        for (var i = 0; i < res.result.length; i++) {
          res.result[i].activity_content = res.result[i].activity_content.replace(/<[^>]+>/g, "")
        }
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
  selected3: function (e) {

    this.setData({
      selected0: false,
      selected2: false,
      selected: false,
      selected1: false,
      selected3: true,
      selected4: false,
      selected5: false,
      selected6: false,
    })


    let url = app.globalData.url + '/api/user/getUserOrganizer';
    let data = {
      admin_id: this.data.admin_id,
      category_id: e.currentTarget.dataset.id
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      wx.showLoading({
        title: '加载中',
      })
      wx.hideLoading()
      if (res.status == 1) {
        for (var i = 0; i < res.result.length; i++) {
          res.result[i].activity_content = res.result[i].activity_content.replace(/<[^>]+>/g, "")
        }
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
  selected4: function (e) {

    this.setData({
      selected0: false,
      selected2: false,
      selected: false,
      selected1: false,
      selected3: false,
      selected4: true,
      selected5: false,
      selected6: false,
    })


    let url = app.globalData.url + '/api/user/getUserOrganizer';
    let data = {
      admin_id: this.data.admin_id,
      category_id: e.currentTarget.dataset.id
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      wx.showLoading({
        title: '加载中',
      })
      wx.hideLoading()
      if (res.status == 1) {
        for (var i = 0; i < res.result.length; i++) {
          res.result[i].activity_content = res.result[i].activity_content.replace(/<[^>]+>/g, "")
        }
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
  selected5: function (e) {

    this.setData({
      selected0: false,
      selected2: false,
      selected: false,
      selected1: false,
      selected3: false,
      selected4: false,
      selected5: true,
      selected6: false,
    })

 
    let url = app.globalData.url + '/api/user/getUserOrganizer';
    let data = {
      admin_id: this.data.admin_id,
      category_id: e.currentTarget.dataset.id
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      wx.showLoading({
        title: '加载中',
      })
      wx.hideLoading()
      if (res.status == 1) {

        for (var i = 0; i < res.result.length; i++) {
          res.result[i].activity_content = res.result[i].activity_content.replace(/<[^>]+>/g, "")
        }
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
  selected6: function (e) {

    this.setData({
      selected0: false,
      selected2: false,
      selected: false,
      selected1: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected6: true,
    })


    let url = app.globalData.url + '/api/user/getUserOrganizer';
    let data = {
      admin_id: this.data.admin_id,
      category_id: e.currentTarget.dataset.id
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      wx.showLoading({
        title: '加载中',
      })
      wx.hideLoading()
      if (res.status == 1) {
        for (var i = 0; i < res.result.length; i++) {
          res.result[i].activity_content = res.result[i].activity_content.replace(/<[^>]+>/g, "")
        }
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