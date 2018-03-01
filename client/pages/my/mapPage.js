// pages/my/mapPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    wx.showToast({
      title: "点到我了，哈哈",
      icon: "none",  //success,none，loading
    })
  },
  controltap(e) {
    console.log(e.controlId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.loadLocation();
  },

  loadLocation:function(){
    var that = this;
    wx.getLocation({
      success: function (data) {
        console.log(data);
        that.setData({
          data: data
        });
      }
    })
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