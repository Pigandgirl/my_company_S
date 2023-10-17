// 首页展示-左边

Page({
  data: {
    
  },
onShow(){
  //自定义tabbar
  if(typeof this.getTabBar === 'function' && this.getTabBar()){
    this.getTabBar().setData(
      {
        selected:0
      }
    )
  }
}
})

