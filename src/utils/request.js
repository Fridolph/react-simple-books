import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  resp => {
    if (resp.status === 200) {
      // console.log('resp', resp.data)
      return resp.data
    } else {
      console.error('请求码错误')
    }
  },
  err => {
    return Promise.reject(err)
  }
)

const GET = (url, params = {}) => {
  return service({
    url,
    method: 'get',
    data: params
  })
}

const POST = (url, data) => {
  return service({
    url,
    method: 'post',
    data,
    transformRequest: [
      function(data) {
        let ret = []
        for (let k in data) {
          if (data[k]) {
            ret.push(encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
          }
        }
        return ret.join('&')
      }
    ]
  })
}

// export function GET(url, data) {
//   return fetch(url, {
//     data
//   }).then(res => {
//     return res.json()
//   })
// }

// export function POST(url, data) {
//   return fetch(url, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     withCredentials: true,
//     data
//   }).then(res => {
//     return res.json()
//   })
// }

export {
  GET,
  POST
}
