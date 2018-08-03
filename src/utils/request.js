export function GET(url, data) {
  return fetch(url, {
    data
  }).then(res => {
    return res.json()
  })
}

export function POST(url, data) {
  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true,
    data
  }).then(res => {
    return res.json()
  })
}
