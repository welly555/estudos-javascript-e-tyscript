import GeraCPF from './modules/GeraCPF'
import './assets/css/style.css';

(function() {
    const cpf = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = cpf.geraNovoCPF()
})()