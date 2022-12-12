const ProductoModel = require("../model/productos");


//const model = ProductoModel.get('FILE')
const model = ProductoModel.get('MONGODB')
//const model = ProductoModel.get(process.env.PERSISTENCIA || 'MONGODB')

const obtenerProducto = async id => {
    const producto = await model.readProducto(id)
    return producto
}
const obtenerProductos = async () => {
        const productos = await model.readProductos()
        return productos
}
const guardarProducto = async (producto) => {
    const productoGuardado = await model.createProducto(producto)
    return productoGuardado
}
const borrarProducto = async (id) => {
    const productoEliminado = await model.deleteProducto(id)
    return productoEliminado
}
const actualizarProducto = async (id, producto) => {
    const productoActualizado = await model.updateProducto(id, producto)
    return productoActualizado
}


module.exports = {
    obtenerProducto,
    obtenerProductos,
    guardarProducto,
    borrarProducto,
    actualizarProducto
}