const express = require('express')
const app = express()
const path = require('path')
const routerCalc = require('./routes/calc')
let PORT = 8000


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

app.use(function (req, res, next) {
    res.status(404).send("Url não encontrada")
})

app.listen(PORT, () => {
    console.log(`Rodando em http://localhost:${PORT}/`);
})