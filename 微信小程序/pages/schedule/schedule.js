var app = getApp()
Page({
  data: {
    time: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    color1: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
      { "xqj": 1, "skjc": 3, "skcd": 2, "kcmc": "数据科学数学基础@文史楼118", "color": "#85B8CF"},
      { "xqj": 1, "skjc": 5, "skcd": 3, "kcmc": "数据科学与工程算法@文史楼211", "color": "#90C652" },
      { "xqj": 2, "skjc": 3, "skcd": 2, "kcmc": "乒乓球@大学生活动中心", "color": "#D8AA5A"},
      { "xqj": 2, "skjc": 5, "skcd": 3, "kcmc": "操作系统@文史楼202", "color": "#FC9F9D"},
      { "xqj": 2, "skjc": 9, "skcd": 3, "kcmc": "马克思主义基本原理@教423", "color": "#0A9A84"},
      { "xqj": 3, "skjc": 1, "skcd": 2, "kcmc": "数据科学数学基础@文史楼118", "color": "#85B8CF"},
      { "xqj": 4, "skjc": 1, "skcd": 2, "kcmc": "专业英语@文史楼118", "color": "#61BC69"},
      { "xqj": 4, "skjc": 6, "skcd": 3, "kcmc": "人工智能导论@文史楼216", "color": "#12AEF3" },
      { "xqj": 5, "skjc": 1, "skcd": 3, "kcmc": "概率论@文史楼216", "color": "#E29AAD" },
      { "xqj": 5, "skjc": 5, "skcd": 2, "kcmc": "操作系统@实验室", "color": "#FC9F9D" }

    ],
    list2: [
      { "xqj": 1, "skjc": 8, "skcd": 0.5, "kcmc": "健步走", "color": "blue" },
      { "xqj": 1, "skjc": 2, "skcd": 0.5, "kcmc": "背单词", "color": "orange" },
      { "xqj": 2, "skjc": 2, "skcd": 0.5, "kcmc": "背单词", "color": "orange" },
      { "xqj": 3, "skjc": 1, "skcd": 0.5, "kcmc": "背单词", "color": "orange" },
      { "xqj": 4, "skjc": 1, "skcd": 0.5, "kcmc": "背单词", "color": "orange" },
      { "xqj": 5, "skjc": 1, "skcd": 0.5, "kcmc": "背单词", "color": "orange" },
      { "xqj": 6, "skjc": 1, "skcd": 0.5, "kcmc": "背单词", "color": "orange" },
      { "xqj": 2, "skjc": 8, "skcd": 0.5, "kcmc": "健步走", "color": "blue" },
      { "xqj": 1, "skjc": 4.75, "skcd": 0.5, "kcmc": "复习", "color": "red" },
      { "xqj": 3, "skjc": 5, "skcd": 1, "kcmc": "数学基础答疑", "color": "red" },
      { "xqj": 3, "skjc": 6, "skcd": 1, "kcmc": "专业英语答疑", "color": "red"},
      { "xqj": 3, "skjc": 7.5, "skcd": 1, "kcmc": "算法答疑", "color": "red" },
      { "xqj": 5, "skjc": 4, "skcd": 1, "kcmc": "双创组会", "color": "green" },
      { "xqj": 6, "skjc": 1, "skcd": 12, "kcmc": "学习", "color": "#526161" },
      { "xqj": 7, "skjc": 1, "skcd": 12, "kcmc": "学习", "color": "#526161" }
    ]
  },
 
  onLoad: function () {
    console.log('onLoad')
  }
})