import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
    rand(min = 100000000,max = 999999999) {
        return String(Math.floor(Math.random() * (max-min) + min))
    }

    formatado(cpf) {
        return(
        cpf.slice(0,3) + '.' +
        cpf.slice(3,6) + '.' +
        cpf.slice(6,9) + '-' +
        cpf.slice(9,11)
        
        )
    }

    geraNovoCPF() {
        const cpfSDigito = this.rand()
        const digito = ValidaCPF.geraDigito(cpfSDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSDigito + digito);
        const novocpf = cpfSDigito + digito + digito2
        return this.formatado(novocpf);
    }
}