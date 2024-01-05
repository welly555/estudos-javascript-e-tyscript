const objetos = []
function meuEscopo() {
    const form = document.querySelector('.form');

    function receberEvento (evento) {
        evento.preventDefault();
        const nome = form.querySelector('#nometxt');
        const sobrenome = document.getElementById('sobrenometxt').value;
        const peso = document.getElementById('pesotxt').value;
        const altura = document.getElementById('alturatxt').value;
        
        console.log(nome,sobrenome,peso,altura)
    }

    form.addEventListener('submit', receberEvento);
    
}
function salvar(){
    
    
    const resul = document.getElementById('resul');
    
    if(nome == "" || sobrenome == "" || peso ==''||altura==''){
        alert("os campos não podem está vazios")
    }else{
        resul.innerHTML = `Nome: ${nome} Sobrenome: ${sobrenome} Peso: ${peso} Altura: ${altura}`;
        objetos.push({nome,sobrenome,peso,altura})
    }

    
}
meuEscopo();
