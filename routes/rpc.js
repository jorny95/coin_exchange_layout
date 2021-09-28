const express = require('express')
const router = express.Router()
const request = require('request')
const logger = require('../logger')
require('dotenv').config()

const headers = {"Content-type":"application/json"}

const USER = process.env.RPC_USER
const PASS = process.env.RPC_PASSWORD
const RPCPORT = process.env.RPC_PORT
const ID_STRING = 'jordcoin_exchange'
const ACCOUNT = 'jihyun'
const url = `http://${USER}:${PASS}@127.0.0.1:${RPCPORT}`

//localhost:3500/api/test
router.get('/test',(req,res)=>{
    res.json({msg:'test api'})
})

function createbody(method,params=[]){
    let obj = {jsonrpc:"1.0",id:ID_STRING,method,params}
    return JSON.stringify(obj)
}

//블록갯수 구하기 localhost:3500/api/getblockcount
router.get('/getblockcount',(req,res,next)=>{
    let body = createbody('getblockcount',[])
    let options = {url,method:"POST",headers,body}
    const callback = (err,response,data) =>{
        if(err == null && response.statusCode == 200) {
            const body = JSON.parse(data)
            res.json(body)
        } else {
            logger.error(`/getblockcount error`)
            next()
        }
    }

    request(options,callback)
})

module.exports = router