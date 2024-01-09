require('dotenv').config() // variaveis de ambiente 
const express = require('express') 
const app = express()
// banco de dados moongoBD
const mongoose = require('mongoose')

mongoose.connect(String(process.env.CONNECTIONSTRING))
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e))

const session = require('express-session') //session para salvar cooki
const mongoStore = require('connect-mongo') // session salvas em banco de dados
const flash = require('connect-flash') // mensagens rapidas
const routes = require('./routes') // rotas da aplicação
const path = require('path') // caminhos dentro da aplicação
const helmet = require('helmet') // segurança
const csrf = require('csurf') //segurança
const {middlewareGlobal, chckCsrfError, csrfMiddleware} = require('./src/middlewares/middleware') // middlewares do programa

app.use(helmet())
app.use(express.urlencoded({extended:true})); // pode postar formularios para dentro da aplicação
app.use(express.json())// importação de jason para dentro do programa
app.use(express.static(path.resolve(__dirname,'public'))) // utilização de static
 // config session
const sessionOptions = session({
    secret:'asjdbfçjsbadfbfsaçjd15',
    store: mongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions)
//flash mensages
app.use(flash())

app.set('views', path.resolve(__dirname,'src','views'))
app.set('view engine','ejs')

app.use(csrf())

app.use(middlewareGlobal)
app.use(chckCsrfError)
app.use(csrfMiddleware)
app.use(routes)
 
app.on('pronto', () => {
    app.listen(3000,() => {
        console.log('http://localhost:3000')
        console.log('server porta 3000')
    })
})
