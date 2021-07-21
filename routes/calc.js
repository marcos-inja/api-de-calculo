const express = require('express')
const app = express.Router()
const calc = require('../src/calc')

app.use(express.json())

app.get('/multiplicacao/:n1/:n2', (req, res) => {
    return res.json({ 
            resultado: calc.mult(req.params.n1, req.params.n2)
        })
})

app.get('/soma/:n1/:n2', (req, res) => {
    return res.json({ 
            resultado: calc.soma(req.params.n1, req.params.n2)
        })
})

app.get('/subtracao/:n1/:n2', (req, res) => {
    return res.json({ 
            resultado: calc.sub(req.params.n1, req.params.n2)
        })
})

app.get('/divisao/:n1/:n2', (req, res) => {
    return res.json({
            resultado: calc.div(req.params.n1, req.params.n2)
        })
})

app.get('/potencia/:n1/:n2', (req, res) => {
    return res.json({
            resultado: calc.pot(req.params.n1, req.params.n2)
        })
})

module.exports = app