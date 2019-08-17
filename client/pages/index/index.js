//index.js

Page({
  data: {
    searchContent: '',


    navScrollLeft: 0,
    currentTab: 0,
    navData: [{
      text: '推荐'
    }, {
      text: '热门'
    }]
  },
  onLoad: function () {
  },
  switchTab(event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
  }
})
