const express = require('express')
const app = express()
const path = require("path")
const calc = require(path.join(__dirname,"src/calc"))

app.use(express.json())

//Rota principal com o arquivos estatico html
    app.use(express.static(path.join(__dirname, "client")))

//Rotas usadas para os calculos
    app.get('/multiplicacao/:n1/:n2', (req, res) => {
        return res.json({ 
                resultado: calc.mult(req.params.n1, req.params.n2)
            })
    })

    app.get('/soma/:n1/n2', (req, res) => {
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

let PORTA = 8000
app.listen(PORTA, () => {
    console.log(`Rodando em http://localhost:${PORTA}/`);
})aaaa