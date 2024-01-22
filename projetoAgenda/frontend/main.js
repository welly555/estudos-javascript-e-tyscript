import 'core-js/stable'
import 'regenerator-runtime/runtime'

// import './assets/css/style.css'

import Login from './modules/Login'

const login = new Login('.verifica-login')
const cadastro = new Login('.verifica-cadastro')

login.init()
cadastro.init()