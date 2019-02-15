const fastify = require('fastify')({
    logger: true
  })
  
  fastify.register(require('./decorators/movieApiConnector'))
  fastify.register(require('./decorators/authenticationConnector'))
  

  fastify.register(require('./routes/movieroutes'))
  fastify.register(require('./routes/userRoute'))
  fastify.register(require('./routes/collectorRoute'))

  fastify.listen(3000, (error, address) => {
      if (error){
        fastify.log.error(error)
        process.exit(1)
      }
      fastify.log.info(`server listening on ${address}`)
  })
