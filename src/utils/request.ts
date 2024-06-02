import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000,
  // withCredentials: true // send cookies when cross-domain requests
});
// Response interceptors
// service.interceptors.response.use(
//   (response) => {

//     const res = response.data
//       return response.data

//   },
//   (error) => {
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

export default service;
