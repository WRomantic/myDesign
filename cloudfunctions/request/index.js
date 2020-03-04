// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request-promise')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  // let url = `https://api.apiopen.top/videoCategoryDetails?id=${event.page}`;
  let url = `https://www.mxnzp.com/news/list?typeId=${event.type}&page=${event.page}`;
  return await request(url)
}