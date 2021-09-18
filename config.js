'use strict'

module.exports = {
  mailer: {
    service: 'Gmail',
    auth: {
      user: 'parkingdoneeasy@gmail.com',
      pass: 'parkingparker'
    }
  },
  dbConnstring: 'mongodb://admin:123@cluster0-shard-00-00.otpsr.mongodb.net:27017,cluster0-shard-00-01.otpsr.mongodb.net:27017,cluster0-shard-00-02.otpsr.mongodb.net:27017/shareCode?ssl=true&replicaSet=atlas-ioi349-shard-0&authSource=admin&retryWrites=true&w=majority',
  sessionKey: 'HaloCode4Share'
}
