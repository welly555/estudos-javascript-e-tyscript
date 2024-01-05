const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

// const pessoas = [
//     {nome: '01'},
//     {nome: '02'},
//     {nome: '03'},
//     {nome: '04'}
// ]

// const json = JSON.stringify(pessoas,'',2)

// escreve(caminhoArquivo,json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    renderizaDados(dados)
}
function renderizaDados(dados) {
    dados = JSON.parse(dados)

    dados.forEach(cal => console.log(cal.nome))
}
lerArquivo(caminhoArquivo)
