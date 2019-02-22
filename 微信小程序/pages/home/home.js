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
    flag: 0,
    categories: []
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
  },
  onLoad: function () {
    this.loadCategories();
    wx.request({
      url: 'http://122.152.233.115:8080/v1/text/2',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {},
      method:'GET',
      success: function (res) {
        console.log(res.data);
      }

    })
  },
  
  loadCategories: function () {
    var categories = wx.getStorageSync("categories");
    var result = new Array();
    for (var i = 0; i < categories.length; i++) {
      if (categories[i].status == '1') {
        result.push(categories[i]);
      }
    }
    this.setData({ categories: result });
  }
})