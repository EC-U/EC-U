// pages/test/test.js
Page({
<<<<<<< HEAD

=======
>>>>>>> e9101a13a9b87ec450312021a7cded5e002e2278
  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
      text:''
=======
    text: "one",
    btnText:"nothing"
>>>>>>> e9101a13a9b87ec450312021a7cded5e002e2278
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD

=======
    this.setData({btnText:"nothing"})
>>>>>>> e9101a13a9b87ec450312021a7cded5e002e2278
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
<<<<<<< HEAD
  copyTBL: function (e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.taokouling,
      success: function (res) {
        console.log(res.data);
          self.setData({text: res.data})
      }
    })
=======
  btnClick:function(){
    this.setData({btnText:"cliked!"})
>>>>>>> e9101a13a9b87ec450312021a7cded5e002e2278
  }
})