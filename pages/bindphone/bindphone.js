// bindphone.js
var app = getApp();
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
  
  },
  onHide: function () {
    app.globalData.is_phone = 1
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    app.globalData.is_phone = 1
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

});