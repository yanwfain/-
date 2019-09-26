var app = getApp()
var timeFormatUtils = require("../../js/timeFormatUtils.js")

const back = wx.getBackgroundAudioManager();

var util = require('../../js/utils.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    time: '请选择',
    timesbox: '请选择',
    times:"",
    xshi:"",
    fen:"",
    qshi:"",
    qfen:"",
    xtime:"",
    miaos:'',
    bxshi:"",
    bfen:'',
    bxtime:'',
    ztime:"",
    nums:"",
    timedt:'',
    n:"",
    y:'',
    r:"",
    zHen:'',
    bAn:'',
    task_id:'',
    isLook:false,
    cnetrWu:false,
    isQuesho:true,
    nn:"",
    yy:"",
    rr:"",
    ss:"",
    ff:"",
    mm:"",
    ziDFn:true,
    click_type:'',
    mmml:"00",
    dangqiantimes:"",
    dangqiantimess:'',
    detail: [
      {
        imgUrl: "../../images/17-banner.png"
      },
      {
        imgUrl: "../../images/1-banner.png"
      }
    ],
    ystatus:"",
    isfixde:false,
    naozhong:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(app.globalData.userInfo)
    var dates = timeFormatUtils.getDateFormat(new Date().getTime(), "yyyy-MM-dd-hh-mm-ss");
    setInterval(function () {
      var dates = timeFormatUtils.getDateFormat(new Date().getTime(), "yyyy-MM-dd-hh-mm-ss");
      console.log(dates)
      var datatime = dates.split("-")
      var nnn = datatime[0]
      var yyy = datatime[1]
      var rrr = datatime[2]
      var sss = datatime[3]
      var fff = datatime[4]
      var mmm = datatime[5]
      var ssops = parseInt(sss)
      var ffopf = parseInt(fff)
      var dangqiantimess = (ssops * 3600 + ffopf * 60) * 1000 //当前时间
      // console.log(dangqiantimess + "新的当前时间")
      // console.log(that.data.bxtime + "结束时间")
      that.setData({
        nnn: nnn,
        yyy: yyy,
        rrr: rrr,
        sss: ssops,
        fff: ffopf,
        mmm: mmm,
        dangqiantimess: dangqiantimess
      })


    }, 1000)
    console.log(dates)
    var timedt = util.formatTime(new Date())
    // console.log(timedt)
    var datatime = dates.split("-")
    console.log(datatime)
    var n = datatime[0]
    var y = datatime[1]
    var r = datatime[2]
    this.setData({
      n:n,
      y:y,
      r:r,

      timedt: timedt
    })
   
    var ro = timeFormatUtils.getDateFormat(new Date().getTime() - 3 * 86400000, "dd");
    var rt = timeFormatUtils.getDateFormat(new Date().getTime() - 2 * 86400000, "dd");
    var rh = timeFormatUtils.getDateFormat(new Date().getTime() - 1 * 86400000, "dd");
    var rf = timeFormatUtils.getDateFormat(new Date().getTime() + 1 * 86400000, "dd");
    var rfv = timeFormatUtils.getDateFormat(new Date().getTime()+ 2 * 86400000, "dd");
    var rs = timeFormatUtils.getDateFormat(new Date().getTime() + 3 * 86400000, "dd");
    // console.log(datesss)
    // console.log(ro)
    this.setData({
      ro: ro,
      rt: rt,
      rf:rf,
      rh:rh,
      rfv:rfv,
      rs:rs
    })
    //打印

    console.log(timedt)
console.log("onload")
  },
  backmusic: function () {
    player();
    function player() {
      back.title = "此时此刻";
      back.src = "https://zjk.weifeng361.com/zjkhehua/App/Api/View/Index/music/jsldj.mp3";
      back.onEnded(() => {
        player();
      })
    }
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

    if (this.data.xtime != 0 && this.data.ztime != 0) {
        this.setData({
          isLook:true
        }) 
    }else{
      this.setData({
        isLook: false
      }) 
    }
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
  beginmeditation:function(e){
    if (this.data.timesbox!="请选择"){
      wx.showToast({
        title: '请先取消断字诀任务',
        icon:'none',
        duration:1500
      })
    }else{
      wx.navigateTo({
        url: "../Index-beginmeditation/Index-beginmeditation",
      })
    }
   
  },
  
  // 
  inputnum:function(e){
    console.log(e.detail.value)
    
    var miaoo = JSON.stringify((e.detail.value * 60) * 1000)
    this.setData({
      nums: e.detail.value
    });
    // var miaoo = JSON.stringify((this.data.miao * 60) * 1000)
    console.log(miaoo)
    this.setData({
      times: miaoo,
      miao:miaoo
    })
    console.log(this.data.times)
    console.log(this.data.miao)
    console.log(this.data.nums)
  },
  ycf: function (e) {
    var that = this;
    // var miao = JSON.stringify((e.detail.value * 60) * 1000)
    this.setData({
      // miao:miao,
      ystatus: e.detail.value,
      // times: miao,
      // nums: e.detail.value
    })
    if (e.detail.value  == "30"){
      this.setData({
        nums: '半点'
      })
     
    }
    if (e.detail.value == "00") {
      this.setData({
        nums: '整点'
      })

    }
    console.log(this.data.ystatus)
  },
  noxiaoFn:function(e){
    this.setData({
      isfixde:false
    })
  },
  pickerProChangeh: function (e) {
    console.log(e)
    this.setData({
      // xshi: xshi,
      // fen: fen,
      time: e.detail.value,
      kaishitimessop: e.detail.value
    })
console.log(this.data.time)
    var shi = this.data.time.split(":")
    var xshi = parseInt(shi[0])
    var fen = parseInt(shi[1])
    var miao = (xshi * 3600 + fen * 60) * 1000
    this.setData({
      xshi: xshi,
      fen: fen,
      xtime: miao
    })
  
  },
  pickerProChangehs: function (e) {
    this.setData({
      timesbox: e.detail.value,
      jieshutimeops: e.detail.value,
    })
    var bshi = this.data.timesbox.split(":")
    var bxshi = parseInt(bshi[0])
    var bfen = parseInt(bshi[1])
    var bmiao = (bxshi * 3600 + bfen * 60) * 1000
    this.setData({
      bxshi: bxshi,
      bfen: bfen,
      bxtime: bmiao
    })

    console.log(this.data.timesbox)
  },

  yequeFn:function(e){
    console.log(this.data.nums)
    console.log(this.data.time)
    console.log(this.data.timesbox)
    var that = this
    var dates = timeFormatUtils.getDateFormat(new Date().getTime(), "hh-mm-ss");
    console.log(dates)
    // var that = this
    var datatime = dates.split("-");
    var qshi = parseInt(datatime[0]);
    var qfen = parseInt(datatime[1]);
    var miaos = (qshi * 3600 + qfen * 60) * 1000
    this.setData({
      qshi: qshi,
      qfen: qfen,
      miaos: miaos,
      isfixde: false,
    })
    var optimesqqa =  this.data.time
    var spiltoptime = optimesqqa.split(":")
    console.log(spiltoptime)
    var splitopshi = parseInt(spiltoptime[0]);
    var splitopfen = parseInt(spiltoptime[1]);

    console.log(this.data.xtime + "开始时间")
    console.log(this.data.miaos + "当前时间")
    console.log(this.data.bxtime + "结束时间")
    var ztime = this.data.bxtime - this.data.xtime
    console.log(ztime + "最终时间")
    this.setData({
      ztime: ztime,

    })
    console.log(that.data.ystatus)
    let url = app.globalData.url + '/api/Meditation/addTask';
    console.log(this.data.kaishitimessop)
    console.log(this.data.jieshutimeops)
    if (that.data.ystatus == "30") {
      that.setData({
        click_type: "1"
      })
    } else {
      that.setData({
        click_type: "2"
      })
    }
    let data = {
      user_id: app.globalData.user_id,
      start_time: this.data.n + "-" + this.data.y + "-" + this.data.r + " " + this.data.kaishitimessop + ":" + '00',
      end_time: this.data.n + "-" + this.data.y + "-" + this.data.r + " " + this.data.jieshutimeops + ":" + '00',
      // interval_main: this.data.nums,
      all_main: this.data.ztime / 1000 / 60,
      click_type: this.data.click_type
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        wx.showToast({
          title: res.msg,
        })
        that.setData({
          cnetrWu: true,
          task_id: res.result.task_id
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
    if (that.data.ystatus != ""){
      console.log(that.data.sss)
      console.log(that.data.fff)
      console.log(splitopshi)
      console.log(splitopfen)
      if (that.data.sss <= splitopshi ) {
      
      console.log(that.data.ystatus)
      console.log('进来了半点或者整点')
      // if()
      optimesLsk(that)
        if (that.data.dangqiantimes > that.data.bxtime){
          clearInterval(that.naozhong)
          console.log('清除成功')
        }
      }else{
        wx.showToast({
          title: '开始时间不能小于当前时间',
          icon:'none'
        })
      }
    }else{
      wx.showToast({
        title: '请完善',
        icon:'none'
      })
    }
   
    // else{
    //   console.log(that.data.ystatus + "是空")

    //   if (this.data.miaos == this.data.xtime || this.data.miaos < this.data.bxtime || this.data.ztime > 0) {
    //     // let url = app.globalData.url + '/api/Meditation/addTask';
    //     // console.log(this.data.kaishitimessop)
    //     // console.log(this.data.jieshutimeops)
    //     // let data = {
    //     //   user_id: app.globalData.user_id,
    //     //   start_time: this.data.n + "-" + this.data.y + "-" + this.data.r + " " + this.data.kaishitimessop + ":" + '00',
    //     //   end_time: this.data.n + "-" + this.data.y + "-" + this.data.r + " " + this.data.jieshutimeops + ":" + '00',
    //     //   interval_main: this.data.nums,
    //     //   all_main: this.data.ztime / 1000 / 60
    //     // };
    //     // console.log(data)
    //     // app.wxRequest('POST', url, data, (res) => {
    //     //   console.log(res)
    //     //   var that = this;
    //     //   if (res.status == 1) {
    //     //     wx.showToast({
    //     //       title: res.msg,
    //     //     })
    //     //     countdown(that);
    //     //     that.setData({
    //     //       cnetrWu: true,
    //     //       task_id: res.result.task_id
    //     //     })
    //     //   } else {
    //     //     wx.showToast({
    //     //       title: res.msg,
    //     //     })
    //     //   }
    //     // }, (err) => {
    //     //   wx.showToast({
    //     //     title: '提交失败',
    //     //   })
    //     //   console.log(err.errMsg)
    //     // })


    //   }
    //   else {
    //     if (this.data.xtime < this.data.miaos) {
    //       wx.showToast({
    //         title: '要与当前时间一致',
    //         icon: "none"
    //       })
    //     }
    //     else {
    //       wx.showToast({
    //         title: '时间有误',
    //         icon: "none"
    //       })
    //     }
    //   }
    // }
  

    if (this.data.ztime == 0 || this.data.miaos > this.data.bxtime) {
      if (this.data.nums >= 0) {
        this.setData({
          nums: "",

        })
      }
      if (this.data.time != "") {
        this.setData({
          time: "请选择",

        })
      }
      if (this.data.timesbox != "") {
        this.setData({
          timesbox: "请选择",

        })
      }
      this.setData({
        isQuesho: true
      })
    }

    else {
      this.setData({
        isQuesho: false
      })
    }
   
  // var isMicus = this.data.isMicus
  // if(isMicus){
  //   wx.pauseBackgroundAudio();
  // }
    // this.backmusic();
  
    

    // if (this.data.miaos = this.data.bxtime){
    //   that.setData({
    //     times:-1
    //   })
    // }
   
  },
  renWuFn:function(e){
    this.setData({
      cnetrWu: false,
    })
  },
  quXiao:function(e){
    var that = this
    this.setData({
      ystatus:"",
      ziDFn:true
    })
    clearInterval(that.naozhong)
    if (this.data.nums >= 0) {
      this.setData({
        nums: "",

      })
    }
    if (this.data.time != "") {
      this.setData({
        time: "请选择",

      })
    }
    if (this.data.timesbox != "") {
      this.setData({
        timesbox: "请选择",

      })
    }
    this.setData({
      cnetrWu: false,
      xtime: 0,
      bxtime: 0,
      ztime: 0,
    })
    if (this.data.ztime == 0) {
      this.setData({
        isQuesho: true
      })
    } else {
      this.setData({
        isQuesho: false
      })
    }
    let url = app.globalData.url + '/api/Meditation/delTask';
    let data = {
      task_id: this.data.task_id
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
   
  },
  setclock:function(e){
    if (app.globalData.timeings != 0 && app.globalData.timeings != ''){
      wx.showToast({
        title: '请取消打坐时长',
        icon:'none'
      })
    }else{
      if (this.data.miaos > this.data.bxtime && this.data.dangqiantimes > this.data.bxtime) {
        if (this.data.nums >= 0) {
          this.setData({
            nums: "",

          })
        }
        if (this.data.time != "") {
          this.setData({
            time: "请选择",

          })
        }
        if (this.data.timesbox != "") {
          this.setData({
            timesbox: "请选择",

          })
        }
        // this.setData({
        //   isQuesho: true
        // })
      }

      // else {
      //   this.setData({
      //     isQuesho: false
      //   })
      // }

      this.setData({
        isfixde: true
      })
    }
  
  },
  lookRwu:function(e){
    this.setData({
      cnetrWu: true,
      isfixde: false,
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("进来了")

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
    wx.showToast({
      title: '正在刷新数据...',
      icon: 'loading',
      duration: 2000
    });
    this.setData({ 
      nums:'',
      // time:'',
      // timesbox:'',

      });//先清空数据
    // this.loadIndex();//再重新加载数据
    wx: wx.stopPullDownRefresh();//停止刷新操作
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
/* 毫秒级秒杀倒计时 */

function optimesLsk(that){
  that.naozhong = setInterval(function () {
    var dates = timeFormatUtils.getDateFormat(new Date().getTime(), "yyyy-MM-dd-hh-mm-ss");
    console.log(dates)
    var datatime = dates.split("-")
    var nn = datatime[0]
    var yy = datatime[1]
    var rr = datatime[2]
    var ss = datatime[3]
    var ff = datatime[4]
    var mm = datatime[5]
    var ssop = parseInt(ss)
    var ffop = parseInt(ff)
    var dangqiantimes = (ssop * 3600 + ffop * 60) * 1000 //当前时间
    console.log(dangqiantimes + "新的当前时间")
    console.log(that.data.bxtime + "结束时间")
    that.setData({
      nn: nn,
      yy: yy,
      rr: rr,
      ss: ss,
      ff: ff,
      mm: mm,
      dangqiantimes: dangqiantimes
    })

    if (that.data.bxtime > dangqiantimes) {
      var zdopstf = that.data.ff //当前时间分钟数
      var zdopstss = that.data.mm //当前时间秒数
      console.log(that.data.mmml)
      console.log(zdopstf)
      console.log(zdopstss)

      if (that.data.miaos >= that.data.xtime && that.data.miaos < that.data.bxtime) {
        console.log('进来了半点或者整点条件第二层')
        if (that.data.ystatus == '30'){
          console.log(zdopstf)
          console.log(zdopstss)  
          console.log(that.data.ystatus)
          if (zdopstf == '30' || zdopstf == '00') {
            if (zdopstss<=3){
              console.log('进来了半点开始提醒')
              const backgroundAudioManager = wx.getBackgroundAudioManager()
              backgroundAudioManager.title = '叮提示音'
              backgroundAudioManager.epname = '叮提示音'
              backgroundAudioManager.singer = '未知'
              backgroundAudioManager.src = 'https://zk.baike360.cn/yixiu/Public/static/music//ding.mp3'
              wx.vibrateLong({
                success: function () {
                  console.log("vibrate success");
                }
              })
            }
              
          }
        } else if (that.data.ystatus == '00'){
          if ( zdopstf == '00' ) {
            if (zdopstss <= 3){
              console.log('进来了整点开始提醒')
              const backgroundAudioManager = wx.getBackgroundAudioManager()
              backgroundAudioManager.title = '叮提示音'
              backgroundAudioManager.epname = '叮提示音'
              backgroundAudioManager.singer = '未知'
              backgroundAudioManager.src = 'https://zk.baike360.cn/yixiu/Public/static/music//ding.mp3'
              wx.vibrateLong({
                success: function () {
                  console.log("vibrate success");
                }
              })
            }

          }
        }
     
        // else {
        //   console.log(that.data.ss)
        //   clearInterval(naozhong)
        // }
      }
    }

  }, 1000)

}




function countdown(that) {

  // 渲染倒计时时钟

  that.setData({

    clock: dateformat(that.data.times),//格式化时间

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

  setTimeout(function () {

    // 放在最后--

    that.data.times -= 10;

    countdown(that);
    // console.log(that.data.times)
    // var days = that.data.ztime / 1000 / 60 / 60 / 24;
    // var daysRound = Math.floor(days);
    // var hours = that.data.ztime / 1000 / 60 / 60 - (24 * daysRound);
    // var hoursRound = Math.floor(hours);
    // var minutes = that.data.ztime / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
    // var minutesRound = Math.floor(minutes);
    // var seconds = that.data.ztime / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
    // console.log(seconds)
    // wx.setStorageSync("miao", that.data.times)
  if (that.data.times == 0) {
   
      console.log("小程序进来了=---- onshow----------")
      wx.vibrateLong({
      success:function(){
      console.log("vibrate success");
      }
      })
      console.log(that.data.miao)
    var dates = timeFormatUtils.getDateFormat(new Date().getTime(), "yy-MM-hh-mm-ss");
    var datatime = dates.split("-");
    var qshi = parseInt(datatime[2]);
    var qfen = parseInt(datatime[3]);
    
    
    var miaos = (qshi * 3600 + qfen * 60) * 1000
    that.setData({
      miaos: miaos
    })
   
    console.log(that.data.miaos)
      var op = that.data.miao
      console.log(that.data.times)
      that.setData({
      times: op
      })
    if (that.data.miaos < that.data.xtime){
      that.setData({
        times: -1
      })
    }

    if (that.data.miaos < that.data.bxtime) {
      const backgroundAudioManager = wx.getBackgroundAudioManager()
      backgroundAudioManager.title = '叮提示音'
      backgroundAudioManager.epname = '叮提示音'
      backgroundAudioManager.singer = '未知'
      backgroundAudioManager.src = 'https://zk.baike360.cn/yixiu/Public/static/music//ding.mp3'

      // this.data.xtime + "开始时间"
      // this.data.miaos + "当前时间"
      // this.data.bxtime + "结束时间"
      countdown(that);
      console.log(that.data.times)
    }else{
        //   wx.showToast({
        //     title: '已有任务',
        //     icon: "none"
        //   })
      that.setData({
        times: -1,
        isQuesho:true
      })
    }
    // BackgroundAudioManager.pause()
    } 
    // if (that.data.miaos == that.data.bxtime){
    //   that.setData({
    //     times:-1
    //   })
    // }


  }, 10)//注意毫秒的步长受限于系统的时间频率，于是我们精确到0.01s即10ms

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

  var sec = (second - hr * 3600 - min * 60);// equal to => var sec = second % 60;

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

  var sec = (second - hr * 3600 - min * 60);// equal to => var sec = second % 60;

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

  var sec = (second - hr * 3600 - min * 60);// equal to => var sec = second % 60;

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

  var sec = (second - hr * 3600 - min * 60);// equal to => var sec = second % 60;

  // 毫秒位，保留2位

  var micro_sec = Math.floor((micro_second % 1000) / 10);

  return day + "天";

}
