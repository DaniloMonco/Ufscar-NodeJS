const routes = async (fastify, options) => {

    const repository = require('../repository/collectorRepository')

    

    fastify.post('/collector/add', 
                {
                    beforeHandler: [fastify.authenticate]
                },
                async (request, reply) => {

    
                    const collectorRepository = new repository()
                    const collector = request.body

                    collectorRepository.insert(collector, (error, result) =>{
                        if (error)
                            reply.send(error)
                        else{
                            reply.send(result)
                        }
                    })
        
    })

    fastify.delete('/collector/delete',
                    {
                        beforeHandler: [fastify.authenticate]
                    }, 
                    async (request, reply) => {
                        const collector = request.body

                        const collectorRepository = new repository()
                        collectorRepository.delete(collector, (error, result)=>{
                            if (error)
                                reply.send(error)
                            
                            reply.send(result)            
                        })
                       
                })


  }

  
  module.exports = routes
