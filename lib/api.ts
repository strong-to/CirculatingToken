import axios from 'axios'

// 创建 axios 实例
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 可以在这里添加 token 等认证信息
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // 统一错误处理
    if (error.response) {
      console.error('API Error:', error.response.data)
    } else if (error.request) {
      console.error('Network Error:', error.request)
    } else {
      console.error('Error:', error.message)
    }
    return Promise.reject(error)
  }
)

// 导出常用的 API 方法
export const fetchData = async <T = any>(url: string, config?: any): Promise<T> => {
  return apiClient.get<T>(url, config)
}

export const postData = async <T = any>(url: string, data?: any, config?: any): Promise<T> => {
  return apiClient.post<T>(url, data, config)
}

export const putData = async <T = any>(url: string, data?: any, config?: any): Promise<T> => {
  return apiClient.put<T>(url, data, config)
}

export const deleteData = async <T = any>(url: string, config?: any): Promise<T> => {
  return apiClient.delete<T>(url, config)
}

export default apiClient

