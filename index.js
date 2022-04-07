const express = require('express');
const path = require('path')

const app = express()
const port = 3000

// app.get('/', (req, res) => res.send("Home!"))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'html/index.html')))

app.get('/sobre', (req, res) => res.send("Sobre!"))
app.listen(port, () => console.info(`Servidor rodando na porta ${port}`))