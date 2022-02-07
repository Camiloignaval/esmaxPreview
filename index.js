const express = require('express')
const cors = require('cors')

const app = express()

// lectura y parseo de body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// cors
app.use(cors())

// directorio publico
app.use(express.static('public'))

// Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/forms', require('./routes/forms'))

// escuchar peticiones
app.listen(3001, () => {
  console.log('Escuchando puerto 3001')
})

// hola soy jael probando
