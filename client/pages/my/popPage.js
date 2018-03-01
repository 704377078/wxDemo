// pages/my/popPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  showToast:function(){
    wx.showToast({
      title:"这是提示框标题",
      icon: "success",  //success,none，loading
      success:function(){
        console.log("成功")
      },
      fail: function () {
        console.log("失败")
      },
    })
  },

  showLoading:function(e){
    console.log(e);
    wx.showLoading({
      title:"loading弹框标题",
      mask:true,
      fail:function(){
        console.log("失败")
      },
      complete:function(){
        console.log("接口调用结束")
      }
    })

    setTimeout(function () {  //2秒后关闭loading
      wx.hideLoading()
    }, 2000)
  },

  showModal: function () {
    wx.showModal({
      title: "这是标题",
      content:"模态弹窗内容在这里",
      showCancel:true , //是否显示取消按钮
      cancelText:"我要取消",
      success: function () {
        console.log("成功")
      },
      fail: function () {
        console.log("失败")
      },
      complete:function(e){
        console.log(e); //返回点击的相关信息
      }
    })
  }, 

  showActionSheet: function() {
    wx.showActionSheet({
      itemList: ["按钮1","按钮2","按钮3"],
      success: function (e) {
        console.log(e,"成功")
      },
      fail: function (e) {
        console.log(e,"失败")
      },
      complete: function (e) {
        console.log(e); //返回点击的相关信息
      }
    })
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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