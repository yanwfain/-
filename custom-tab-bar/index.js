Component({
  data: {
    selected: 0,
    color: "white",
    selectedColor: "white",
    list: [{
      pagePath: "/pages/Index-index/Index-index",
      text: "主页",
      iconPath: "../images/首页空.png",
      selectedIconPath: "../images/首页空.png"
      
    },{
        pagePath: "/pages/Index-ime/Index-ime",
        text: "个人中心",
        iconPath: "../images/我的空.png",
        selectedIconPath: "../images/我的空.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})