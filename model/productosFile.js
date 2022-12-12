const fs = require('fs')
const { model } = require('mongoose')

class ProductoModelFile {
    nombreArchivo = 'productos.json' 
     async leerArchivoProductos(){
          
                try {
                    let leido = await fs.promises.readFile(this.nombreArchivo, 'utf-8')
                    let productos = await JSON.parse(leido)
                    return productos
                } catch (error) {
                    console.log(error)
                    let productos = []
                    return productos
                }
            
        }

        async guardarArchivoProductos(productos) {
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(productos, null, '\t'))
        }

        getId(productos) {
            return productos.length ? (productos[productos.length -1].id + 1) : 1
        }

        async createProducto(producto) {
            let productos = await this.leerArchivoProductos()

            producto.id = this.getId(productos)
            productos.push(producto)

            await this.guardarArchivoProductos(productos)
    }
    async readProductos(){
        const productos = await this.leerArchivoProductos()

        return productos
    }
    async readProducto(id) {
        const productos = await this.leerArchivoProductos()

        const producto = productos.find(producto => producto.id == id ) || {}

        return producto


    }
    async updateProducto(id, producto) {
        const productos = await this.leerArchivoProductos()

        producto.id = id
        const index = productos.findIndex(producto => producto.id == id)
        productos.splice(index, 1, producto)

        await this.guardarArchivoProductos(productos)

        return producto
    }   



    async deleteProducto(id) {
        const productos = await this.leerArchivoProductos()
        const index = productos.findIndex(producto => producto.id == id)
        const producto = productos.splice(index, 1 )[0]

        await this.guardarArchivoProductos(productos)

        return producto
    }
}

module.exports = ProductoModelFile