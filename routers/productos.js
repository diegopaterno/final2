const express = require('express')
const routerProductos = express.Router()

const controlador = require('../controller/productos')

routerProductos.get('/:id?', controlador.obtenerProductos)


routerProductos.post('/', controlador.guardarProducto)


routerProductos.put('/:id', controlador.actualizarProducto)


routerProductos.delete('/:id?', controlador.borrarProducto)

module.exports = routerProductos