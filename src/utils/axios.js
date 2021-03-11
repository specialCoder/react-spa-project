import axios from "axios";

// 创建axios 实例
const axiosInstance = axios.create({
  withCredentials:true
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

/** 针对不同的http method, 处理成统一的传参结构 */
export const getData = (url,params={},config={})=>{
  return axiosInstance.get(url,{params,...config});
};

export const postData = (url,params={},config={}) => {
  return axiosInstance.post(url,params,config);
};

export const putData = (url,params={},config={}) => {
  return axiosInstance.put(url,params,config);
};

export const deleteData = (url,params={},config={}) => {
  return axiosInstance.delete(url,{params,...config});
};

export default axiosInstance;