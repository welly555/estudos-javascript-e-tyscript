const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}));
app.get('/',(req,res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button> enviar</button>
    </form>
    `)
})
app.get('/test/:idUser?',(req, res) =>{
    console.log(req.params)
    res.send(req.params.idUser)
})
app.post('/',(req,res) => {
    console.log(req.body)
    res.send(`o que foi enviado: ${req.body.nome}`)
})
 

app.listen(3000,() => {
    console.log('http://localhost:3000')
    console.log('server porta 3000')
})