// pages/Index-gosignup/Index-gosignup.js
var dataTimeFntile = require('../../js/data.js');
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    
    pickerProData: {
      index: 0,
      items: ['请选择', '   男   ', '   女   ']
    },
    pickerProDatari: {
      index: 0,
      items: ['选择出生日期', '   1990-02-05   ', '   1990-02-05   ']
    },
    ystatus: '',
    ystatusp: '',
    isGuan: false,
    year: '',
    years: '选择出生日期',
    n: "",
    y: "",
    r: "",
    ouser_num: "",
    bot_Name: "支付并报名",
    Time: '发送验证码',
    buttonDisable: false,
    moiles: {},
    id_dxid: '',
    user_name: '',
    id_number: '',
    index_rido: '',
    msg_code:'',
    activities_money:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)

    this.setData({
      id_dxid: options.id,
      activities_money: options.activities_money
    })
    // console.log(dataTimeFntile)
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);

    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    console.log("当前时间：" + Y + '年' + M + '月' + D + '日');
    this.setData({
      year: Y,
      n: Y,
      y: M,
      r: D
    })
    console.log(this.data.year)
    // const formdatadate = date => date.split(/\D+/g).map(it => it.length < 2 ? `0${it}` : it).join('')
    // console.log(`${(formdatadate(new Date().toLocaleDateString()) - formdatadate(this.data.time)) / 10000}`)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  pickerProChange: function(e) {
    this.setData({
      'pickerProData.index': e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProData.index)
    console.log(that.data.pickerProData.items[that.data.pickerProData.index])

  },
  pickerProChangedata: function(e) {
    // this.setData({
    //   'pickerProDatari.index': e.detail.value
    // })
    // var that = this;
    // console.log(that.data.pickerProDatari.index)
    // console.log(that.data.pickerProDatari.items[that.data.pickerProDatari.index])
    var st_year = e.detail.value.substring(0, 4);
    var ouser_num = this.data.year - st_year
    console.log(ouser_num)
    this.setData({
      years: e.detail.value,
      ouser_num: ouser_num
    });
    console.log(e.detail.value.year)
    console.log(st_year)
    console.log(this.data.years)

  },
  userFn: function(e) {
    this.setData({

      user_name: e.detail.value

    })
    console.log(this.data.user_name)
  },
  msg_codeFn: function(e) {
    this.setData({

      msg_code: e.detail.value

    })
    console.log(this.data.msg_code)
  },
  id_numberFn: function(e) {
    this.setData({

      id_number: e.detail.value

    })
    console.log(this.data.id_number)
  },
  ycf: function(e) {
    console.log(e)
    this.setData({

      ystatus: e.detail.value

    })
    if (this.data.ystatus == "在线支付") {
      this.setData({
        index_rido: '1'
      })
    } else {
      this.setData({
        index_rido: '2'
      })
    }
    console.log(this.data.ystatus)
    console.log(this.data.index_rido)
    console.log(this.data.ystatus.index)
    if (this.data.ystatus == "在线支付") {
      console.log("在线支付===进来了")
      this.setData({
        bot_Name: "支付并报名"
      })
    } else if (this.data.ystatus == "现场支付") {
      console.log("现场支付====进来了")
      this.setData({
        bot_Name: "报名"
      })
    }
  },
  ycfp: function(e) {

    this.setData({

      ystatusp: e.detail.value

    })
    console.log(this.data.ystatusp)
  },

  isShow: function(e) {
    var sld = this.data.id_number
    if (this.data.user_name == "" || this.data.pickerProData.index == "0" || this.data.years == "请选择出生日期" || this.data.id_number == "" || this.data.msg_code == "" || this.data.index_rido == "") {
      wx.showToast({
        title: '请完善信息',
        icon:'none'
      })
    }
    // if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(sld))) {

    //   wx.showToast({

    //     title: '身份证号码有误',

    //     duration: 2000,

    //     icon: 'none'
    //   });
    //   return false;
    // }
    if (this.data.msg_code!=this.data.moiles.msg_code){
      wx.showToast({

        title: '验证码有误',

        duration: 2000,

        icon: 'none'
      });
    }
    else {


      this.setData({
        isGuan: true
      })
      var that = this
      console.log(this.data.bot_Name + "-----事件进来了")
      if (that.data.bot_Name == "支付并报名") {

        console.log("-----在线支付进来了")
        console.log(this.data.bot_Name)
        that.setData({
          isGuan: true
        })
      } else if (that.data.bot_Name == "报名") {
        wx.showToast({
          title: '报名成功',
        })
        let url = app.globalData.url + '/api/User/userSignUp';
        let data = {
          user_id: app.globalData.user_id,
          phone: this.data.moiles.mobile,
          activities_id: this.data.id_dxid,
          user_name: this.data.user_name,
          user_birth: this.data.years,
          sex: this.data.pickerProData.index,
          user_yaer: this.data.ouser_num,
          id_number: this.data.id_number,
          pay_type: this.data.index_rido,
          sms_code: this.data.msg_code
        };
        app.wxRequest('POST', url, data, (res) => {
          console.log(res)
          var that = this;
          wx.showLoading({
            title: '加载中',
          })
          wx.hideLoading()
          if (res.status == 1) {
            // that.setData({
            //   delits: res.result
            // })
            wx.switchTab({
              url: '../Index-index/Index-index',
              // pages/Index-index/Index - index
            })
            wx.showToast({
              title: '报名成功',
            })
            that.setData({
              isGuan: false
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
        wx.showToast({
          title: '报名成功',
        })
      }
    }
  },
  isGuan: function(e) {
    this.setData({
      isGuan: false
    })
  },
  mobileInputEvent: function(e) {
    this.setData({
      'moiles.mobile': e.detail.value
    })
  },
  verifyCodeEvent: function(e) { //点击发送验证码 
    var that = this;
    if (!this.data.buttonDisable) {
      var mobile = this.data.moiles.mobile;
      var regMobile = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      console.log(regMobile)
      if (!regMobile.test(mobile)) {
        wx.showToast({
          icon:'none',
          title: '手机号有误！'
        })
        return false;
      }
      var c = 60;
      var intervalId = setInterval(function() {
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
        phone: this.data.moiles.mobile,
        activities_id: this.data.id_dxid
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
  paymentFn:function(e){
    if (this.data.ystatusp==""){
      wx.showToast({
        title: '请选择支付方式',
      })
    }else{
      let url = app.globalData.url + '/api/User/userSignUp';
      let url1 = app.globalData.url + '/api/wechat/pay';
      let url2 = app.globalData.url + '/api/wechat/editorder';

      let data = {
        user_id: app.globalData.user_id,
        phone: this.data.moiles.mobile,
        activities_id: this.data.id_dxid,
        user_name: this.data.user_name,
        user_birth: this.data.years,
        sex: this.data.pickerProData.index,
        user_yaer: this.data.ouser_num,
        id_number: this.data.id_number,
        pay_type: this.data.index_rido,
        sms_code: this.data.msg_code
      };
      console.log(data)
      app.wxRequest('POST', url, data, (res) => {
        console.log(res)
        var that = this;
        if (res.status == 1) {
          that.setData({
            signup_id:res.result.id
          })
          console.log(that.data.signup_id)
          let data1 = {
            signup_id:res.result.id
          };
          app.wxRequest('POST', url1, data1, (res) => {
            console.log(res)
            var that = this;
            console.log(res)
            if (res.state == 200) {
              console.log(res)
              wx.requestPayment({

                'timeStamp': res.timeStamp,
                'nonceStr': res.nonceStr,
                'package': res.package,
                'signType': 'MD5',
                'paySign': res.paySign,
                'success': function (res) {
                  console.log(res);
                    wx.showToast({
                      title: "支付成功",
                    })
                  that.setData({
                    isGuan: true
                  })
                  
                    let data2 = {
                      signup_id: that.data.signup_id,
                      type:2
                    }
                    console.log(data2)
                  app.wxRequest('POST', url2, data2, (res) => {
                    console.log(res)
                    var that = this;
                    if (res.status == 1) {
                      
                    } else {
                      // wx.showToast({
                      //   title: res.msg,
                      // })
                    }
                  }, (err) => {
                    wx.showToast({
                      title: '提交失败',
                    })
                    console.log(err.errMsg)
                  })
                  wx.switchTab({
                    url: '../Index-index/Index-index',
                    // pages/Index-index/Index - index
                  })
                },
                'fail': function (res) {
                  wx.showToast({
                    title: "支付失败",
                  })
                  let data2 = {
                    signup_id: that.data.signup_id,
                    type: 1
                  }
                  app.wxRequest('POST', url2, data2, (res) => {
                    console.log(res)
                    var that = this;
                    if (res.status == 1) {

                    } else {
                      // wx.showToast({
                      //   title: res.msg,
                      // })
                    }
                  }, (err) => {
                    wx.showToast({
                      title: '提交失败',
                    })
                    console.log(err.errMsg)
                  })
                }
              })
// 140522199506020345
            } else {
              // wx.showToast({
              //   title: res.msg,
              // })
            }
          }, (err) => {
            wx.showToast({
              title: '提交失败',
            })
            console.log(err.errMsg)
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

var aCity = {
  11: "北京",
  12: "天津",
  13: "河北",
  14: "山西",
  15: "内蒙古",
  21: "辽宁",
  22: "吉林",
  23: "黑龙江",
  31: "上海",
  32: "江苏",
  33: "浙江",
  34: "安徽",
  35: "福建",
  36: "江西",
  37: "山东",
  41: "河南",
  42: "湖北",
  43: "湖南",
  44: "广东",
  45: "广西",
  46: "海南",
  50: "重庆",
  51: "四川",
  52: "贵州",
  53: "云南",
  54: "西藏",
  61: "陕西",
  62: "甘肃",
  63: "青海",
  64: "宁夏",
  65: "新疆",
  71: "台湾",
  81: "香港",
  82: "澳门",
  91: "国外"
}
//2、正则表达式判断
function isCardID(sId) {
  var iSum = 0;
  var info = "";
  if (!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误";
  sId = sId.replace(/x$/i, "a");
  if (aCity[parseInt(sId.substr(0, 2))] == null) return "你的身份证地区非法";
  // sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
  var d = new Date(sBirthday.replace(/-/g, "/"));
  // if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "身份证上的出生日期非法";
  for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
  if (iSum % 11 != 1) return "你输入的身份证号非法";
  aCity[parseInt]
  return true;
}