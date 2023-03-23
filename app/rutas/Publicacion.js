const express = require('express')

const controlador = require('../controlador/Publicacion')

const router = express.Router()

const path = 'publicacion'

router.get(
      `/${path}`,
      controlador.getPublicacion
)

router.post(
      `/${path}`,
      controlador.postPublicacion
)

router.get(
      `/${path}/:nameUser`,
      controlador.searchPublicacion
)

router.put(
      `/${path}/:id`,
      controlador.putPublicacion
)

router.delete(
      `/${path}/:id`,
      controlador.deletePublicacion
)

module.exports = router