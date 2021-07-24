import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios';
import { isOnline } from './env';

const BASE_URL = isOnline() ? 'https://production.com' : 'https://test.com';

const requestConfig: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: `${BASE_URL}/conan-exam/api`,
};

// 创建axios 实例
const axiosInstance: AxiosInstance = axios.create(requestConfig);

// 添加请求拦截器
axiosInstance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  // 对响应数据做点什么
  return response.data;
}, (error: AxiosError) => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

/** 针对不同的http method, 处理成统一的传参结构 */
export const getData = <T = any>(url: string, params = {}, config: AxiosRequestConfig = {}): Promise<T> => {
  return axiosInstance.get(url, { params, ...config });
};

export const postData = <T = any>(url: string, params = {}, config: AxiosRequestConfig = {}): Promise<T> => {
  return axiosInstance.post(url, params, config);
};

export const putData = <T = any>(url: string, params = {}, config: AxiosRequestConfig = {}): Promise<T> => {
  return axiosInstance.put(url, params, config);
};

export const deleteData = <T = any>(url: string, params = {}, config: AxiosRequestConfig = {}): Promise<T> => {
  return axiosInstance.delete(url, { params, ...config });
};

export default axiosInstance;
