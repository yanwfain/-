555555555555555555555555555555555555555555555// pages/Index-statuGo/Index-statuGo.js
// pages/Index-stat uGo/Index-statuGo.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clock: '',
    times: '',
    a: '',
    b: '',
    c: '',
    shengYu: false,
    isCenter: false,
    ifFour: false,
    ifThree: false,
    isThree: false,
    title_clener: '',
    hour: '',
    minute: '',
    // but_name:"开始禅修",
    startKaifn: true,
    stopKaifn: false,
    idx: "",
    miao: "",
    leimin: '',
    indexidxshi: [{
      idxs: '请选择'
    }, {
      idxs: '02'
    }, {
      idxs: '03'
    }, {
      idxs: '04'
    }, {
      idxs: '05'
    }, {
      idxs: '06'
    }, {
      idxs: '07'
    }, {
      idxs: '08'
    }, {
      idxs: '09'
    }, {
      idxs: '10'
    }, {
      idxs: '11'
    }, {
      idxs: '12'
    }, {
      idxs: '13'
    }, {
      idxs: '14'
    }, {
      idxs: '15'
    }, {
      idxs: '16'
    }, {
      idxs: '17'
    }, {
      idxs: '18'
    }, {
      idxs: '19'
    }, {
      idxs: '20'
    }, {
      idxs: '21'
    }, {
      idxs: '22'
    }, {
      idxs: '23'
    }],
    indexidxshis: [{
      idxs: '请选择'
    }, {
      idxs: '01'
    }, {
      idxs: '02'
    }, {
      idxs: '03'
    }, {
      idxs: '04'
    }, {
      idxs: '05'
    }, {
      idxs: '06'
    }, {
      idxs: '07'
    }, {
      idxs: '08'
    }, {
      idxs: '09'
    }, {
      idxs: '10'
    }, {
      idxs: '11'
    }, {
      idxs: '12'
    }, {
      idxs: '13'
    }, {
      idxs: '14'
    }, {
      idxs: '15'
    }, {
      idxs: '16'
    }, {
      idxs: '17'
    }, {
      idxs: '18'
    }, {
      idxs: '19'
    }, {
      idxs: '20'
    }, {
      idxs: '21'
    }, {
      idxs: '22'
    }, {
      idxs: '23'
    }],
    indexidxfen: [{
        idxsf: '请选择'
    }, {
        idxsf: '00'
      },
      {
        idxsf: '01'
      }, {
        idxsf: '02'
      }, {
        idxsf: '03'
      }, {
        idxsf: '04'
      }, {
        idxsf: '05'
      }, {
        idxsf: '06'
      }, {
        idxsf: '07'
      }, {
        idxsf: '08'
      }, {
        idxsf: '09'
      }, {
        idxsf: '10'
      }, {
        idxsf: '11'
      }, {
        idxsf: '12'
      }, {
        idxsf: '13'
      }, {
        idxsf: '14'
      }, {
        idxsf: '15'
      }, {
        idxsf: '16'
      }, {
        idxsf: '17'
      }, {
        idxsf: '18'
      }, {
        idxsf: '19'
      }, {
        idxsf: '20'
      }, {
        idxsf: '21'
      }, {
        idxsf: '22'
      }, {
        idxsf: '23'
      }, {
        idxsf: '24'
      }, {
        idxsf: '25'
      }, {
        idxsf: '26'
      }, {
        idxsf: '27'
      }, {
        idxsf: '28'
      }, {
        idxsf: '29'
      }, {
        idxsf: '30'
      }, {
        idxsf: '31'
      }, {
        idxsf: '32'
      }, {
        idxsf: '33'
      }, {
        idxsf: '34'
      }, {
        idxsf: '35'
      }, {
        idxsf: '36'
      }, {
        idxsf: '37'
      }, {
        idxsf: '38'
      }, {
        idxsf: '39'
      }, {
        idxsf: '40'
      }, {
        idxsf: '41'
      }, {
        idxsf: '42'
      }, {
        idxsf: '43'
      }, {
        idxsf: '44'
      }, {
        idxsf: '45'
      }, {
        idxsf: '46'
      }, {
        idxsf: '47'
      }, {
        idxsf: '48'
      }, {
        idxsf: '49'
      }, {
        idxsf: '50'
      }, {
        idxsf: '51'
      }, {
        idxsf: '52'
      }, {
        idxsf: '53'
      }, {
        idxsf: '54'
      }, {
        idxsf: '55'
      }, {
        idxsf: '56'
      }, {
        idxsf: '57'
      }, {
        idxsf: '58'
      }, {
        idxsf: '59'
      },
    ],
    xinmi: '',
    lun: '',
    yin: "",
    zuo: '',
    zuojia: '',
    hundred_num: '',
    loitse: '',
    idopst: '',
    indextimeFn: false,
    indextimeFns: false,
    nums: false,
    numss:true,
    showlde: false,
    ridoeched:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (wx.setScreenBrightness) {
      console.log(wx.setScreenBrightness)
      // 保持屏幕常亮 true / false
      wx.setKeepScreenOn({
        keepScreenOn: true
      });
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
    if (app.globalData.userInfo == null){
      wx.showToast({
        title: '请先授权',
      })
      wx.switchTab({
        url: '../Index-index/Index-index',
        // pages/Index-index/Index - index
      })
      // if (pages.length > 1) {
      //   var beforePage = pages[pages.length - 2]; //获取上一个页面实例对象
      //   // beforePage.changeData(); //触发父页面中的方法
      // }
      // wx.navigateBack({
      //   delta: 1
      // });
      // wx.navigateTo({
      //   url: "../Index-beginmeditation/Index-beginmeditation",
      // })
    } 
    else if (options.loit==''){
      wx.switchTab({
        url: '../Index-center/Index-center',
      })
      wx.showToast({
        title: '请选择打坐设置进入',
      })
    }
    // alert(options.loit)
    console.log(this.data.zuo)
    console.log(app.globalData.hundred_num)
    console.log(app.globalData.zuitime)
    console.log(options.idx)
    console.log(options.title_clener)
    console.log(options)
    // console.log("--------")
    if (options.zuo > 8 ){
      this.setData({
        zuo:1,
        yin: parseInt(options.yin) + 1
      })
      console.log(this.data.zuo)
    }else{
      this.setData({
        zuo: options.zuo,
        yin:options.yin
      })
    }
    if(options.yin > 6){
      this.setData({
        lun: parseInt(options.lun) + 1,
        yin: 1
      })
    }else{
      this.setData({
        lun: options.lun
      })
    }
    this.setData({
      ridoeched: options.ridoeched,
      idx: options.idx,
      hundred_num: app.globalData.hundred_num,
      title_clener: options.title_clener,
      meditation_type: options.meditation_type,
      user_name_op: app.globalData.user_name,
      xinmiid: options.meditation_type,
      xinmi: options.title_clener,
      leimin: options.loit,
      // lun: options.lun,
      // yin: options.yin,
      // zuo: options.zuo,
      zuojia: parseInt(options.zuo) + 1,
      loitse: options.loit,
      leiname: options.leiname,
      optian: options.optian,
      optians: options.optians,
      idopst: options.idopst
    })
    if (this.data.idopst == 'baizuo'){
      this.setData({
        baizuFanb:true,
        qianzuFanb:false
      })
    } else if (this.data.idopst == 'qianzuo'){
      this.setData({
        baizuFanb: false,
        qianzuFanb: true
      })
    }
    if (this.data.idx == 3) {
      this.setData({
        indextimeFns: true
      })

    } else {
      this.setData({
        indextimeFn: true
      })
    }

    var that = this;



    // console.log()
    var opget = app.globalData.timeing - app.globalData.timeings
    var opgets = app.globalData.zuitime - opget
    console.log("当前时间戳为：" + app.globalData.timeing);
    console.log("历史时间戳为：" + app.globalData.timeings);
    console.log("历史选择的时间戳为：" + app.globalData.zuitime);
    console.log("相差值为" + opget)
    console.log("结果" + opgets)

    console.log("当前剩余" + opget / 1000)
    // console.log();
    //时间戳
    // var time = '18111111';
    // console.log(time)

    // that.setData({
    //   times: wx.getStorageSync('miao')
    // })
    // var opget = wx.getStorageSync('miao')
    // console.log(wx.getStorageSync('miao'))
    if (opgets > 0) {
      this.countDown();
      that.setData({
        times: opgets
      })
      countdown(this);
      that.setData({
        startKaifn: false,
        stopKaifn: true,
        isCenter: false,
        isThree: false,
        shengYu: true

      })

    } else if (opgets < 0) {
      that.setData({
        times: opgets
      })
      this.stopchanFn()
      this.stopchanFns()

    }

    console.log(that.data.times)
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

    // console.log(this.data.times)
    // countdown(this);
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
  ycf: function(e) {
    console.log(e.detail.checked)
    var that = this;
    if (e.detail.value == "1") {
      this.setData({
        nums: false,
        numss:true
      })

    }
    
    if (e.detail.value == "2") {
      this.setData({
        nums: true,
        numss:false
      })
    }
console.log(this.data.nums)
  },
  codesel: function(e) {

    id: null

    codes: null

    taken: null

    spoid: null

  },


  countDown: function() {
    let that = this;
    let countDownNum = that.data.countDownNum; //获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function() { //这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum
        })
        //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (countDownNum == 0) {
          //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(that.data.timer);
          //关闭定时器之后，可作其他处理codes go here
        }
      }, 1000)
    })
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
    //什么时候触发倒计时，就在什么地方调用这个函数
    // this.stopchanFn()
    // this.countDown();

  },
  stopchanFn: function(e) {
    console.log('进来了')

    // var that = this;
    if (this.data.hour.idxs == null || this.data.minute.idxsf == null || this.data.hour.idxs == "请选择" || this.data.minute.idxsf == "请选择") {
      wx.showToast({
        title: '请选择时间',
      })
    } else {
      this.setData({
        showlde: true,
      })
    }

  },
  seleopstionFn: function(e) {
    console.log(this.data.nums)
    // if(this.data.nums== 1){
    //   wx.showToast({
    //     title: '请勾选',
    //     icon:'none'
    //   })
    // }else{
      this.setData({
        showlde: false,
      })
      app.globalData.loitse = this.data.loitse
      app.globalData.idopst = this.data.idopst
      console.log(app.globalData.loitse)
      console.log("03030303")
      var that = this;
      var timestamp = Date.parse(new Date());
      // timestamp = timestamp / 1000;
      console.log("当前时间戳为：" + timestamp);
      app.globalData.timeings = timestamp

      console.log(app.globalData.timeings)
      this.countDown();
      // console.log(wx.getStorageSync('miao'))
      var miao = JSON.stringify((this.data.hour.idxs * 3600 + this.data.minute.idxsf * 60) * 1000)
      app.globalData.zuitime = miao
      that.setData({
        miao: miao
      })
      // this.setData({
      //   times: miao
      // })
      // countdown(that);

      console.log(miao)
      var time = miao;
      console.log(time)
      this.setData({
        times: miao
      })

      var that = this;
      let url1 = app.globalData.url + '/api/Meditation/addTask';
      let data1 = {
        user_id: app.globalData.user_id,
        task_type: '2',
        all_main: that.data.times / 1000 / 60
      };
      console.log(data1)
      app.wxRequest('POST', url1, data1, (res) => {
        console.log(res)
        // var op = this;
        if (res.status == 1) {
          that.setData({
            task_id: res.result.task_id,
          })
          app.globalData.task_id = res.result.task_id
          // wx.showToast({
          //   title: res.msg,
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
      countdown(this);
      console.log(that.data.a)
      console.log(that.data.b)
      console.log(that.data.c)
      console.log(this.data.times)
      this.setData({
        startKaifn: false,
        stopKaifn: true,
        isCenter: false,
        isThree: false,
        shengYu: true

      })
    // }
    

  },
  stopchanFns: function(e) {
    // if (this.data.but_name == "取消禅修") {
    app.globalData.loitse = "";
    app.globalData.idopst = ""
    this.setData({
      startKaifn: true,
      stopKaifn: false,
      shengYu: false,
      times: "0"
    })
    app.globalData.zuitime = this.data.times
    app.globalData.timeings = 0
    console.log(app.globalData.zuitime)
    // }
    let url = app.globalData.url + '/api/Meditation/delTask';
    let data = {
      task_id: app.globalData.task_id
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
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

  },
  celarFn: function(e) {

  },
  guanBiFn: function(e) {
    this.setData({
      isCenter: false,
      isThree: false,

      times: '0',
    })

    if (this.data.xinmiid == 4) {
      this.setData({
        ifFour: true,
      })
    } else {
      this.setData({
        ifFour: false,
      })
    }
  },
  guanBiFnss: function(e) {
    this.setData({
      isCenter: false,
      isThree: false,
      isThrees: false,
      times: '0',
      ifFours: true
    })

    if (this.data.xinmiid == 4) {
      this.setData({
        ifFour: false,
      })
    }
    if (this.data.leimin == "心密打坐" || this.data.leiname == '5') {
      this.setData({
        ifFours: true,
      })
    } else {
      this.setData({
        ifFour: false,
      })
    }
  },
  fenXiangFn: function(e) {
    this.setData({
      ifThree: true
    })
  },
  quXiaoFn: function(e) {
    this.setData({
      ifThree: false
    })
  },
  guanBiFnwanchen: function(e) {
    this.setData({
      ifFour: false,
    })
  },
  guanBiFnwanchens: function(e) {
    this.setData({
      ifFours: false,
    })
  },
  bindChange: function(e) {
    var val = e.detail.value
    if (this.data.idx == 3) {
      this.setData({
        hour: this.data.indexidxshi[val[0]],
      })
    } else {
      this.setData({
        hour: this.data.indexidxshis[val[0]],
      })
    }
    console.log(this.data.hour)

  },
  returnFn: function(e) {
    wx.switchTab({
      url: '../Index-index/Index-index',
      // pages/Index-index/Index - index
    })
  },
  bindChanges: function(e) {
    var val = e.detail.value
    this.setData({

      minute: this.data.indexidxfen[val[0]]
    })

    console.log(this.data.minute)
  },
  seleopsquFn: function(e) {
    this.setData({
      showlde: false,
    })
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
    // clearTimeout(this.data.times)
    this.setData({
      times: 0
    })
    var that = this
    console.log(app.globalData.zuitime)
    if (app.globalData.zuitime != 0) {
    // if (that.data.times!=0 ){
      wx.showModal({
        title: '提示',
        content: '您确定取消本次禅修么？',
        success: function (res) {
          if (res.confirm) {
            // var that = this
            app.globalData.idopst = ""
            // this.setData({

            //   times: 0
            // })
            app.globalData.loitse=''
            app.globalData.zuitime = that.data.times
            app.globalData.timeings = 0
            let url = app.globalData.url + '/api/Meditation/delTask';
            let data = {
              task_id: app.globalData.task_id
            };
            console.log(data)
            app.wxRequest('POST', url, data, (res) => {
              console.log(res)
              // var that = this;
              if (res.status == 1) {
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
          else {
            console.log(that.data.idx)
            // var that = this
            console.log(res);
            console.log('2')
            var lun = wx.getStorageSync('round_num')
            var yin = wx.getStorageSync('print_num')
            var zuo = wx.getStorageSync('seat_num')
            var optian = wx.getStorageSync('optian')
            var optians = wx.getStorageSync('optians')
            if (wx.getStorageSync('ridoeched') == '2' && that.data.idx== 3) {
              var timestamp = Date.parse(new Date());
              // timestamp = timestamp / 1000;
              app.globalData.timeing = timestamp
              wx.navigateTo({
                url: "../Index-statuGo/Index-statuGo?idx=" + "3" + '&leiname=' + '5' + '&optian=' + optian + '&optians=' + optians + '&loit=' + "心密打坐" + "&idopst=" + 'qianzuo' + '&ridoeched=' + 2,

              })
              console.log(111)
            } else if (wx.getStorageSync('ridoeched') == '1' && that.data.idx == 3) {
              var timestamp = Date.parse(new Date());
              // timestamp = timestamp / 1000;
              app.globalData.timeing = timestamp
              wx.navigateTo({
                url: "../Index-statuGo/Index-statuGo?idx=" + 3 + '&title_clener=' + '心密' + '&meditation_type=' + 4 + '&loit=' + '心密打坐' + '&lun=' + lun + '&yin=' + yin + '&zuo=' + zuo + '&idopst=' + 'baizuo' + '&ridoeched=' + 1,
              })
              console.log(222)
            } else {
              console.log(333)
              var timestamp = Date.parse(new Date());
              // timestamp = timestamp / 1000;
              app.globalData.timeing = timestamp
              wx.navigateTo({
                url: "../Index-statuGo/Index-statuGo?meditation_type=" + 1 + '&loit=' + '打坐',
              })
            }
          }
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }
   
    // this.celarFn()
  },

  celarFn: function (e) {
   

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
  onShareAppMessage: function(options) {
    var that = this;
    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return {
      title: '禅修分享',
    }
  }
})
/* 毫秒级秒杀倒计时 */

function countdown(that) {

  // 渲染倒计时时钟

  that.setData({

    clock: dateformat(that.data.times), //格式化时间

    a: dateformats(that.data.times),

    b: dateformat_hur(that.data.times),

    c: dateformat_tim(that.data.times)

  });



  if (that.data.times <= 0) {

    that.setData({

      clock: "倒计时：0"

    });

    // timeout则跳出递归

    return;

  }



  //settimeout实现倒计时效果

  setTimeout(function() {

    // 放在最后--

    that.data.times -= 10;

    countdown(that);
    // console.log(that.data.times)
    // console.log(that.data.times)
    var timesop = that.data.times
    // wx.setStorageSync("miao", that.data.times)
    if (that.data.times == 0) {

      // 判断在这里
      if (that.data.nums == true) {
        app.globalData.loitse = "";
        app.globalData.idopst = ""
        if (that.data.idopst =='baizuo') {
          console.log('555')
          that.setData({
            isCenter: false,
            isThree: true,
            isThrees: false,
          })
        } else if (that.data.idopst=='qianzuo') {
          console.log('22')
          that.setData({
            isCenter: false,
            isThree: false,
            isThrees: true,
          })
        } else {
          console.log('33')
          that.setData({
            isCenter: true,
            isThree: false,
            isThrees: false,
          })
        }
        that.setData({
          startKaifn: true,
          stopKaifn: false,
        })

        let url = app.globalData.url + '/api/Meditation/addMeditation';
        console.log(that.data.leimin)

        if (that.data.leimin == "心密打坐") {
          console.log('11111')
          let data = {
            user_id: app.globalData.user_id,
            meditation_hour: that.data.hour.idxs,
            meditation_main: that.data.minute.idxsf,
            meditation_type: that.data.meditation_type,
            day_num: that.data.optian, //千座天数
            round_num: that.data.lun,
            print_num: that.data.yin,
            seat_num: parseInt(that.data.zuo) +1,
          };
          console.log(data)
          app.wxRequest('POST', url, data, (res) => {
            console.log(res)
            // var opp = this;
            if (res.status == 1) {

              wx.showToast({
                title: res.msg,

              })

              that.setData({

                zuo: parseInt(parseInt(that.data.zuo) + 1),
                meditation_mains: res.result.meditation_main,
                rank: res.result.rank,
                tiemss_time: res.result.time

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
        if (that.data.leimin == "心密打坐" || that.data.leiname == '5') {
          console.log('5555')
          let data = {
            user_id: app.globalData.user_id,
            meditation_hour: that.data.hour.idxs,
            meditation_main: that.data.minute.idxsf,
            meditation_type: that.data.leiname,
            day_num: that.data.optian, //千座天数
            round_num: "",
            print_num: "",
            seat_num: parseInt(that.data.optians) + 1 ,
          };
          console.log(data)
          app.wxRequest('POST', url, data, (res) => {
            console.log(res)
            // var opp = this;
            if (res.status == 1) {

              wx.showToast({
                title: res.msg,
              })
              that.setData({
                meditation_mains: res.result.meditation_main,
                rank: res.result.rank,
                tiemss_time: res.result.time
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

        } else {
          console.log('22222')
          let data = {
            user_id: app.globalData.user_id,
            meditation_hour: that.data.hour.idxs,
            meditation_main: that.data.minute.idxsf,
            meditation_type: that.data.meditation_type,
            day_num: "", //千座天数
            seat_num: "", //千座几座
            round_num: "",
            print_num: "",
            seat_num: "",
          };
          console.log(data)
          app.wxRequest('POST', url, data, (res) => {
            console.log(res)
            // var op = this;
            if (res.status == 1) {

              wx.showToast({
                title: res.msg,
              })

              that.setData({

                meditation_mains: res.result.meditation_main,
                rank: res.result.rank,
                tiemss_time: res.result.time

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

        wx.vibrateLong({
          success: function () {
            console.log("vibrate success");
          }
        })
      } else if(that.data.numss= true) {
        app.globalData.loitse = "";
        app.globalData.idopst = ""
        if (that.data.idopst == 'baizuo') {
          that.setData({
            isCenter: false,
            isThree: true,
            isThrees: false,
          })
        } else if (that.data.idopst == 'qianzuo') {
          that.setData({
            isCenter: false,
            isThree: false,
            isThrees: true,
          })
        } else {
          that.setData({
            isCenter: true,
            isThree: false,
            isThrees: false,
          })
        }
        that.setData({
          startKaifn: true,
          stopKaifn: false,
        })

        let url = app.globalData.url + '/api/Meditation/addMeditation';
        console.log(that.data.leimin)
        console.log(that.data.leiname)

        if (that.data.leimin == "心密打坐" && that.data.meditation_type == '4') {
          console.log('11111')
          let data = {
            user_id: app.globalData.user_id,
            meditation_hour: that.data.hour.idxs,
            meditation_main: that.data.minute.idxsf,
            meditation_type: that.data.meditation_type,
            day_num: "", //千座天数
            round_num: that.data.lun,
            print_num: that.data.yin,
            seat_num: parseInt(that.data.zuo) + 1,
          };
          console.log(data)
          app.wxRequest('POST', url, data, (res) => {
            app.globalData.zuitime = 0
            console.log(res)
            // var opp = this;
            if (res.status == 1) {
              wx.setStorageSync('ridoeched', that.data.ridoeched)
              wx.showToast({
                title: res.msg,
              })

              that.setData({


                meditation_mains: res.result.meditation_main,
                rank: res.result.rank,
                tiemss_time: res.result.time

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
        if (that.data.leimin == "心密打坐" && that.data.leiname == '5') {
          console.log('5555')
          let data = {
            user_id: app.globalData.user_id,
            meditation_hour: that.data.hour.idxs,
            meditation_main: that.data.minute.idxsf,
            meditation_type: that.data.leiname,
            day_num: that.data.optian, //千座天数
            round_num: "",
            print_num: "",
            seat_num: parseInt(that.data.optians) + 1 
          };
          console.log(data)
          app.wxRequest('POST', url, data, (res) => {
            console.log(res)
            app.globalData.zuitime = 0
            // var opp = this;
            if (res.status == 1) {
              wx.setStorageSync('ridoeched', that.data.ridoeched)
              wx.showToast({
                title: res.msg,
              })
              that.setData({
                meditation_mains: res.result.meditation_main,
                rank: res.result.rank,
                tiemss_time: res.result.time
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

        } else if (that.data.leimin == "打坐") {
          console.log('22222')
          let data = {
            user_id: app.globalData.user_id,
            meditation_hour: that.data.hour.idxs,
            meditation_main: that.data.minute.idxsf,
            meditation_type: that.data.meditation_type,
            day_num: "", //千座天数
            seat_num: "", //千座几座
            round_num: "",
            print_num: "",
            seat_num: "",
          };
          console.log(data)
          app.wxRequest('POST', url, data, (res) => {
            console.log(res)
            // var op = this;
            if (res.status == 1) {
              app.globalData.zuitime = 0
              wx.showToast({
                title: res.msg,
              })

              that.setData({

                meditation_mains: res.result.meditation_main,
                rank: res.result.rank,
                tiemss_time: res.result.time

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

        const backgroundAudioManager = wx.getBackgroundAudioManager()
        backgroundAudioManager.title = '叮提示音'
        backgroundAudioManager.epname = '叮提示音'
        backgroundAudioManager.singer = '未知'
        backgroundAudioManager.src = 'https://zk.baike360.cn/yixiu/Public/static/music//ding.mp3'
        // https://zk.baike360.cn/yixiu/Public/static/music/
      }

      
    }


  }, 8) //注意毫秒的步长受限于系统的时间频率，于是我们精确到0.01s即10ms

}

function navcontent() {

}


// 时间格式化输出，如1天天23时时12分分12秒秒12 。每10ms都会调用一次

function dateformat(micro_second) {

  // 总秒数

  var second = Math.floor(micro_second / 1000);

  // 天数

  var day = Math.floor(second / 3600 / 24);



  // 总小时

  var hr = Math.floor(second / 3600);

  // 小时位

  var hr2 = hr % 24;

  // 分钟位

  var min = Math.floor((second - hr * 3600) / 60);

  // 秒位

  var sec = (second - hr * 3600 - min * 60); // equal to => var sec = second % 60;

  // 毫秒位，保留2位

  var micro_sec = Math.floor((micro_second % 1000) / 10);

  return hr2;

}

function dateformat_hur(micro_second) {

  // 总秒数

  var second = Math.floor(micro_second / 1000);

  // 天数

  var day = Math.floor(second / 3600 / 24);



  // 总小时

  var hr = Math.floor(second / 3600);

  // 小时位

  var hr2 = hr % 24;

  // 分钟位

  var min = Math.floor((second - hr * 3600) / 60);

  // 秒位

  var sec = (second - hr * 3600 - min * 60); // equal to => var sec = second % 60;

  // 毫秒位，保留2位

  var micro_sec = Math.floor((micro_second % 1000) / 10);

  return min;

}

function dateformat_tim(micro_second) {

  // 总秒数

  var second = Math.floor(micro_second / 1000);

  // 天数

  var day = Math.floor(second / 3600 / 24);



  // 总小时

  var hr = Math.floor(second / 3600);

  // 小时位

  var hr2 = hr % 24;

  // 分钟位

  var min = Math.floor((second - hr * 3600) / 60);

  // 秒位

  var sec = (second - hr * 3600 - min * 60); // equal to => var sec = second % 60;

  // 毫秒位，保留2位

  var micro_sec = Math.floor((micro_second % 1000) / 10);

  return sec;

}

function dateformats(micro_second) {

  // 总秒数

  var second = Math.floor(micro_second / 1000);

  // 天数

  var day = Math.floor(second / 3600 / 24);



  // 总小时

  var hr = Math.floor(second / 3600);

  // 小时位

  var hr2 = hr % 24;

  // 分钟位

  var min = Math.floor((second - hr * 3600) / 60);

  // 秒位

  var sec = (second - hr * 3600 - min * 60); // equal to => var sec = second % 60;

  // 毫秒位，保留2位

  var micro_sec = Math.floor((micro_second % 1000) / 10);

  return day + "天";

}
