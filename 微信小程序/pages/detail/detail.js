// pages/detail/detail.js
Page({

  data: {
      url:''
  },
  onLoad: function (options) {
    console.log(options.detail)
    var str = options.detail;
    this.setData({
      url:str
    })
    console.log(options.detail)
  },

})