var app = getApp()
// pages/Index-xinMiFn/Index-xinMiFn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idsx: "",
    loit: '',
    topbgcFn: true,
    botbgcFn: true,
    ridoeched:'',
    leiname: '',
    optian: '',
    optians: '',
    idopst: '',
    pickerProDatads: {
      index: 0,
      items: ['请选择','1', '2']
    },
    pickerProDatado: {
      index: 0,
      items: ['请选择', '1', '2', '3', '4', '5', '6', ]
    },
    pickerProDatadt: {
      index: 0,
      items: ['请选择',  '1', '2', '3', '4', '5', '6', '7', '8']
    },
    pickerProDatadst: {
      index: 0,
      items: ['请选择', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    pickerProDatadsq: {
      index: 0,
      items: ['请选择', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    meditation_type: '',
    round_num: '',
    print_num: '',
    seat_num: '',
    isPicker: true,
    detilds: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {



    console.log(options)

    console.log(options.idx)
    this.setData({
      idx: options.idx,
      title_clener: options.title_clener,
      meditation_type: options.meditation_type,
      leimin: options.loit
    })
    let url = app.globalData.url + '/api/Meditation/getIntimate';
    let data = {
      user_id: app.globalData.user_id,
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        if (res.result.hundred.round_num == 0 || res.result.hundred.print_num == 0 || res.result.hundred.seat_num == 0) {
          this.setData({
            isPicker: true
          })
        } else {
          this.setData({
            isPicker: false
          })
        }
        this.setData({
          detilds: res.result.hundred.hundred_num,
          round_num: res.result.hundred.round_num,
          print_num: res.result.hundred.print_num,
          seat_num: res.result.hundred.seat_num,
        })
        app.globalData.hundred_num = res.result.hundred.hundred_num
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
  optianFn: function (e) {
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
  onReady: function() {

  },
  ycf: function(e) {
    var that = this;
    if (e.detail.value == "1") {
      this.setData({
        topbgcFn: false,
        botbgcFn: true,
        ridoeched:'1'
      })
    }
    if (e.detail.value == "2") {
      this.setData({
        topbgcFn: true,
        botbgcFn: false,
        ridoeched: '2'
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  celarFn: function(e) {
    wx.showModal({
      title: '提示',
      content: '您确认从百座开始重修？',
      success: function(res) {
        if (res.confirm) {
         
          // 删除索引从1
          let url = app.globalData.url + '/api/Meditation/clearTime';
          let data = {
            user_id: app.globalData.user_id,
          };
          console.log(data)
          app.wxRequest('POST', url, data, (res) => {
            console.log(res)
            var that = this;
            if (res.status == 1) {
              wx.showToast({
                title: res.msg,
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
          var pages = getCurrentPages();

          if (pages.length > 1) {
            var beforePage = pages[pages.length - 2]; //获取上一个页面实例对象
            // beforePage.changeData(); //触发父页面中的方法
          }
          wx.navigateBack({
            delta: 1
          });
          app.globalData.timeings='';
          app.globalData.loitse='';
        } else {
          console.log(res);
        }
      },
      fail: function(res) {
        console.log(res);
      }
    })

  },
  pickerProChangeds: function(e) {
    this.setData({
      'pickerProDatads.index': e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProDatads.index)
    console.log(that.data.pickerProDatads.items[that.data.pickerProDatads.index])
  },
  pickerProChangedo: function(e) {
    this.setData({
      'pickerProDatado.index': e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProDatado.index)
    console.log(that.data.pickerProDatado.items[that.data.pickerProDatado.index])
  },
  pickerProChangedt: function(e) {
    this.setData({
      'pickerProDatadt.index': e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProDatadt.index)
    console.log(that.data.pickerProDatadt.items[that.data.pickerProDatadt.index])
  },
  pickerProChangedst: function(e) {
    this.setData({
      'pickerProDatadst.index': e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProDatadst.index)
    console.log(that.data.pickerProDatadst.items[that.data.pickerProDatadst.index])
  },
  pickerProChangedsq: function(e) {
    this.setData({
      'pickerProDatadsq.index': e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProDatadsq.index)
    console.log(that.data.pickerProDatadsq.items[that.data.pickerProDatadsq.index])
  },
  baiFn: function(e) {
    wx.setStorageSync('round_num', this.data.pickerProDatads.items[this.data.pickerProDatads.index])
    wx.setStorageSync('print_num', this.data.pickerProDatado.items[this.data.pickerProDatado.index])
    wx.setStorageSync('seat_num', this.data.pickerProDatadt.items[this.data.pickerProDatadt.index])
      wx.setStorageSync('ridoeched', this.data.ridoeched)
    // console.log(wx.setStorageSync('ridoeched', this.data.ridoeched))
    if (app.globalData.timeings != 0) {
      wx.showToast({
        title: '已有在进行',
      })
    }
    if (app.globalData.idopst != '') {
      if (app.globalData.idopst == e.currentTarget.dataset.idopst) {
        if (this.data.seat_num == "0" || this.data.print_num == "0" || this.data.round_num == "0") {

          if (this.data.pickerProDatado.index == 0 || this.data.pickerProDatads.index == 0 || this.data.pickerProDatadt.index == 0) {
            wx.showToast({
              title: '请选择信息',
            })
          } else {
            // topbgcFn: false,
            //   topbgcFn: true
          
            var timestamp = Date.parse(new Date());
            // timestamp = timestamp / 1000;
            app.globalData.timeing = timestamp
            wx.navigateTo({
              url: "../Index-statuGo/Index-statuGo?idx=" + this.data.idx + '&title_clener=' + '心密' + '&meditation_type=' + this.data.meditation_type + '&loit=' + this.data.leimin + '&lun=' + this.data.pickerProDatads.items[this.data.pickerProDatads.index] + '&yin=' + this.data.pickerProDatado.items[this.data.pickerProDatado.index] + '&zuo=' + this.data.pickerProDatadt.items[this.data.pickerProDatadt.index] + '&idopst=' + 'baizuo' + '&ridoeched=' + this.data.ridoeched,
            })
          }
        } else {
          
          var timestamp = Date.parse(new Date());
          // timestamp = timestamp / 1000;
          app.globalData.timeing = timestamp
          wx.navigateTo({
            url: "../Index-statuGo/Index-statuGo?idx=" + this.data.idx + '&title_clener=' + '心密' + '&meditation_type=' + this.data.meditation_type + '&loit=' + this.data.leimin + '&lun=' + this.data.round_num + '&yin=' + this.data.print_num + '&zuo=' + this.data.seat_num + '&idopst=' + 'baizuo' + '&ridoeched=' + this.data.ridoeched,
          })
        }
      }

    } else {
      if (this.data.seat_num == "0" || this.data.print_num == "0" || this.data.round_num == "0") {

        if (this.data.pickerProDatado.index == 0 || this.data.pickerProDatads.index == 0 || this.data.pickerProDatadt.index == 0) {
          wx.showToast({
            title: '请选择信息',
          })
        } else {

          var timestamp = Date.parse(new Date());
          // timestamp = timestamp / 1000;
          app.globalData.timeing = timestamp
          wx.navigateTo({
            url: "../Index-statuGo/Index-statuGo?idx=" + this.data.idx + '&title_clener=' + '心密' + '&meditation_type=' + this.data.meditation_type + '&loit=' + this.data.leimin + '&lun=' + this.data.pickerProDatads.items[this.data.pickerProDatads.index] + '&yin=' + this.data.pickerProDatado.items[this.data.pickerProDatado.index] + '&zuo=' + this.data.pickerProDatadt.items[this.data.pickerProDatadt.index] + '&idopst=' + 'baizuo' + '&ridoeched=' + this.data.ridoeched,
          })
        }
      } else {

        var timestamp = Date.parse(new Date());
        // timestamp = timestamp / 1000;
        app.globalData.timeing = timestamp
        wx.navigateTo({
          url: "../Index-statuGo/Index-statuGo?idx=" + this.data.idx + '&title_clener=' + '心密' + '&meditation_type=' + this.data.meditation_type + '&loit=' + this.data.leimin + '&lun=' + this.data.round_num + '&yin=' + this.data.print_num + '&zuo=' + this.data.seat_num + '&idopst=' + 'baizuo' + '&ridoeched=' + this.data.ridoeched,
        })
      }
    }

  },
  // qianZuofn: function(e) {
  //   // "pages/Index-xinQiFn/Index-xinQiFn",
  //   if (app.globalData.timeings != 0) {
  //     wx.showToast({
  //       title: '已有在进行',
  //     })
  //   }
  //   if (app.globalData.idopst != '') {
  //     if (app.globalData.idopst == e.currentTarget.dataset.idopst) {
  //       wx.navigateTo({
  //         url: "../Index-xinQiFn/Index-xinQiFn?idx=" + this.data.idx + "&leiname=" + "5" + '&idopst=' + 'qianzuo',
  //       })
  //     }
  //   } else {
  //     wx.navigateTo({
  //       url: "../Index-xinQiFn/Index-xinQiFn?idx=" + this.data.idx + "&leiname=" + "5" + '&idopst=' + 'qianzuo',
  //     })
  //   }


  // },
  qianZuofn: function (e) {
    wx.setStorageSync('optian', this.data.optian)
    wx.setStorageSync('optians', this.data.optians)
    wx.setStorageSync('ridoeched', this.data.ridoeched)
    // console.log(wx.setStorageSync('ridoeched', this.data.ridoeched))
    if (app.globalData.timeings != 0) {
      wx.showToast({
        title: '已有在进行',
      })
    }
    console.log(this.data.optian)
    if (this.data.optian == "" || this.data.optians == "") {
      console.log('eeeee')
      wx.showToast({
        title: '请完善',
      })
    } else {
      var timestamp = Date.parse(new Date());
      // timestamp = timestamp / 1000;
      app.globalData.timeing = timestamp
      wx.navigateTo({
        url: "../Index-statuGo/Index-statuGo?idx=" + "3" + '&leiname=' + '5' + '&optian=' + this.data.optian + '&optians=' + this.data.optians + '&loit=' + "心密打坐" + "&idopst=" + 'qianzuo' + '&meditation_type=' + 5 + '&ridoeched=' + this.data.ridoeched,
        
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