import axios from 'axios'

const http = axios.create({
  baseURL: 'http://api.ydqjy.com/api/'
});

http.interceptors.response.use(function (res) {
  let api = res.config.url
  // console.log(api, res)
  return res;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default http