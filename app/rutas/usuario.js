const express = require('express')

const controlador = require('../controlador/usuario')

const router = express.Router()

const path = 'usuario'

router.get(
      `/${path}`,
      controlador.getUsuario
)

router.post(
      `/${path}`,
      controlador.postUsuario
)

router.get(
      `/${path}/:nameUser`,
      controlador.searchUsuario)

router.put(
      `/${path}/:id`,
      controlador.putUsuario
)

router.delete(
      `/${path}/:id`,
      controlador.deleteUsuario
)

module.exports = router