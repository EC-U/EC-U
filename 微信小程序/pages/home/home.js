// pages/home/home.js
Page({
  data: {
    interval: 1000,
    duration: 1000,
    imgUrls: [
      "http://dase.ecnu.edu.cn/dase-module-admin/uploads/attach/b06e3c26-7f63-4c08-825c-c43ae1d5bc48.jpg",
      "http://dase.ecnu.edu.cn/dase-module-admin/uploads/image/20180612/1528766892988044405.jpg",
      "http://dase.ecnu.edu.cn/dase-module-admin/uploads/image/20180612/1528766929566039643.jpg",
      "http://dase.ecnu.edu.cn/dase-module-admin/uploads/image/20180612/1528767203369018104.jpg"
    ],
    currentTab: 0,
    flag: 0
  },
  switchNav: function (e) {
    console.log(e);
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({ currentTab: id });
    }
    page.setData({ flag: id });
  },
  seeDetail:function(){
    wx.navigateTo({
      url: '../detail/detail',
    })
  }

})