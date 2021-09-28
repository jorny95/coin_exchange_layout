const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const db = require('./models')
const morgan = require('morgan')
const logger = require('./logger')
const router = require('./routes')
require('dotenv').config()

const PORT = process.env.PORT || 3500

db.sequelize.sync({force:true})
.then( _ => {
    logger.info(`DB connection success`)
})
.catch( err => {
    logger.error(`DB disconnection ${err}`)
})

app.use(morgan('dev'))

app.set('view engin','html')
nunjucks.configure('views',{ express:app, })

app.use('/',router)

app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 정보가 없습니다.`)
    error.status = 404
    logger.error(error.message)
    res.render('404.html')
})

app.listen(PORT,()=>{
    console.log(`server listen port ${PORT}`)
})