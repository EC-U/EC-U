var app = getApp()
Page({
  data: {
    time: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    color1: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
      { "xqj": 1, "skjc": 3, "skcd": 2, "kcmc": "羽毛球@体育馆" },
      { "xqj": 1, "skjc": 5, "skcd": 3, "kcmc": "数据结构@实验室" },
      { "xqj": 1, "skjc": 8, "skcd": 1, "kcmc": "计算机系统@实验室" },
      { "xqj": 1, "skjc": 9, "skcd": 3, "kcmc": "国史纲要@文史楼203" },
      { "xqj": 2, "skjc": 1, "skcd": 2, "kcmc": "短篇小说赏析@教206" },
      { "xqj": 2, "skjc": 5, "skcd": 2, "kcmc": "离散数学@教206" },
      { "xqj": 2, "skjc": 8, "skcd": 2, "kcmc": "毛中特@教319" },
      { "xqj": 3, "skjc": 1, "skcd": 2, "kcmc": "计算机系统@文附楼416" },
      { "xqj": 4, "skjc": 3, "skcd": 2, "kcmc": "离散数学@教206" },
      { "xqj": 4, "skjc": 5, "skcd": 4, "kcmc": "数据科学导论@文附楼" },
      { "xqj": 5, "skjc": 1, "skcd": 2, "kcmc": "计算机系统@文附楼" },
      { "xqj": 5, "skjc": 5, "skcd": 3, "kcmc": "数据结构" },
    ],
    list2: [
      { "xqj": 1, "skjc": 4, "skcd": 1, "kcmc": "开会" },
    ]
  },
 
  onLoad: function () {
    console.log('onLoad')
  }
})