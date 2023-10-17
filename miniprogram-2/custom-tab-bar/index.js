// custom-tab-bar/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: null, //当前选中
    //
    list: [{
        'pagePath': "/pages/index/index",
        "iconPath": "/images/icon/未选择主页icon.png",
        "text": '首页'
      },
      {
        'pagePath': "/pages/about/index",
        "iconPath": "/images/icon/未选择猫icon.png",
        "text": ' 公司简介 ',
      },
      {
        'pagePath': "/pages/contact/index",
        "iconPath": "/images/icon/咨询.png",
        "text": '联系',
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const { index,url }   = e.currentTarget.dataset;
      if (this.data.selected == index || index == undefined) return;
      wx.switchTab({
        url,
      })
    }
  }
})