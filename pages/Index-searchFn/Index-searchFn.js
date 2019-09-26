// pages/Index-searchFn/Index-searchFn.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailindex:[],
    feedback_type:[],
    opsetstorg:'',
    pickerProDatastorg:'',
    chenkedstorg:'',
    pickerProDatafstorg:'',
    indexstorg:'',
    itemstorg:'',
    op:"",
    pickerProData: '',
    historical :[],
    isHistory:false,
    valuetitle:'筛选',
    isfixe:true,
    historicals:'',
    activities_day:'',
    input_firm:'',
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
    ],
    // pickerProData: {
    //   index: 0,
    //   items: ['请选择开始时间', '2019-01-01', '2020-01-01']
    // },
    
    // pickerProDatas:{
    //   index: 0,
    //   items: ['请选择结束时间', '2019-12-01', '2020-01-01']
    // },
    pickerProDatas:{},
    // pickerProDatad: {
    //   index: 0,
    //   items: ['请选择地区', ' 北京   ', '   上海   ']
    // },
    pickerProDatah: {
      index: 0,
      items: ['请选择活动天数', '1个月', '2个月']
    },
    pickerProDataf:[],
    // pickerProDataf: {
    //   index: 0,
    //   items: ['不限', '禅七', '佛七', '地藏七', '南传内观', '止观', '心密', '闭关','禅医健康']
    // },
    pickerProDataftian:{
      index: 0,
      items: ['不限', '1-3天', '3-7天', '大于7天']
    },
    countryIndex:'',
    riderCommentList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that= this
    this.setData({
      historicals: wx.getStorageSync('historical'),

    })
    console.log('获取缓存', wx.getStorageSync('opsetstorg')) //开始时间
    console.log('获取缓存', wx.getStorageSync('pickerProDatastorg'))//结束时间
    console.log('获取缓存', wx.getStorageSync('chenkedstorg'))//默认显示
    console.log('获取缓存', wx.getStorageSync('pickerProDatafstorg'))//活动分类
    console.log('获取缓存', wx.getStorageSync('indexstorg'))//活动分类index
    console.log('获取缓存', wx.getStorageSync('itemstorg'))//活动天数
    console.log('获取缓存', wx.getStorageSync('feedback_type'))//选择的城市
    console.log('获取缓存', wx.getStorageSync('detailindex'))//选择的城市index  id
    
    let url = app.globalData.url + '/api/index/getProvice';
    console.log(url)
    let data = {
      
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      this.setData({
        riderCommentList: res
      })
      console.log(this.data.riderCommentList)
      if (wx.getStorageSync('detailindex') != '') {
        this.setData({ detailindex: wx.getStorageSync('detailindex')})
        var riderCommentList = this.data.riderCommentList
        var feedback_typesT = wx.getStorageSync('detailindex')
        console.log(feedback_typesT)
        console.log(riderCommentList)
        feedback_typesT.forEach(i => {
          riderCommentList.find(item => {
            // var lo = 1;
            if (i == item.area_id) {
              item.selected = true;
              //   that.setData({
              //     feedback_type:item.value
              // })
              console.log(this.data.feedback_type)
            }
          })
          that.setData({
            riderCommentList: riderCommentList,

            // floNe: true
          })
        })
      }
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    let url1 = app.globalData.url + '/api/index/getCategory';
    console.log(url)
    let data1 = {

    };
    console.log(data)
    app.wxRequest('POST', url1, data1, (res) => {
      console.log(res)
      var that = this;
      that.setData({
        pickerProDataf:res.result
      })
    }, (err) => {
      wx.showToast({
        title: '提交失败',
      })
      console.log(err.errMsg)
    })
    if (wx.getStorageSync('opsetstorg') != '') {
      this.setData({
        op: wx.getStorageSync('opsetstorg')
      })
    } if (wx.getStorageSync('pickerProDatastorg') != '') {
      this.setData({
        pickerProDatas: wx.getStorageSync('pickerProDatastorg')
      })
    }else{
      this.setData({
        pickerProDatas: '请选择结束时间'
      })
    }
    if (wx.getStorageSync('itemstorg')!=""){
      this.setData({
        "pickerProDataftian.index": wx.getStorageSync('itemstorg')
      })
    } 
    if (wx.getStorageSync('pickerProDatafstorg')!=""){
      this.setData({
        countryIndex: wx.getStorageSync('pickerProDatafstorg')
      })
    }
  },
  noterFnnei: function (e) {
    console.log(e)
    wx.navigateTo({
      url: "../Index-hdonghdelit/Index-hdonghdelit?id=" + e.currentTarget.dataset.id + '&user_id=' + e.currentTarget.dataset.user,
    });
  },
  returnFnfsk:function(e){
    this.setData({
      isfixe:false
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
  opsbbgc_if:function(e){
    this.setData({
      isfixe:false
    })
  },
  hdonghFn:function(e){
    console.log(this.data.historicals)
    this.setData({
      historicals: wx.setStorageSync('historical',''),
      isHistory: false,
      valuetitle: '筛选',
      isfixe:false
    })
    console.log(this.data.historicals)
  },
  isserinpt:function(e){
    var that = this;
    // wx.getStorage({
    //   key: 'historical',
    //   success: function (res) {
    //     console.log(res)
    //     app.globalData.historicals = res.data
    //   }
    // })
    // console.log(app.globalData.historicals)
    console.log('获取缓存', wx.getStorageSync('historical'))
    
    this.setData({
      historicals: wx.getStorageSync('historical'),
      isHistory:true,
      valuetitle:'取消'
    })
  },
  cancelsearchFn:function(e){
    if (this.data.valuetitle == '取消'){
      this.setData({
        isHistory: false,
        valuetitle: '筛选'
      })
    } else if (this.data.valuetitle == '筛选'){
      this.setData({
        isfixe: true,
        valuetitle: '筛选',  
      historicals: wx.getStorageSync('historical'),
      })
    }
  },
  pickerProChange: function (e) {
    console.log(e)
    this.setData({
      op: e.detail.value
    })
    var that = this;
    console.log(that.data.op)


  },
  pickerProChanges: function (e) {
    this.setData({
      pickerProDatas: e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProDatas)

  },
  pickerProChanged: function (e) {
    this.setData({
      'pickerProDatad.index': e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProDatad.index)
    console.log(that.data.pickerProDatad.items[that.data.pickerProDatad.index])

  },
  pickerProChangeh: function (e) {
    this.setData({
      'pickerProDatah.index': e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProDatah.index)
    console.log(that.data.pickerProDatah.items[that.data.pickerProDatah.index])

  },
  pickerProChangef: function (e) {
    this.setData({ countryIndex: e.detail.value });
    console.log(this.data.countryIndex)
    // this.setData({
    //   'pickerProDataf.index': e.detail.value
    // })
    // var that = this;
    // console.log(that.data.pickerProDataf.index)
    // console.log(that.data.pickerProDataf.items[that.data.pickerProDataf.index])

    // var index = e.currentTarget.dataset.index
    // console.log(index)
    // var mat = this.data.pickerProDataf[index]
    // console.log(mat)
    // var mats = this.data.pickerProDataf;
    // console.log(mats)
    // var dataindex = e.detail.value;
    // console.log(dataindex)
    // var optionid = this.data.pickerProDataf[dataindex].id;
    // console.log(optionid)
    // for (var i = 0; i < mats.length; i++) {
    //   if (i == index) {
    //     mats[i].materiel_index = e.detail.value
    //     mats[i].materiel_id = optionid
    //   }
    // }
    // this.setData({
    //   pickerProDataf: mats
    // })
    // console.log(e.currentTarget.dataset)
    // console.log(e)
    // console.log(index)
    // console.log(this.data.pickerProDataf)
    // console.log(this.data.mats)

  },
  pickerProChangeftian: function (e) {
    this.setData({
      'pickerProDataftian.index': e.detail.value
    })
    var that = this;
    console.log(that.data.pickerProDataftian.index)
    console.log(that.data.pickerProDataftian.items[that.data.pickerProDataftian.index])

  },
  inpotsub:function(e){
    this.setData({
      activities_day: e.detail.value
    })
  },
  yesfn:function(){
    // wx.setStorageSync('historical', historical)
    var opsetstorg = this.data.op;//开始时间
    var pickerProDatastorg = this.data.pickerProDatas;//开始时间
    var chenkedstorg = this.data.chenkeds;//开始时间
    var pickerProDatafstorg = this.data.countryIndex;//开始时间
    var indexstorg = this.data.pickerProDataf.index;//开始时间
    var itemstorg = this.data.pickerProDataftian.index;//开始时间
    var feedback_type = this.data.feedback_type
    var detailindex = this.data.detailindex
    wx.setStorageSync('opsetstorg', opsetstorg)
    wx.setStorageSync('pickerProDatastorg', pickerProDatastorg)
    wx.setStorageSync('chenkedstorg', chenkedstorg)
    wx.setStorageSync('pickerProDatafstorg', pickerProDatafstorg)
    wx.setStorageSync('indexstorg', indexstorg)
    wx.setStorageSync('itemstorg', itemstorg)
    wx.setStorageSync('detailindex', detailindex)
    console.log('获取缓存', wx.getStorageSync('opsetstorg')) //开始时间
    console.log('获取缓存', wx.getStorageSync('pickerProDatastorg'))//结束时间
    console.log('获取缓存', wx.getStorageSync('chenkedstorg'))//默认显示
    console.log('获取缓存', wx.getStorageSync('pickerProDatafstorg'))//活动分类
    console.log('获取缓存', wx.getStorageSync('indexstorg'))//活动分类index
    console.log('获取缓存', wx.getStorageSync('itemstorg'))//活动天数
    console.log('获取缓存', wx.getStorageSync('feedback_type'))//选择的城市
    console.log('获取缓存', wx.getStorageSync('detailindex'))//选择的城市index  id

    let url = app.globalData.url + '/api/index/getActivities';
    console.log(url)
    if (this.data.op== "请选择开始时间" && this.data.pickerProDatas == "请选择结束时间" && this.data.chenkeds == "undefined" && this.data.pickerProDataf.index == "0" && this.data.pickerProDatah.items[this.data.pickerProDatah.index] =="请选择开始时间"){
      wx.showToast({
        title: '请完善信息提交',
        icon:'none'
      })
    }else{
      if (this.data.detailindex == undefined){
        this.setData({
          detailindex:""
        })
      }
      let data = {
        category_id: this.data.countryIndex,
        start_time: this.data.op,
        end_time: this.data.pickerProDatas,
        province_id: this.data.detailindex,
        activities_day: this.data.pickerProDataftian.index,
      };
      console.log(data)
      app.wxRequest('POST', url, data, (res) => {
        console.log(res)
        var that = this;
        if(res.status == 1){
          for (var i = 0; i < res.result.length; i++) {
            res.result[i].activity_content = res.result[i].activity_content.replace(/<[^>]+>/g, "")
          }
          this.setData({
            detailcont: res.result
          })
        }else{
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
        isfixe: false
      })
    }
 
  },
  secrtOp:function(e){
    console.log(e.currentTarget.dataset.item)
    let url = app.globalData.url + '/api/index/getActivities';
    console.log(url)
    let data = {
      name: e.currentTarget.dataset.item
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        for (var i = 0; i < res.result.length; i++) {
          res.result[i].activity_content = res.result[i].activity_content.replace(/<[^>]+>/g, "")
        }
        this.setData({
          detailcont: res.result
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
      input_firm: '',
      isHistory: false,
      valuetitle: '筛选',
      isfixe:false
    })
  },
  bindconfirm: function (e) {
    
    var that = this;
    var discountName = e.detail.value['search - input'] ? e.detail.value['search - input'] : e.detail.value
    console.log('e.detail.value', discountName)
    var historical = this.data.historical
     historical.push(discountName)
    console.log(this.data.historical)
    this.setData({
      historical: historical
    })
    console.log(this.data.historical)
    wx.setStorageSync('historical', historical)

    let url = app.globalData.url + '/api/index/getActivities';
    console.log(url)
    let data = {
      name: discountName
    };
    console.log(data)
    app.wxRequest('POST', url, data, (res) => {
      console.log(res)
      var that = this;
      if (res.status == 1) {
        for (var i = 0; i < res.result.length; i++) {
          res.result[i].activity_content = res.result[i].activity_content.replace(/<[^>]+>/g, "")
        }
        this.setData({
          detailcont: res.result
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
      input_firm:'',
      isHistory: false,
      valuetitle: '筛选'
    })

  },
  checkboxChange(e) {
    var that = this;
    console.log('checkboxChange e:', e);
    console.log('所有选中的值为：'+e.currentTarget.dataset.index)
    console.log('所有选中的值为：'+e.currentTarget.dataset.value)
    this.setData({
      chenkeds: e.currentTarget.dataset.index
    })
    let string = "riderCommentList[" + e.target.dataset.index + "].selected"
    this.setData({
      [string]: !this.data.riderCommentList[e.target.dataset.index].selected
    })
    let detailValue = this.data.riderCommentList.filter(it => it.selected).map(it => it.area_name)
    let detailindex = this.data.riderCommentList.filter(it => it.selected).map(it => it.area_id)
    console.log('所有选中的值为：', detailValue)
    console.log('所有选中的index为：', detailindex)
    that.setData({
      feedback_type: detailValue,
      detailindex: detailindex
    })
    console.log(that.data.feedback_type)
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