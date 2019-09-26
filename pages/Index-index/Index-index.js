 var app = getApp();
var httpUtils = require('../../js/httpUtils.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:'',
    getNewActive:'',
    navList:[
      {
        name:"禅七",
        imgurl:"../../images/chanqi.png",
        id:1
      },{
        name: "佛七",
        imgurl: "../../images/fuoqi.png",
        id: 2
      },
      {
        name: "地藏七",
        imgurl: "../../images/qi.png",
        id: 3
      },
      {
        name: "南传内观",
        imgurl: "../../images/neiguan.png",
        id: 4
      },
      {
        name: "止观",
        imgurl: "../../images/zhiguan.png",
        id: 5
      },
      {
        name: "心密",
        imgurl: "../../images/xinmi.png",
        id: 6
      },
      {
        name: "闭关",
        imgurl: "../../images/guanbi.png",
        id: 7
      },
      {
        name: "禅医健康",
        imgurl: "../../images/jian.png",
        id: 8
      },
    ],
    noter:[
      {
        image:"../../images/fu.png",
        title:"求忏悔，忏悔三世罪",
        txt:"只有忏悔才有效,真正的忏悔是念佛,念佛救西方净土,园成佛果。"
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
    ],
    hasUserInfo: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.hideLoading()
  
    setTimeout(function () {
      if (app.globalData.userInfo == null) {
        that.setData({
          hasUserInfo: false
        })
      }
    }, 1000)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log(res)
          app.globalData.MyUserInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    console.log(app.globalData.userInfo)
    // 获取首页轮播图
    let url = app.globalData.url + '/api/index/homeBanne';
    console.log(url)
    let data = {
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      this.setData({
        detail:res.result
      })
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    // 最新分布活动
    let url1 = app.globalData.url + '/api/index/getNewActive';
    let data1 = {
    };
    console.log(data)
    app.wxRequest('POST', url1, data1, (res) => {
      console.log(res)
      var that = this;
      this.setData({
        getNewActive: res.result
      })
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    let url2 = app.globalData.url + '/api/index/getArticle';
    let data2 = {
    };
    console.log(data)
    app.wxRequest('POST', url2, data2, (res) => {
      console.log(res)
      var that = this;
      for (var i = 0; i < res.result.length; i++) {
        res.result[i].content = res.result[i].content.replace(/<[^>]+>/g, "")
      }
      this.setData({
        wenzhang: res.result
      })
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    let url3 = app.globalData.url + '/api/index/getVideo';
    let data3 = {
    };
    console.log(data)
    app.wxRequest('POST', url3, data3, (res) => {
      console.log(res)
      var that = this;
      for (var i = 0; i < res.result.length; i++) {
        res.result[i].content = res.result[i].content.replace(/<[^>]+>/g, "")
      }
      this.setData({
        getVideo: res.result
      })
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    let url4 = app.globalData.url + '/api/index/getCategory';
    let data4 = {
    };
    console.log(data)
    app.wxRequest('POST', url4, data4, (res) => {
      console.log(res)
      var that = this;
      that.setData({
        navList:res.result
      })
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    let url5 = app.globalData.url + '/api/index/isOpen';
    console.log(url)
    let data5 = {
    };
    console.log(data)
    app.wxRequest('POST', url5, data5, (res) => {
      console.log(res)
      var that = this;
      wx.setNavigationBarTitle({
        title: res.result.title_name
      })
      this.setData({
        ioops: res.result.video,
        ittitls: res.result.search_name
      })
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    getOpenid(that)
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  form_submit(e){
    console.log(e + '点击form')
    console.log(e.detail.formId)
    let url = app.globalData.url + '/api/index/addFromId';
    let data = {
      user_id: app.globalData.user_id,
      fromid: e.detail.formId
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      // if (res.status == 1) {
      //   this.setData({
      //     detilds: res.result
      //   })
      // } else {
      //   wx.showToast({
      //     title: res.msg,
      //   })
      // }
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
  },
  getItemCode:function(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: "../Index-hdonghFn/Index-hdonghFn?opd=" + "分类" + '&id=' + e.currentTarget.dataset.id,
    });
  },
  noterFn:function(e){
    wx.navigateTo({
      url: "../Index-noter/Index-noter?id=" + e.currentTarget.dataset.id,
    });
  },
  hdonghFn:function(e){
    wx.navigateTo({
      url: "../Index-hdonghFn/Index-hdonghFn?opd=" + "活动",
    });
  },
  lookAll:function(e){
    wx.navigateTo({
      url: "../Index-lookAll/Index-lookAll",
    });
  },
  lookwanqiFn:function(e){
    wx.navigateTo({
      url: "../Index-lookwanqiFn/Index-lookwanqiFn",
    });
  },
  searchFn:function(e){
    wx.navigateTo({
      url: "../Index-searchFn/Index-searchFn",
    });
  },
  video_delit:function(e){
    wx.navigateTo({
      url: "../Index-lookAlldeilt/Index-lookAlldeilt?id=" + e.currentTarget.dataset.id,
    });
  },
  noterFnnei: function (e) {
    wx.navigateTo({
      url: "../Index-hdonghdelit/Index-hdonghdelit?id=" + e.currentTarget.dataset.id,
    });
  },
  goChannel: function (e) {
    wx.navigateTo({
      url: "../Index-hdonghdelit/Index-hdonghdelit?id=" + e.currentTarget.dataset.activities_id,
    });
  },
  getUserInfo(e) {

    console.log("ok")
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        app.globalData.userInfo = res.userInfo
        that.setData({
          wxuser: res.userInfo,
          hasUserInfo: true,
          canIUse: true,
        })
      },
      fail: function () { }
    })
    getOpenid(that)
  },
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
function getOpenid(that) {
  var url = app.globalData.url + '/api/index/getOpenid';
  var url1 = app.globalData.url + '/api/user/getUserInfo';
  var url2 = app.globalData.url + '/api/user/addUser';
  // var url = 
  console.log(that)
  var params = {};
  params.appId = 'wxf90793b6b6ec6236';
  console.log(params.appId);
  var wxlogin = httpUtils.httpPromise(wx.login);
  wxlogin().then(function (res) {
    console.log(res)
    params.code = res.code;
    app.wxRequest('POST', url, params, (res) => {
      console.log(res)
      var that = this;
      app.globalData.openId = res.result.openid
      params.openid = res.result.openid;
      app.wxRequest('POST', url1, params, (res) => {
        console.log(res)
        if (res.status == '1'){
          app.globalData.user_id = res.result.id
          app.globalData.user_name = res.result.user_name
          app.globalData.is_organizer = res.result.is_organizer
        }
        var that = this;
        if (res.status == '2'){
          console.log(app.globalData.userInfo)
          // var params1 = {

          // };
          params.openid = app.globalData.openId;
          params.headimg = app.globalData.userInfo.avatarUrl;
          params.user_name = app.globalData.userInfo.nickName;
          params.sex = app.globalData.userInfo.gender;
          console.log(params.headimg)
          console.log(params.user_name)
          app.wxRequest('POST', url2, params, (res) => {
            console.log(res)
            var that = this;
          }, (err) => {
            wx.showToast({
              title: '提交失败',
            })
            console.log(err.errMsg)
          })
        }

      }, (err) => {
        wx.showToast({
          title: '提交失败',
        })
        console.log(err.errMsg)
      })
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    var params1 = {
      openid: app.globalData.openId
    }
   

  })

}