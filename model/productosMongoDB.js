const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    nombre: String,
    precio: String,
    stock: String,
    marca: String,
    categoria: String,
    detalles: String,
    foto: String,
    envio: Boolean
})

const ProductoModel = mongoose.model('productos', productoSchema)


class ProductoModelMongoDB {
    async conectarDB() {
        try {
            await mongoose.connect("mongodb+srv://28839443:28839443@cluster0.tueiuer.mongodb.net/?retryWrites=true&w=majority")
            console.log('base de datos conectada!')
        } catch (error) {
            console.log(`error al conectar! la: ${error}`)
            
        }
    }
    async createProducto(producto) {
        try {
            
            const productoSave = new ProductoModel(producto)
            await productoSave.save()

            return productoSave
            
        } catch (error) {
            console.log(`Error en el createProducto: ${error}`)
        }

    }
    async readProductos(){
        try {
            const productos = await ProductoModel.find({})
             return productos
        } catch (error) {
            console.log(error)
        }
        

    }
    async readProducto(id){
        try {
            const producto = await ProductoModel.findById(id)
            return producto
        } catch (error) {
            console.log(error)
        }

    }
    async updateProducto(id, producto) {

        try {
            
            const resultado = await ProductoModel.updateOne({_id: id},{$set: producto})
            console.log(resultado)

            const productoActualizado = await ProductoModel.findById(id)

            return { resultado, productoActualizado }
        } catch (error) {
            console.log(`Error en updateProducto: ${error}`)
        }
        
    }
    async deleteProductos(id){

        try {
            //await ProductoModel.deleteOne({_id:id})
            await ProductoModel.findByIdAndDelete(id)
            return 'ok, producto borrado'
        } catch (error) {
            console.log(`error en delete producto: ${error}`)
            
        }
    }
   
}

module.exports = ProductoModelMongoDB


/* db.productos.insertOne({
    nombre: 'producto1',
    precio: 1234,
    stock: 3,
    marca: 'marca1',
    categoria: 'categoria1',
    detalles: 'detalles1',
    foto: 'foto1.jpg',
    envio: true
}) */