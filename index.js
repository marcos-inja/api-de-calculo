const express = require('express')
const app = express()
const path = require('path')
const routerCalc = require('./routes/calc')


//Rotas principais com os arquivos para a pagina html
app.use('/static', express.static(path.resolve(__dirname, 'views', 'static')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'index.html'))
})

app.get('/sobre', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'index.html'))
})

app.get('/documentacao', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'index.html'))
})

//Rotas usadas para os calculos
app.use(routerCalc)

let PORTA = 8000
app.listen(PORTA, () => {
    console.log(`Rodando em http://localhost:${PORTA}/`);
})