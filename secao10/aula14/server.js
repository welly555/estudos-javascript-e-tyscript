require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(String(process.env.CONNECTIONSTRING))
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e))
const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname,'public')))
app.set('views', path.resolve(__dirname,'src','views'))
app.set('view engine','ejs')

app.use(meuMiddleware)
app.use(routes)
 
app.on('pronto', () => {
    app.listen(3000,() => {
        console.log('http://localhost:3000')
        console.log('server porta 3000')
    })
})
