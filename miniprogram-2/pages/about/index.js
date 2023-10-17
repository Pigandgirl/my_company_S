// 关于喵呜文化介绍-中间苏苏
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  onShow(){
    //自定义tabbar
    if(typeof this.getTabBar === 'function' && this.getTabBar()){
      this.getTabBar().setData(
        {
          selected:1
        }
      )
    }
  }
})