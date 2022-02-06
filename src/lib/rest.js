import axios from 'axios';
import profile from '../config/profile'
import showMessage from '../config/showMessage'
// 设置接口超时时间
axios.defaults.timeout = 60000;
axios.defaults.baseURL = profile.baseURL;
const headers={
     'Content-Type':'application/json;charset=UTF-8',        // 传参方式json
} 

axios.interceptors.request.use(
    config => {
    // 配置请求头
    const token = localStorage.getItem('token');
    config.headers = {
            ...headers,    
           'Authorization':'Bearer'+' '+token
      };
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
  //http response 拦截器
  axios.interceptors.response.use(
    response => {
        if(response.data['token']){
            localStorage.setItem('token',response.data.token)
        }
      return response;
    },
    error => {
      const {response} = error;
      if (response) {
        // 请求已发出，但是不在2xx的范围
        console.log(showMessage[response.data.status])
        return Promise.reject(response.data);
      } else {
       console.warn('网络连接异常,请稍后再试!');
      }
    }
  );


  // 封装 GET POST 请求并导出
 function request(url='',params={},type='POST'){
    //设置 url params type 的默认值
    return new Promise((resolve,reject)=>{
      let promise
      if( type.toUpperCase()==='GET' ){
        promise = axios({
          url,
          params
        })
      }else if( type.toUpperCase()=== 'POST' ){
        promise = axios({
          method:'POST',
          url,
          data:params
        })
      }
      //处理返回
      promise.then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
    }
    
   // get 请求
export const get = (url, params) => {
    return request(url,params, 'get')
};

// post请求
export const post = (url, params) => {
    return request(url,params, 'post')
};

export const login=(params)=>{
    return axios.post('/user/login',params)
}

export default {
   get,
   post
};