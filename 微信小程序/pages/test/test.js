// pages/test/test.js
Page({
  data: {
    clipdata:"nochange"
  },
  watch: function(e){
    var that = this
    wx.getClipboardData({
      success(res) {
        that.setData({
          clipdata: res.data
        })
        //console.log(res.data)
      }
    })
    
  }
})