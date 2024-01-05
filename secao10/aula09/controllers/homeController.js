exports.paginaInicial = ( req,res ) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button> enviar</button>
        </form>
        `)
}

exports.trataPost = (req,res) =>{
    res.send('form recebido')
}

