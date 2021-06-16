//index.js
//获取应用实例
var app = getApp();
Page({
  data: {

  },
  onLoad() {
    this.setData({
      canIUseGetUserProfile: app.globalData.canIUseGetUserProfile
    })
  },
  authorization: function (e) {
    console.log("authorization", e)
    if (this.data.canIUseGetUserProfile) {
      app.GetUserProfileHandler(false)
    } else {
      app.GetUserInfoHandler(e);
    }
    // 获取是否绑定手机号的标记
    app.userInfoCallback = (res) => {
      console.log("res",res)
      const is_bind = app.globalData.is_bind;
      if (is_bind) {
        // wx.navigateBack();
        this.back()
      } else {
        wx.redirectTo({
          url: "/pages/bindphone/bindphone?fromAuthorization=1",
        });
      }
    };
    // const is_bind = app.globalData.is_bind;
    // if (is_bind) {
    //   this.back()
    // } else {
    //   wx.redirectTo({
    //     url: "/pages/bindphone/bindphone",
    //   });
    // }
  },
  back() {
    wx.switchTab({
      url: "/pages/index/index",
    });
  }
});