const fastifyPlugin = require('fastify-plugin')
const movieApiProxy = require('../Proxy/movieApiProxy')

const apiConnector = async (fastify, options)=>{
    
    
    fastify.decorate('movieApiProxy', {
        getter(){
            return new movieApiProxy()
        }
    })

}

module.exports = fastifyPlugin(apiConnector)