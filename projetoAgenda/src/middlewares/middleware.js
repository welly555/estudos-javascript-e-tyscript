exports.middlewareGlobal = (req, res, next) =>{
    
    res.locals.umaVariavelLocal = 'variavel local'
    
    next()
}

exports.chckCsrfError = (err,req,res,next) =>{
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.render('./include/error404')
    }
}

exports.csrfMiddleware = (req,res,next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}