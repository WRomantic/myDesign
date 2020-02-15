const db = wx.cloud.database()

export function getHistory(){
  return db.collection('mv').get()
}