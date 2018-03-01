// pages/my/mapPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myLocation:''
  },
  setMapData: function () {
    var shop = {
      shop_info_lon: 120.237478,
      shop_info_lat: 30.189875,
      shop_name: "滨康路地体"
    }
    var that = this;
    wx.getLocation({
      success: function (res) {
        console.log(res);
        that.setData({
          myLocation:res,
          markers: [
            {
              longitude: shop.shop_info_lon,
              latitude: shop.shop_info_lat,
              iconPath: "/images/61.png",
              callout: {
                content: "<view style='font-weight:bold;font-size:16px;'>" + shop.shop_name + "</view><br/><view style='color:#666666;'>110人消费</view>",
                bgColor: "#ffffff",
                display: "ALWAYS",
                padding: 10,
                boxShadow: "1px 1px 2px rgba(0,0,0,0.4)"
              }
            }
          ],

          polyline: [{
            points: [{
              longitude: res.longitude,
              latitude: res.latitude
            }, {
              longitude: shop.shop_info_lon,
              latitude: shop.shop_info_lat
            }],
            color: "#FF0000DD",
            width: 2,
            dottedLine: true
          }]
        });
      }
    });
    console.log(2222)
    this.search();
  },

  
  
  regionchange(e) {
    console.log(e.type)
  },
  // markertap(e) {
  //   wx.showToast({
  //     title: "点到我了，哈哈",
  //     icon: "none",  //success,none，loading
  //   })
  // },
  controltap(e) {
    console.log(e.controlId)
  },

  positionMap:function(){
    var that = this;
    wx.getLocation({
      // type: 'gcj02',
      success: function (res) {
        console.log(res);
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 28,
          name: '测试地址',
          address: '火星路24号',
          infoUrl:"direction/dicIndex",
          success: function (res) {
            console.log(res)
          },
          fail: function (err) {
            console.log(err)
          },
          complete: function (info) {
            console.log(info)
          }
        })
      }
    })  
  },

  search:function(){
    console.log(1111)
    var shop = {
      longitude: 120.237478,
      latitude: 30.189875,
      shop_name: "滨康路地体",
      count:110,
      score:3.2
    }
    var address = shop.count+"人消费 | 评分"+shop.score;

    wx.openLocation({
      latitude: Number(shop.latitude),
      longitude: Number(shop.longitude),
      name: shop.shop_name,
      address: address,
    })
  },

// 选择位置
  chooseLocation:function(){
    wx.chooseLocation({
      success:function(e){
console.log(e);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // this.positionMap();
    console.log("页面加载")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("初次渲染完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("卸载")
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