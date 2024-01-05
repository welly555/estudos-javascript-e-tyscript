//705.484.450-52 070.987.720-03

class ValidaCPF{
    constructor (cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable:false,
            enumerable:true,
            configurable:false,
            value: cpfEnviado.replace(/\D+/g,'')
        })
    }
    sequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) ===this.cpfLimpo
    }
    geraNovoCpf() {
        const cpfSDigitos = this.cpfLimpo.slice(0,-2)
        const digito1 = ValidaCPF.geraDigito(cpfSDigitos)
        const digito2 = ValidaCPF.geraDigito(cpfSDigitos + digito1)
        this.novoCPF = cpfSDigitos + digito1 + digito2
    }
    static geraDigito(cpfSDigitos){
        let total = 0
        let revers = cpfSDigitos.length +1

        for (let i of cpfSDigitos){
            total += revers * Number(i)
            revers--
        }
        const digito = 11 - (total%11)
        return digito<=9?String(digito):'0'
    }
    valida() {
        if(
            !this.cpfLimpo || 
            typeof this.cpfLimpo !== 'string' || 
            this.cpfLimpo.length !== 11  || 
            this.sequencia() || 
            this.geraNovoCpf()
            ) 
                return false
        this.geraNovoCpf()
        
        return this.novoCPF === this.cpfLimpo
    }
}

const validaCPF = new ValidaCPF('070.987.720-03')
// const validaCPF = new ValidaCPF('111.111.111-11')
if(validaCPF.valida()){
    console.log("CPF valido")
}else{
    console.log("CPF invalido")
}