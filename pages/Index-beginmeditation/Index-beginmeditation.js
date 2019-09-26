// pages/Index-beginmeditation/Index-beginmeditation.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indexst:[
      {
        loit:"打坐",
        txt:"久静则定，久动则疲",
        idx:"0",
        img:"../../images/1b.png",
        meditation_type:'1',
      }, 
      // {
      //   loit: "念佛",
      //   txt: "无有分别无取无舍",
      //   idx: "1",
      //   img: "../../images/2b.png",
      //   meditation_type: '2',
      // }, 
      // {
      //   loit: "持咒",
      //   txt: "化解当下恶业识为善业识",
      //   idx: "2",
      //   img: "../../images/3b.png",
      //   meditation_type: '3',
      // },
      {
        loit: "心密打坐",
        txt: "闪烁着灵魂感悟的灵感的霞光",
        idx: "3",
        img: "../../images/4b.png",
        meditation_type: '4',
      }

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log('获取缓存', wx.getStorageSync('ridoeched')) //选择的
    console.log(app.globalData.userInfo)
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
    console.log(app.globalData.loitse)
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
  statuGo:function(e){
    // if (app.globalData.zuitime<=0){
      
    // }
    // wx.navigateTo({
    //   url: "../Index-Duantime/Index-Duantime",
    // })
    console.log(e.currentTarget.dataset.index)
    console.log(app.globalData.timeings)
    if (app.globalData.timeings !=0){
      wx.showToast({
        title: '已有在进行',
      })
    }
    if (app.globalData.loitse != ""){
      console.log('111')
      console.log(app.globalData.loitse)
      if (e.currentTarget.dataset.loit == app.globalData.loitse) {
        console.log(app.globalData.loitse)
        console.log('222')
        if (e.currentTarget.dataset.loit) {
          console.log('333')
          console.log('获取缓存', wx.getStorageSync('ridoeched')) //选择的
          if (wx.getStorageSync('ridoeched') == '' && e.currentTarget.dataset.index==3){
            console.log(e.currentTarget.dataset.loit)
            wx.navigateTo({
              url: "../Index-twoAll/Index-twoAll?idx=" + e.currentTarget.dataset.index + '&title_clener=' + '心密' + '&meditation_type=' + e.currentTarget.dataset.meditation_type + '&loit=' + e.currentTarget.dataset.loit,
            })
          }
          else{
            if (e.currentTarget.dataset.index == '3') {
              wx.navigateTo({
                url: "../Index-xinMiFn/Index-xinMiFn?idx=" + e.currentTarget.dataset.index + '&title_clener=' + '心密' + '&meditation_type=' + e.currentTarget.dataset.meditation_type + '&loit=' + e.currentTarget.dataset.loit,
              })
            }
            else {
              var timestamp = Date.parse(new Date());
              // timestamp = timestamp / 1000;
              app.globalData.timeing = timestamp
              wx.navigateTo({
                url: "../Index-statuGo/Index-statuGo?meditation_type=" + e.currentTarget.dataset.meditation_type + '&loit=' + e.currentTarget.dataset.loit,
              })
            }
          }
      
        }

      }
    }
    
    else{
      console.log('获取缓存', wx.getStorageSync('ridoeched')) //选择的
      if (e.currentTarget.dataset.index == '3') {
        console.log(e.currentTarget.dataset.index)
        
        if (wx.getStorageSync('ridoeched')!= ''){
          wx.navigateTo({
            url: "../Index-twoAll/Index-twoAll?idx=" + e.currentTarget.dataset.index + '&title_clener=' + '心密' + '&meditation_type=' + e.currentTarget.dataset.meditation_type + '&loit=' + e.currentTarget.dataset.loit,
          })
        }else{
      
          wx.navigateTo({
            url: "../Index-xinMiFn/Index-xinMiFn?idx=" + e.currentTarget.dataset.index + '&title_clener=' + '心密' + '&meditation_type=' + e.currentTarget.dataset.meditation_type + '&loit=' + e.currentTarget.dataset.loit,
          })
        }
       
      }
      else {
        console.log(e.currentTarget.dataset.index)
        var timestamp = Date.parse(new Date());
        // timestamp = timestamp / 1000;
        app.globalData.timeing = timestamp
        wx.navigateTo({
          url: "../Index-statuGo/Index-statuGo?meditation_type=" + e.currentTarget.dataset.meditation_type + '&loit=' + e.currentTarget.dataset.loit,
        })
      }

    }
  
  },
  jiLufn:function(e){
    wx.navigateTo({
      url: "../Index-meChanxui/Index-meChanxui",
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