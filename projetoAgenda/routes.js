const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController.js')
const loginController = require('./src/controllers/loginController.js')

// rota home
route.get('/',homeController.index)

//router login
route.get('/login/index',loginController.index)

module.exports = route