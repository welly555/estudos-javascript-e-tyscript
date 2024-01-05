const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController.js')

// rota home
route.get('/',homeController.paginaInicial)
route.post('/', homeController.trataPost)

// contato
route.get('/contato', contatoController.contato)
module.exports = route