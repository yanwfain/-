// pages/Index-hdonghdelit/Index-hdonghdelit.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeDatp:false,
    isOptxt: true,
    idsc:'',
    off:"",
    id_id:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      idsc:options.idsc,
      id_id:options.id
    })
    let url5 = app.globalData.url + '/api/index/isOpen';
    console.log(url)
    let data5 = {
    };
    console.log(data)
    app.wxRequest('POST', url5, data5, (res) => {
      console.log(res)
      var that = this;
      this.setData({
        ioops: res.result.video
      })
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    let url = app.globalData.url + '/api/index/getActiveInfo';
    let data = {
      activities_id: options.id,
      user_id: app.globalData.user_id
    };
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      wx.showLoading({
        title: '加载中',
      })
      wx.hideLoading()
      
      if (res.status == 1) {
        for ( var i = 0;i < res.result.article.length;i++){
          res.result.article[i].content = res.result.article[i].content.replace(/<[^>]+>/g, "")
        }
        this.setData({
          detail: res.result,
          videos:res.result.video,
          noter: res.result.article,
          off: res.result.is_follow,
          offs: res.result.is_sign_up,
          name: res.result.name,
          option_name: res.result.option_name,
          start_time: res.result.start_time,
          end_time: res.result.end_time,
          address: res.result.address,
          contacts_name: res.result.contacts_name,
          contacts_phone: res.result.contacts_phone,
          sign_up_end_time: res.result.sign_up_end_time,
          notice_activities: res.result.notice_activities,
          carries: res.result.carries,
          bus_line: res.result.bus_line,
          money_note: res.result.money_note
        })

      } else {
        wx.showToast({
          title: '暂无数据',
          icon: 'none',
        })
      }

    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    if(this.data.idsc == "guanli"){
      
      this.setData({
        timeDatp:true,
        isOptxt:false
      })
    }else{
      this.setData({
        timeDatp: false,
        isOptxt: true
      })
    }
  },
  saveShop:function(e){
    var off = this.data.off
    if (!app.globalData.userInfo){
      wx.showModal({
        title: '提示',
        content: '请先授权登陆！',
        success: function (res) {
          if (res.confirm) {
            wx.switchTab({
              url: '../Index-ime/Index-ime'
            })
          } else {
            console.log(res);
          }
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }else{
      if (off == 1) {

        let url = app.globalData.url + '/api/User/addFollow';
        let data = {
          activities_id: this.data.id_id,
          user_id: app.globalData.user_id
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
            this.setData({
              off: 2
            })
            wx.showToast({
              title: res.msg,
            })
          } else {
            wx.showToast({
              title: '暂无数据',
              icon: 'none',
            })
          }

        }, (err) => {
          wx.showToast({
            title: '提交失败',
          })
          console.log(err.errMsg)
        })
      } else {
        let url = app.globalData.url + '/api/User/delFollow';
        let data = {
          activities_id: this.data.id_id,
          user_id: app.globalData.user_id
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
            this.setData({
              off: 1
            })
            wx.showToast({
              title: res.msg,
            })

          } else {
            wx.showToast({
              title: '暂无数据',
              icon: 'none',
            })
          }

        }, (err) => {
          wx.showToast({
            title: '提交失败',
          })
          console.log(err.errMsg)
        })

      }
    }

  },
  optname:function(e){
    console.log(e.detail.value)
    this.setData({
      name:e.detail.value,
    })
  },
  optsttime: function (e) {
    console.log(e.detail.value)
    this.setData({
      start_time: e.detail.value,
    })
  },
  optend_time: function (e) {
    console.log(e.detail.value)
    this.setData({
      end_time: e.detail.value,
    })
  },
  optsss: function (e) {
    console.log(e.detail.value)
    this.setData({
      address: e.detail.value,
    })
  },
  contssss: function (e) {
    console.log(e.detail.value)
    this.setData({
      contacts_name: e.detail.value,
    })
  },
  contphonee: function (e) {
    console.log(e.detail.value)
    this.setData({
      contacts_phone: e.detail.value,
    })
  },
  signtime: function (e) {
    console.log(e.detail.value)
    this.setData({
      sign_up_end_time: e.detail.value,
    })
  },
  notice_a: function (e) {
    console.log(e.detail.value)
    this.setData({
      notice_activities: e.detail.value,
    })
  },
  carriesss: function (e) {
    console.log(e.detail.value)
    this.setData({
      carries: e.detail.value,
    })
  },
  bus_liness: function (e) {
    console.log(e.detail.value)
    this.setData({
      bus_line: e.detail.value,
    })
  },
  money_not: function (e) {
    console.log(e.detail.value)
    this.setData({
      money_note: e.detail.value,
    })
  },
  gobuFn:function(e){
    let url = app.globalData.url + '/api/index/editActivities';
    let data = {
      id: this.data.id_id,
      name:this.data.name,
      start_time: this.data.start_time,
      end_time:this.data.end_time,
      address: this.data.address,
      notice_activities: this.data.notice_activities,
      carries: this.data.carries,
      bus_line: this.data.bus_line,
      contacts_name: this.data.contacts_name,
      contacts_phone: this.data.contacts_phone,
      money_note: this.data.money_note,
      sign_up_end_time: this.data.sign_up_end_time
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
        wx.showToast({
          title: res.msg
        })
      } else {
        wx.showToast({
          title: res.msg
        })
      }
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
  },
  gobuFnlook:function(e){
    wx.navigateTo({
      url: "../Index-hdonghuserlook/Index-hdonghuserlook?id=" +e.currentTarget.dataset.id
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
  gosignup:function(e){
    if (!app.globalData.userInfo) {
      wx.showModal({
        title: '提示',
        content: '请先授权登陆！',
        success: function (res) {
          if (res.confirm) {
            wx.switchTab({
              url: '../Index-ime/Index-ime'
            })
          } else {
            console.log(res);
          }
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }else{
      wx.navigateTo({
        url: "../Index-gosignup/Index-gosignup?id=" + e.currentTarget.dataset.id + '&activities_money=' + e.currentTarget.dataset.activities_money,
      });
    }
   
  },
  noterFn:function(e){
    // pages / Index - noter / Index - noter
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