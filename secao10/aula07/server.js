const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button> enviar</button>
    </form>
    `)
})
app.post('/',(req,res) => {
    res.send('formulario recebido')
})
app.get('/contato', (req,res) => {
    res.send('contato')
})

app.listen(3000,() => {
    console.log('http://localhost:3000')
    console.log('server porta 3000')
})