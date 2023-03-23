const express = require('express')
const iniDB = require('../db/db')
const app = express()
const port =3000
const usuario = require('../app/rutas/usuario')
const cors = require('cors')
app.use(cors())

app.use(
    express.json({
        limit: '20mb'
    })
)

app.use(
    express.urlencoded({
        limit: '20mb',
        extended: true
    })
)

app.use(usuario)

app.listen(port, ()=>{
    console.log('la app esta en linea en el puerto: '+port)
})

iniDB();

app.get('/', (req, res) =>{
    res.send('iniciamos api con exito')
})

