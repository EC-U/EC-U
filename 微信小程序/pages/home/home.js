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
    categories: [],
    messages: [],
    message:'',
    url:''
    
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
  seeDetail:function(e){
    var url = e.currentTarget.dataset.url;        //获取下标
    /*wx.setStorage({                                   //设置本地缓存
      url: url
    })
    console.log(Url);*/
    //console.log(url)
    wx.navigateTo({
      url: '../detail/detail?detail=' + url,
    })

  },
  onLoad: function () {
    //var that = this; 
    this.loadCategories();    
    this.loadmessages();

  },
  
  loadmessages: function() {
    var messages = new Array();
    var that = this; 
    for (var i = 10; i < 13; i++) {
      
      wx.request({
        url: 'http://122.152.233.115:8080/v1/text/' + String(i),
        header: {
          'content-type': 'application/json'
        },
        method: 'GET',
        success: function (res) {
          var message = new Object();
          message.Author=res.data.Author;
          message.Title=res.data.Title;
          message.Id = res.data.Id;
          message.Summary = res.data.Summary;
          message.Text = res.data.Text;
          message.Time = res.data.Time;
          message.Url = res.data.Url;
          messages=messages.concat(message)
          that.setData({ messages: messages })
          console.log(messages);
          //console.log(message);
        }

      })
    }
    //that.setData({ messages: messages })
    //this.setData({ messages: message })
    
    //that.data.messages = message;
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

