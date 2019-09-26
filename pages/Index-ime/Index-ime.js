var app = getApp()
var httpUtils = require('../../js/httpUtils.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isCenter: false,
    pasdfnv: "",
    nickName: '',
    avatarUrl: "",
    isCentersfrom: false,
    user_Name_rest: '',
    phone_tel: '',
    user_Ghao: '',
    pad_word: '',
    isGuanliops: false,
    isrestiorliops: true,
    Time: '发送验证码',
    buttonDisable: false,
    moiles: {},
    msg_code:'',
    isCenters:false,
    telIsshow:false,
    isUser: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this

    setTimeout(function () {
      if (app.globalData.userInfo == null) {
        that.setData({
          hasUserInfo: false,
          isUser: false
        })
      }
    }, 1000)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        isUser: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          isUser: true
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
            hasUserInfo: true,
            isUser: true
          })
        }
      })
    }
    getOpenid(that)
    console.log(app.globalData.is_organizer)
    if (app.globalData.is_organizer == 1) {
      this.setData({
        isrestiorliops: true,
        isGuanliops: false,
      })
    } else {
      this.setData({
        isGuanliops: true,
        isrestiorliops: false
      })

    }
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
      })
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    // console.log(app.globalData.openId)
    // console.log(app.globalData.userInfo)

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
          isUser:true,
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName
        })
      },
      fail: function () { }
    })
 
    getOpenid(that)
  },
  telceguan:function(e){
    this.setData({
      telIsshow:false
    })
  },
  clanlianopstion:function(e){
    this.setData({
      telIsshow: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  opsmagFn:function(e){
    this.setData({
      isCenter:false,
      isCenters:true
    })
  },
  tel: function () {
    wx.makePhoneCall({
      phoneNumber: '13801382064',
    })
  },
  verifyCodeEvents:function(e){
    var that = this;
    if (!this.data.buttonDisable) {
      var mobile = this.data.phone_tel;
      var regMobile = /^[1][3,4,5,6,7,8][0-9]{9}$/;
      console.log(regMobile)
      if (!regMobile.test(mobile)) {
        wx.showToast({
          icon: 'none',
          title: '手机号有误！'
        })
        return false;
      }
      var c = 60;
      var intervalId = setInterval(function () {
        c = c - 1;
        that.setData({
          verifyCodeTime: '重新获取' + (c),
          buttonDisable: true
        })

        console.log(c)
        if (c == 0) {
          clearInterval(intervalId);
          that.setData({
            verifyCodeTime: '发送验证码',
            buttonDisable: false
          })
        }
      }, 1000)

      let url = app.globalData.url + '/api/Sms/sendSms';
      let data = {
        user_id: app.globalData.user_id,
        phone: this.data.phone_tel,
        type: 2
      };
      console.log(data)
      app.wxRequest('POST', url, data, (res) => {
        console.log(res)
        var that = this;
        if (res.status == 1) {
          this.setData({
            'moiles.msg_code': res.result.msg_code
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
    }
  },
  verifyCodeEvent: function (e) { //点击发送验证码 
    var that = this;
    if (!this.data.buttonDisable) {
      var mobile = this.data.phone_tel;
      var regMobile = /^[1][3,4,5,6,7,8][0-9]{9}$/;
      console.log(regMobile)
      if (!regMobile.test(mobile)) {
        wx.showToast({
          icon: 'none',
          title: '手机号有误！'
        })
        return false;
      }
      var c = 60;
      var intervalId = setInterval(function () {
        c = c - 1;
        that.setData({
          verifyCodeTime: '重新获取' + (c),
          buttonDisable: true
        })

        console.log(c)
        if (c == 0) {
          clearInterval(intervalId);
          that.setData({
            verifyCodeTime: '发送验证码',
            buttonDisable: false
          })
        }
      }, 1000)

      let url = app.globalData.url + '/api/Sms/sendSms';
      let data = {
        user_id: app.globalData.user_id,
        phone: this.data.phone_tel,
        type:2
      };
      console.log(data)
      app.wxRequest('POST', url, data, (res) => {
        console.log(res)
        var that = this;
        if (res.status == 1) {
          this.setData({
            'moiles.msg_code': res.result.msg_code
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


    }

  },
  msg_codeFn: function (e) {
    this.setData({

      msg_code: e.detail.value

    })
    console.log(this.data.msg_code)
  },
  form_submit(e) {
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
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this
    this.onLoad()
    // getOpenid(that)
    if (app.globalData.is_organizer == 1) {
      this.setData({
        isrestiorliops: true,
        isGuanliops: false,
      })
    } else {
      this.setData({
        isGuanliops: true,
        isrestiorliops: false
      })

    }
    wx.showToast({
      title: '加载中',
      icon: "loading",
      duration: 500
    })
    
  },
  editFn: function(e) {
    wx.navigateTo({
      url: "../Index-editFn/Index-editFn",
    });
  },
  guanYinfn: function(e) {
    wx.navigateTo({
      url: "../Index-guanYinfn/Index-guanYinfn",
    });
  },
  xiaoFn: function(e) {
    wx.navigateTo({
      url: "../Index-xiaoFn/Index-xiaoFn",
    });
  },
  releaseYfn: function(e) {
    wx.navigateTo({
      url: "../Index-releaseYfn/Index-releaseYfn",
    });
  },
  meChanxui: function(e) {
    wx.navigateTo({
      url: "../Index-meChanxui/Index-meChanxui",
    });
  },
  commonproblem: function() {
    wx.navigateTo({
      url: "../Index-commonproblem/Index-commonproblem",
    });
  },
  administration: function(e) {
    this.setData({
      isCenter: true
    })



  },
  pasdFn: function(e) {
    this.setData({
      pasdfnv: e.detail.value
    })
    // console.log(this.data.pasdfnv)
  },
  goadministrations:function(e){
    if (this.data.msg_code != this.data.moiles.msg_code) {
      wx.showToast({

        title: '验证码有误',

        duration: 2000,

        icon: 'none'
      });
    }else{
      let url = app.globalData.url + '/api/user/loginOrganizer';
      console.log(url)
      let data = {
        user_id: app.globalData.user_id,
        // password: this.data.pasdfnv,
        type: 3,
        phone: this.data.phone_tel,
        sms_code: this.data.msg_code

      };
      console.log(data)
      app.wxRequest('POST', url, data, (res) => {
        console.log(res)
        var that = this;
        if (res.status == 1) {
          this.setData({
            admin_id: res.result.admin_id
          })
          wx.showToast({
            title: res.msg,
            // icon: 'none',
          })
          wx.navigateTo({
            url: "../Index-administration/Index-administration?idsc=guanli" + '&admin_id=' + res.result.admin_id,
          });
          this.setData({
            isCenter: false
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

    }
   

  },
  goadministration: function(e) {
    let url = app.globalData.url + '/api/user/loginOrganizer';
    console.log(url)
    let data = {
      user_id: app.globalData.user_id,
      password: this.data.pasdfnv,
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        this.setData({
          admin_id: res.result.admin_id
        })
        wx.showToast({
          title: res.msg,
          // icon: 'none',
        })
        wx.navigateTo({
          url: "../Index-administration/Index-administration?idsc=guanli" + '&admin_id=' + res.result.admin_id,
        });
        this.setData({
          isCenter: false
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



    // if (this.data.pasdfnv == "111"){

    //   wx.navigateTo({
    //     url: "../Index-administration/Index-administration?idsc=guanli",
    //   });
    //   this.setData({
    //     isCenter: false
    //   })
    // }else{
    //   wx.showToast({
    //     title: '密码错误',
    //     icon: 'none',
    //   })
    // }
  },
  resturefromFn: function(e) {
    this.setData({
      isCentersfrom: true,
    })
  },
  resubFn: function(e) {
    
    if (this.data.user_Name_rest == "" || this.data.phone_tel == "" || this.data.user_Ghao == "" || this.data.pad_word == "") {
      wx.showToast({
        title: '请完善信息',
        icon: 'none',
      })
    } else if (this.data.msg_code != this.data.moiles.msg_code){
      wx.showToast({

        title: '验证码有误',

        duration: 2000,

        icon: 'none'
      });
    }
     else {
      //  console.log('1')
     
      let url = app.globalData.url + '/api/user/addOrganizer';
      console.log(url)
      let data = {
        user_id: app.globalData.user_id,
        username: this.data.user_Ghao,
        password: this.data.pad_word,
        realname: this.data.user_Name_rest,
        phone: this.data.phone_tel,
        sms_code:this.data.msg_code
      };
      console.log(data)
      app.wxRequest('POST', url, data, (res) => {
        console.log(res)
        var that = this;
        if (res.status == 1) {

          wx.showToast({
            title: res.msg,
            // icon: 'none',
          })
          this.setData({
            isCentersfrom: false,
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




    }


  },
  nogoadministration: function(e) {
    this.setData({
      isCenter: false
    })
  },
  nogoadministrations:function(e){
    this.setData({
      isCenters: false
    })
  },
  isshowFn: function(e) {
    this.setData({
      isCentersfrom: false,
    })
  },
  qutuiFn: function(e) {
    this.setData({
      isCentersfrom: false,
    })
  },
  userninDminfn: function(e) {
    this.setData({
      user_Name_rest: e.detail.value
    })
    console.log(this.data.user_Name_rest)
  },
  usertelFn: function(e) {
    this.setData({
      phone_tel: e.detail.value
    })
    console.log(this.data.phone_tel)
  },
  zhanghuserFn: function(e) {
    this.setData({
      user_Ghao: e.detail.value
    })
    console.log(this.data.user_Ghao)
  },
  psaduserFn: function(e) {
    this.setData({
      pad_word: e.detail.value
    })
    console.log(this.data.pad_word)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
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
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

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
      // var that = this;
      app.globalData.openId = res.result.openid
      params.openid = res.result.openid;
      app.wxRequest('POST', url1, params, (res) => {
        console.log(res)
        if (res.status == '1') {
          app.globalData.user_id = res.result.id
          app.globalData.user_name = res.result.user_name
          app.globalData.is_organizer = res.result.is_organizer
          that.setData({
            avatarUrl: res.result.headimg,
            nickName: res.result.user_name
          })
        }
        // var that = this;
        if (res.status == '2') {
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