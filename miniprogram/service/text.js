import request from './network.js'

export async function getToken() {
  return await request({
    url: '/oauth/2.0/token',
    method: 'GET',
    data: {
      grant_type: 'client_credentials',
      client_id: 'RvXgw4SqB8Rgf5C4XnR9kt0O',
      client_secret: 'erOjh17NXjOuBqTqTlIfG1avPW1IW2Af'
    }
  })
}

export function getOrcTxt(token, image) {
  return request({
    url: '/rest/2.0/ocr/v1/general_basic?access_token=' + token,
    method: 'POST',
    header: { 'content-type':'application/x-www-form-urlencoded'},
    data: {
      image
    }
  })
}
