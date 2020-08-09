import axios from 'axios'


export function request(config) {

  //1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/z8',
    timeout:5000
  })

  // 2.axios的拦截器
  // 2.1请求拦截的作用
  instance.interceptors.request.use(config=>{
    return config
  },error => {
    console.log(error)
  })

  // 2.2 响应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res);
    return res.data
  },error => {
    console.log(error)
  })

  //3.发送真正的网络请求
  return instance(config)

}



// export function request(config) {
//   return new Promise(((resolve, reject) => {
//     //1.创建axios的实例
//     const instance = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     })
//
//     // 发送真正的网络请求
//     instance(config)
//       .then(res=>{
//         resolve(res)
//       })
//       .catch(err=>{
//         reject(err)
//       })
//   }))
// }

/*export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  // 发送真正的网络请求
  instance(config.baseConfig)
    .then(res=>{
      // console.log(res)
      config.success(res)
    })
    .catch(err=>{
      // console.log(err)
      config.failure(err)
    })
}*/


/*export function request(config,success,failure) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  // 发送真正的网络请求
  instance(config)
    .then(res=>{
      // console.log(res)
      success(res)
    })
    .catch(err=>{
      // console.log(err)
      failure(err)
    })
}*/
