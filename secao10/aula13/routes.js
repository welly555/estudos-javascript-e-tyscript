const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController.js')
const contatoController = require('./src/controllers/contatoController.js')

// rota home
route.get('/',homeController.paginaInicial)
route.post('/', homeController.trataPost)

// contato
route.get('/contato', contatoController.contato)
module.exports = route