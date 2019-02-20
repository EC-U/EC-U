/*Page({

  data: {

  },

  onLoad: function (option) {
    var pageType = option.pageType||'create';
    var task;
    var curDate;
    if(pageType == 'create'){
      var ms = option.ms || new Data().getTime();
      curDate = moment(ms,"x");
      task = {
        title:"新建日程",
        important:"一般",
        data:moment(ms,"x").format("YYYY-MM-DD")
      };
    }else{
      var key = option.key;
      if(key){
        task = taskService.get({key:key}),
        curData = moment(task.startTimeMs);
      }
    }
    this.setData({curDate:curDate});
    var taskImportant = {"一般","重要"};
    var taskTime = _fn.getTaskTime(task);
    this.setData({
      task:task,
      taskTime:taskTime,
      taskImportant:taskImportant,
      pageType:pageType,
    });
  },

getTaskTime:function(task){
  task = task || {};
  var now = utils.getPageData().data.curDate;
  var dateStr = task.date || now.format('YYYY-MM-DD');
  var cur
},


})*/