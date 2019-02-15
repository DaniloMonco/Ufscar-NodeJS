const fastifyPlugin = require("fastify-plugin")

module.exports = fastifyPlugin(async function(fastify, opts) {
  fastify.register(require("fastify-jwt"), {
    secret: "senhasecreta"
  })

  fastify.decorate("authenticate", async function(request, reply) {
      try {
            await request.jwtVerify()
      } 
      catch (err) {
        reply.send(err)
      }
  })
})