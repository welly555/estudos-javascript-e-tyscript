const Login = require('../models/loginModel')

exports.index = (req,res) =>{
    res.render('login')
}
exports.register = async (req,res) =>{

    try{
        const login = new Login(req.body)
        await login.register()
    
        if( login.errors.length > 0){
            req.flash('errors', login.errors)
            req.session.save(function() {
                return res.redirect('/login/index')
            })
            return
        }

        req.flash('success', 'Usuario criado com sucesso')
        req.session.save(function() {
            return res.redirect('/login/index')
        })
        
    }catch(e) {
        return res.render('404')
    }
    
}