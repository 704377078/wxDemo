// pages/direction/subunit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   imgUrl:''
  },

  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
        
      }
    })
  },

  getWeRunData: function () {
    var runinfo = "???";
    wx.getWeRunData({
      success: function (info) {
        runinfo = info;
      },
      fail: function (e) {
        runinfo = "获取微信运动信息失败了";
      }
    })
    this.setData({
      runinfo: runinfo
    })
  }, 

  getNetworkType: function () {
    var runinfo = "???";
    wx.getNetworkType({
      success: function (info) {
        runinfo = info;
      },
      fail: function (e) {
        runinfo = "获取网络类型失败了";
      }
    })
    this.setData({
      netInfo: runinfo
    })
  },

  takephone:function(){
    wx.makePhoneCall({
      phoneNumber:"15958110699",
      success:function(e){
        this.showModal(e);
      },
      fail: function (e) {
        this.showModal(e);
      }
    })
  }, 

  takecode:function() {
    wx.scanCode({
      scanType: "qrCode",
      success: function (e) {
        this.showModal(e);
      },
      fail: function (e) {
        this.showModal(e);
      }
    })
  }, 
  takeBluetooth: function () {
    wx.openBluetoothAdapter({
      success: function (e) {
        // this.showModal(e);
         this.showToast(1);
      },
      fail: function (e) {
        // this.showModal(e);
        this.showToast(2);
      },
      complete:function(){
        this.showToast();
      }
    })
  }, 

  takeBeaconDiscovery: function () {
    wx.startBeaconDiscovery({
      success: function (e) {
        // this.showModal(e);
        this.showToast(1);
      },
      fail: function (e) {
        // this.showModal(e);
        this.showToast(2);
      },
      complete: function () {
        this.showToast();
      }
    })
  }, 

  takevibrate: function () {
    wx.vibrateLong({
      success: function (e) {
        // this.showModal(e);
        this.showToast(1);
      },
      fail: function (e) {
        // this.showModal(e);
        this.showToast(2);
      },
      complete: function () {
        this.showToast();
      }
    })
  }, 

  takeBrightness: function () {
    wx.setScreenBrightness({
      value:1,
      success: function (e) {
        // this.showModal(e);
        this.showToast(1);
      },
      fail: function (e) {
        // this.showModal(e);
        this.showToast(2);
      },
      complete: function () {
        this.showToast();
      }
    })
  }, 

  takeCaptureScreen: function() {
    wx.onUserCaptureScreen(function (res) {
      this.showToast(1);
    })
    // this.showToast();
  },

// 提示框
  showToast: function (num) {
    var title = "进来啦";
    if(num==1){
      title = "成功";
    }else if(num==2){
      title = "失败";
    }
    wx.showToast({
      title: title,
      icon: "success",  //success,none，loading
      success: function () {
        console.log("成功")
      },
      fail: function () {
        console.log("失败")
      },
    })
  },

  // 统一弹框弹出信息
  showModal: function (info) {
    wx.showModal({
      title: "这是标题",
      content: "info",
      showCancel: true, //是否显示取消按钮
      cancelText: "我要取消",
      success: function () {
        console.log("成功")
      },
      fail: function () {
        console.log("失败")
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
    this.getWeRunData();
    this.getNetworkType();
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