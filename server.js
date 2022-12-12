const express = require('express')
const routerProductos = require('./routers/productos')
//configuraciones
const app = express()
require('dotenv').config()

//middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//routeo de mi app
app.use('/api/productos', routerProductos) // viene de la liena 2, se podria escribir asi app.use('/api/productos', require('./router/productos'))


/* app.get('/', (req, res) =>{
    res.send('holaaa')
}) */

const PORT = process.env.PORT 
app.listen(PORT, (err) =>{
    if(err) throw new Error (`paso algo ${err}`)

    console.log(`servidor arriba en el puerto : ${PORT}`)
})