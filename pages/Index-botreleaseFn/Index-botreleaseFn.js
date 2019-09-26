// pages/Index-botreleaseFn/Index-botreleaseFn.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    upload_picture_list :'',
    img_list: '',
    img_num: '0',//默认9
    name:'',
    content:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  uploadimg: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        console.log(res)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var tempFiles = res.tempFiles
      
        that.setData({
          upload_picture_list: tempFilePaths,
        });
        wx.uploadFile({
          url: app.globalData.url + '/api/Upload/img',      //此处换上你的接口地址
          filePath: tempFilePaths[0],
          name: 'img',
          header: {
            "Content-Type": "multipart/form-data",
            'accept': 'application/json',
            'Authorization': 'Bearer ..'    //若有token，此处换上你的token，没有的话省略
          },
          formData: {
            'user': 'test'  //其他额外的formdata，可不写
          },
          success: function (res) {

            console.log(res)
            var datas = JSON.parse(res.data);
            // img_list.push(data.msg);
            that.setData({
              img_list: datas.msg.url,
            });
            console.log(that.data.img_list)
          },

          fail: function (res) {
            console.log('fail');

          },
        })


      }
    })

  },
  nameopFn:function(e){
    // console.log(e)
    this.setData({
      name: e.detail.value
    })
  },
  contentFnop:function(e){
    this.setData({
      content: e.detail.value
    })
  },
  submitops:function(e){
    let url = app.globalData.url + '/api/user/addArticle';
      let data = {
        user_id: app.globalData.user_id,
        name: this.data.name,
        content: this.data.content,
        img_url: this.data.img_list

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
            title: res.msg,
            // icon: 'none',
          })

        } else {
          wx.showToast({
            title: res.msg,
            icon: 'none',
          })
        }

      }, (err) => {
        wx.showToast({
          title: '提交失败',
        })
        console.log(err.errMsg)
      })
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