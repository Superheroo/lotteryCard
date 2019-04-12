import axios from 'axios';
// import {
//   getToken,setToken
// } from 'utils/auth';

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['Authorization'] = getToken(); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    const res = response.data;
    const headers = response.headers;
    // if(headers.token!=undefined||headers.token==""){
    //   setToken(headers.token);
    // }
     if (res.code === 401 || res.code === 60101){
          // Message(
          //   {
          //   message: '你已被登出，请重新登录',
          //   type: 'error'
          // });
        store.dispatch('FedLogOut').then(() => {
          setTimeout(()=>{
            location.reload();
          },1000);
          // MessageBox.alert('你已被登出，请重新登录', '确定登出', {
          // confirmButtonText: '确定',
          // callback: action => {
          //      // 为了重新实例化vue-router对象 避免bug
          // }
          // });
      });
       return Promise.reject('error');
    }
    if (res.code === 60203) {
      // Message({
      //   message: '当前用户无相关操作权限！',
      //   type: 'error',
      //   duration: 5 * 1000
      // });
      return Promise.reject('error');
    }
    if (response.code === 500) {
      // Message({
      //   message: "服务器开小差了！请联系客服。",
      //   type: 'error',
      //   duration: 5 * 1000
      // });
    } else {
      return response.data;
    }
  },
  error => {
    console.log('err' + error); // for debug
    // Message({
    //   message: "服务器开小差了！请联系客服。",
    //   type: 'error',
    //   duration: 5 * 1000
    // });
    return Promise.reject(error);
  }
);

export default service;
