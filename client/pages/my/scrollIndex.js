// pages/my/scrollIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("00000")
    var dataArry = [
      {
        id: 1,
        title: "这里是表单",
        content: "包括单选、复选、按钮、输入框等"
      },
      {
        id: 2,
        title: "支持节点和属性（既标签）",
        content: "将会以表格形式呈现"
      },
      {
        id: 3,
        title: "基础图标的支持",
        content: "支持多种图标，图标大小、颜色可选"
      },
      {
        id: 4,
        title: "更多",
        content: "小程序一个页面中navigateTo的设置数量不能超过4个，想看更多看这里"
      }
    ]
    wx.showTabBarRedDot({  //tabBar 某一项的右上角添加文本/显示红点
      index: 0,
      // text: '123'
    })

    wx.setNavigationBarTitle({
      title:"hello,我是最上面的标题"
    })

    this.setData({
      dataArry: dataArry
    });
  },

  totop:function(){
    wx.pageScrollTo({
      scrollTop:0
    })
  },


  showForm:function(e){
    var index = e.currentTarget.dataset.index;
    switch(index){
      case 0:
        wx.navigateTo({
          url: "formPage"
        })
      break;
      case 1:
        wx.navigateTo({
          url: "nodePage"
        })
        break;
      case 2:
        wx.navigateTo({
          url: "iconPage"
        })
        break;
      case 3:
        wx.navigateTo({
          url: "../direction/dicIndex"
        })
    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getSystemInfo();
    this.getSystemInfoSync();
  },

  getSystemInfo:function(){
    var data;
    wx.getSystemInfo({
      success: function (e){
        data = e;
      },
      fail: function (e) {
        console.log(e);
      },
    })
    this.setData({
      systemInfo: data
    });
  },

  getSystemInfoSync: function () {
    try {
      var res = wx.getSystemInfoSync()
      console.log(res)
    } catch (e) {
      // Do something when catch error
    }
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
  
  }
})