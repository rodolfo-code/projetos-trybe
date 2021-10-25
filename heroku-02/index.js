const express = require('express')

const app = express()
const PORT = process.env.PORT || PORT
const hambiente = process.env.SERVER_INFO || 'nao tem'

app.get('/', (_req, res) => {
  res.status(200).send(`<h1>Ola turma ${hambiente}</h1>`)
})

app.get('/novo', (_req, res) => {
  res.status(200).send('<h1>Primeiro deploy!</h1>')
})

app.listen(PORT, () => {
  console.log(`Esta vivo na porta ${PORT}`)
})