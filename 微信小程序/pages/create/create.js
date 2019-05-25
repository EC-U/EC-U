Page({
  data: {
    title:'',
    date:'',
    time:'',
    position:'',
    sheet_num: 0
  },
  onChangeTitle: function (e) {
    this.setData({
      title: e.detail.value
    });
  },
  onChangeDate: function (e) {
    this.setData({
      date: e.detail.value
    });
  },
  onChangeTime: function (e) {
    this.setData({
      time: e.detail.value
    });
  },
  onChangePosition: function (e) {
    this.setData({
      position: e.detail.value
    });
  },
  onChangeNum: function (e) {
    this.setData({
      sheet_num: e.detail.value
    });
  },
  formSubmit: function (e) {
    
    wx.request({
      url: 'http://122.152.233.115:8080/v1/text/',
      method: 'POST'
    })
  }
});
