const routes = async (fastify, options) => {
    const movieApiProxy = fastify.movieApiProxy
    
  fastify.get('/movie/search/:query', 
    {
        beforeHandler: [fastify.authenticate]
    },
    async (request, reply) => {

        const result = await movieApiProxy.searchMovie(request.params.query)

        reply.send(JSON.parse(result))
    })

    fastify.get('/movie/details/:movieId',
    {
        beforeHandler: [fastify.authenticate]
    },     
    async (request, reply) => {
        const result = await movieApiProxy.findMovieById(request.params.movieId)
        reply.send(JSON.parse(result))
    })

  }

  
  module.exports = routes