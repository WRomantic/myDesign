import request from './network.js'

export function getObject_detect(token, image) {
  return request({
    url: '/rest/2.0/image-classify/v2/advanced_general?access_token=' + token,
    method: 'POST',
    header: { 'content-type': 'application/x-www-form-urlencoded' },
    data: {
      image
    }
  })
}