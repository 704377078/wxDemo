// pages/direction/dicIndex.js
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
    var dataArry = [
      {
        id: 11,
        title: "随便搞搞",
        content: "打开相机，WiFi，蓝牙，打电话，扫码,附近设备，屏幕亮度，截屏，震动，联系人，，，"
      },
      {
        id: 12,
        title: "交互反馈",
        content: "提示框，弹框，弹出操作菜单，loading"
      },
      {
        id: 14,
        title: "开放接口",
        content: "需要获取用户信息的，授权之类的"
      },
      {
        id: 15,
        title: "更多",
        content: "小程序一个页面中navigateTo的设置数量不能超过4个，想看更多看这里"
      }
    ]

    this.setData({
      dataArry: dataArry
    });
  },
  
  showForm: function (e) {
    var index = e.currentTarget.dataset.index;
    switch (index) {
      case 0:
        wx.navigateTo({
          url: "subunit"
        })
        break;
      case 1:
        wx.navigateTo({
          url: "popPage"
        })
        break;
      case 2:
        wx.navigateTo({
          url: "subunit"
        })
        break;
    }

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
  
  }
})