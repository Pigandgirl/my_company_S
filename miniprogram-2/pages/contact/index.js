// 联系我们-右边
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
          selected:2
        }
      )
    }
  }
})