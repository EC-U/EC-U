//app.js
App({
  
  onLaunch: function () {
    /*var messages = wx.getStorageSync('messages');
    if (!messages) {
      messages = this.loadCategory();

      wx.setStorageSync('messages', messages);
    }*/
    var categories = wx.getStorageSync('categories');
    if(!categories){
      categories = this.loadCategory();
      
      wx.setStorageSync('categories', categories);
    }
    
  },
  
  loadCategory:function(){
    var categories = new Array();

    var category1 = new Object();
    category1.id = '1';
    category1.name = '讲座';
    category1.status = '1';
    category1.des = 'xxxx';
    categories.push(category1);

    var category2 = new Object();
    category2.id = '2';
    category2.name = '出游';
    category2.status = '1';
    category2.des = 'xxxx';
    categories.push(category2);

    var category3 = new Object();
    category3.id = '3';
    category3.name = '游戏';
    category3.status = '1';
    category3.des = 'xxxx';
    categories.push(category3);

    var category4 = new Object();
    category4.id = '4';
    category4.name = '志愿者';
    category4.status = '1';
    category4.des = 'xxxx';
    categories.push(category4);

    var category5 = new Object();
    category5.id = '5';
    category5.name = '社团';
    category5.status = '1';
    category5.des = 'xxxx';
    categories.push(category5);

    var category6 = new Object();
    category6.id = '6';
    category6.name = '招聘';
    category6.status = '1';
    category6.des = 'xxxx';
    categories.push(category6);

    var category7 = new Object();
    category7.id = '7';
    category7.name = '物理';
    category7.status = '1';
    category7.des = 'xxxx';
    categories.push(category7);

    var category8 = new Object();
    category8.id = '8';
    category8.name = 'IT';
    category8.status = '1';
    category8.des = 'xxxx';
    categories.push(category8);

    var category9 = new Object();
    category9.id = '9';
    category9.name = '教育';
    category9.status = '1';
    category9.des = 'xxxx';
    categories.push(category9);



    return categories;
  },
  globalData: {
    userInfo: null
  }
})