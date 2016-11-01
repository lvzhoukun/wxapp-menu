var app = getApp();
Page({
    data: {
        classify: [],
        pageUrl: '',
        childs: []
    },
    onLoad: function(options) {
        var page = this;
        wx.request({
          url: 'http://apis.juhe.cn/cook/category?key=' + app.AppKey,
          method: 'GET',
          success: function(res){
            // success
            console.log(res.data)
            var classify = res.data.result;
            page.setData({
                classify: classify,
                childs: classify[0].list
            })
          }
        })
    },
    handleTap: function(e) {
      var page = this;
      var parentId = e.currentTarget.id;
      var index = parentId - 10001;
      this.setData({
        childs: page.data.classify[index].list
      })
    },
    navToList: function(e) {
      console.log(e);
      var cid = e.currentTarget.id;
      var name = e.currentTarget.dataset.name;
      wx.navigateTo({
        url: '/pages/list/list?cid=' + cid + '&name=' + name,
      })
    }
})