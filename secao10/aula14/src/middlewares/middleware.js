module.exports = (req, res, next) =>{
    
    if(req.body.cliente) {
        console.log()
        console.log(`vi que voce postou ${req.body.cliente}`)
        console.log()
    }
    
    next()
}