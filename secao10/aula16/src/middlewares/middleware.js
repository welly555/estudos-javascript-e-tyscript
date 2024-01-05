module.exports = (req, res, next) =>{
    
    res.locals.umaVariavelLocal = 'variavel local'
    
    next()
}