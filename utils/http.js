// import { config } from '../config.js'


class HTTP {
    constructor() {
    //   this.baseRestUrl = config.api_blink_url
    }
    request(params){
      return new Promise((resolve,reject)=>{
        this._request(params,resolve,reject)
      })
    }
    _request(params,resolve,reject) {
      var url =  params.url;
      if (!params.method) {
        params.method = 'GET';
      }
     
      wx.request({
        url: url,
        data: params.data,
        method: params.method,
        header: {
          'content-type': 'application/json'
        },
      
        success: function (res) {
          if (startChar == '2') { 
            if(res.data.code==500){
              if(res.data.msg =='请输入用户ID'){
                wx.showToast({
                  title: '当前账号未登录',
                  icon: 'none',
                  duration: 1000
                })
                setTimeout(function(){
                  wx.navigateTo({
                    url: '../firstPage/firstPage'
                  })
                },1000)
                resolve(res.data)
                // 增加一些判断 if..else...
              }else{
                wx.showToast({
                  title:res.data.msg,
                  icon:'none',
                  duration:2000
                })
                resolve(res.data)
              }
            }
            else{
              resolve(res.data)
            }
          } else {
            reject(res.data);
            wx.showToast({
              title:res.data.status==404?'Not_Found':'抱歉，出现一个错误',
              icon:'none',
              duration:1500
            })
          }
        },
        fail: function (err) {
          reject(err.data);
          wx.showToast({
            title:"",
            icon:'none',
            duration:1500
          })
        }
      });
    }
  };
  
  export { HTTP };