import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.example.com'
});

// 请求拦截器
http.interceptors.request.use(conf => {
  // 在发送请求之前做些什么
  return conf;
}, err => {
  // 对请求错误做些什么
  return Promise.reject(err);
});

// 响应拦截器
http.interceptors.response.use(res => {
  // 对响应数据做点什么
  return res;
}, err => {
  // 对响应错误做点什么
  return Promise.reject(err);
});

export default http