// index.js
// 获取应用实例
const app = getApp();
import { CommonModel } from "../../models/common.js";
let commonApi = new CommonModel();
Page({
  data: {
    storeId:"" ,// demo
  },
  onLoad() {
    //  demo 调用封装好的接口 
    const banner = commonApi.bannerList(this.data.storeId);
  },
});
