const express = require('express')
const router = express.Router()
const rpc = require('./rpc')

//거래소 관련된거
//api 관련된거

router.use('/api',rpc)

module.exports = router