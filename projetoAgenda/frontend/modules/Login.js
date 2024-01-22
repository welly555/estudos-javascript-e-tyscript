import validator from "validator"

export default class Login {
    constructor(formClass){
        this.form = document.querySelector(formClass)
    }

    init() {
        this.event()
    }

    event() {
        if(!this.form) return
        this.form.addEventListener('submit', e=>{
            e.preventDefault()
            this.validate(e)
        })
    }
    validate(e) {
        const el = e.target
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')
        const errorEmail = document.querySelector('.error-email')
        const errorPassword = document.querySelector('.error-password')
        let error = false

        if(!validator.isEmail(emailInput.value)){
            errorEmail.innerHTML = "Email invalido"
            error = true
        }
        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            errorPassword.innerHTML = "A senha precisar ter entra 3 e 50 caracteres"
            error = true
        }
        if (!error){
            el.submit()
        }
    }
}