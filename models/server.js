const express = require('express')
const cors = require('cors');

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3000

        /** URL's for EndPoints */
        this.usersPath = '/api/users'


        /** Middlewares */
        this.middlewares()
        
        /** My application's routes */
        this.routes()
    }

    middlewares(){
        /** CORS */
        this.app.use(cors())

        /** Read and parse of body */
        this.app.use(express.json())

        /** Public dir */
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        })
    }
}

module.exports = Server