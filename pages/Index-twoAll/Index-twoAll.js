// pages/Index-twoAll/Index-twoAll.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baizuoFn:false,
    qianzuoFn:false,
    round_num:'',
    print_num:'',
    seat_num:'',
    idx:'',
    loit:'',
    meditation_type:'',
    seat_nums:'',
    day_num:'',
    isShu:false,
    kongIsops:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      idx: options.idx,
      loit:options.loit,
      meditation_type: options.meditation_type
    })
    console.log(wx.getStorageSync('round_num'))
    console.log(wx.getStorageSync('print_num'))
    console.log(wx.getStorageSync('seat_num'))
    console.log(wx.getStorageSync('optian'))
    console.log(wx.getStorageSync('optians'))
    if (this.data.round_num >= 2 || wx.getStorageSync('round_num') >= 2 && this.data.print_num >= 6 || wx.getStorageSync('print_num') >= 6 && this.data.seat_num >= 8 || wx.getStorageSync('seat_num')>=8 )  {
    this.setData({
      isbaizuoFn:false,
      isqianzuoFn:true,
    })
    }else{
      this.setData({
        isbaizuoFn: true,
        isqianzuoFn: false,
      })
    }
   
   
    if (wx.getStorageSync('ridoeched')=='1'){
      this.setData({
        baizuoFn: true,
        qianzuoFn: false,
      })
    } else if (wx.getStorageSync('ridoeched')=='2'){
      this.setData({
        qianzuoFn:true,
        baizuoFn:false
      })
    }else{
      this.setData({
        kongIsops:true,
      })
    }
    let url = app.globalData.url + '/api/Meditation/getIntimate';
    let data = {
      user_id: app.globalData.user_id,
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        this.setData({
          detilds: res.result.hundred.hundred_num,
          round_num: res.result.hundred.round_num,
          print_num: res.result.hundred.print_num,
          seat_num: res.result.hundred.seat_num,
          day_num: res.result.thousand.day_num,
          seat_nums: res.result.thousand.seat_num
        })
        if (that.data.round_num == '0'){
          this.setData({
            round_numlun: wx.getStorageSync('round_num'),
            print_numyin: wx.getStorageSync('print_num'),
            seat_numzuo: wx.getStorageSync('seat_num'),
            isShu: true
          })
         console.log(111)
        }else{
         wx.setStorageSync('round_num', that.data.round_num),
          wx.setStorageSync('print_num', that.data.print_num),
             wx.setStorageSync('seat_num', that.data.seat_num),
          this.setData({
                round_numlun: wx.getStorageSync('round_num' ),
                print_numyin: wx.getStorageSync('print_num'),
                seat_numzuo: wx.getStorageSync('seat_num'),
            // optianqt: wx.setStorageSync('optian', that.data.day_num),
            // optianqz: wx.setStorageSync('optians', that.data.seat_nums),
            isShu: true
          })
          console.log(this.data.round_numlun)
          console.log(this.data.print_numyin)
          console.log(this.data.seat_numzuo)
          console.log(222)
        }
        if (that.data.day_num == '0'){
          this.setData({
        
            optianqt: wx.getStorageSync('optian'),
            optianqz: wx.getStorageSync('optians'),
            isShu: true
          })
          console.log(this.data.optianqt)
          console.log(this.data.optianqz)
          console.log(333)
        }else{
          console.log(444)
          wx.setStorageSync('optian', that.data.day_num),
           wx.setStorageSync('optians', that.data.seat_nums),
          this.setData({
            // round_numlun: wx.setStorageSync('round_num', that.data.round_num),
            // print_numyin: wx.setStorageSync('print_num', that.data.print_num),
            // seat_numzuo: wx.setStorageSync('seat_num', that.data.seat_num),
            optianqt: wx.getStorageSync('optian' ),
            optianqz: wx.getStorageSync('optians'),
            isShu: true
          })
          console.log(this.data.optianqt)
          console.log(this.data.optianqz)
        }



        // if (that.data.round_num != '0' || that.data.day_num != '0'){
        //   this.setData({
        //     round_numlun: wx.getStorageSync('round_num'),
        //     print_numyin: wx.getStorageSync('print_num'),
        //     seat_numzuo: wx.getStorageSync('seat_num'),
        //     optianqt: wx.getStorageSync('optian'),
        //     optianqz: wx.getStorageSync('optians'),
        //       isShu: true
        //   })
        //   console.log('111')
        // } 
   
        // else if (that.data.round_num != '0' || that.data.day_num== '0' ){
        //   this.setData({
        //     round_numlun: wx.setStorageSync('round_num', that.data.round_num),
        //     print_numyin: wx.setStorageSync('print_num', that.data.print_num),
        //     seat_numzuo: wx.setStorageSync('seat_num', that.data.seat_num),
        //     optianqt: wx.setStorageSync('optian', that.data.day_num),
        //     optianqz: wx.setStorageSync('optians', that.data.seat_nums),
        //     isShu: true
        //   })
        // } 
        // else if (that.data.day_num != '0' && that.data.round_num=='0'){
        //   this.setData({
        //     optianqt: wx.setStorageSync('optian', that.data.day_num),
        //     optianqz: wx.setStorageSync('optians', that.data.seat_nums),
        //     isShu: true
        //   })
        // }
      
        // if (that.data.round_num == '0' && that.data.print_num == '0' && that.data.seat_num == '0'){
        //   that.setData({
        //     isShu: false
        //   })
        // } else if (that.data.day_num == '0' && that.data.seat_nums=='0'){
        //   that.setData({
        //     isShu: false
        //   })
        // }
        // else{
        //   that.setData({
        //     isShu: true
        //   })
        // }
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
  allzuoFn:function(e){
    
          var timestamp = Date.parse(new Date());
          // timestamp = timestamp / 1000;
          app.globalData.timeing = timestamp
          wx.navigateTo({
            url: "../Index-statuGo/Index-statuGo?idx=" + this.data.idx + '&title_clener=' + '心密' + '&meditation_type=' + this.data.meditation_type + '&loit=' + this.data.loit + '&lun=' + this.data.round_numlun + '&yin=' + this.data.print_numyin + '&zuo=' + this.data.seat_numzuo + '&idopst=' + 'baizuo' +'&ridoeched=' +1,
          })
  },

  startqianFn:function(e){
    // if (this.data.round_num >= 2){
      wx.navigateTo({
        url: "../Index-xinMiFn/Index-xinMiFn?idx=" + this.data.idx + '&title_clener=' + '心密' + '&meditation_type=' + this.data.meditation_type + '&loit=' + this.data.loit,
      })
    // }else{
    //   wx.showToast({
    //     title: '百座未达开启千座次数',
    //     icon:'none',
    //     duration:1500
    //   })
    // }
  },
  jiaqianFn:function(e){
    var timestamp = Date.parse(new Date());
    // timestamp = timestamp / 1000;
    app.globalData.timeing = timestamp
    wx.navigateTo({
      url: "../Index-statuGo/Index-statuGo?idx=" + "3" + '&leiname=' + '5' + '&optian=' + this.data.optianqt + '&optians=' + this.data.optianqz + '&loit=' + "心密打坐" + "&idopst=" + 'qianzuo' + '&ridoeched=' + 2,

    })
  },
  celarFn: function (e) {
    wx.showModal({
      title: '提示',
      content: '您确认从百座开始重修？',
      success: function (res) {
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
          wx.setStorageSync('ridoeched','') 
          var pages = getCurrentPages();

          if (pages.length > 1) {
            var beforePage = pages[pages.length - 2]; //获取上一个页面实例对象
            // beforePage.changeData(); //触发父页面中的方法
          }
          wx.navigateBack({
            delta: 1
          });
          app.globalData.timeings = '';
          app.globalData.loitse = '';
        } else {
          console.log(res);
        }
      },
      fail: function (res) {
        console.log(res);
      }
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