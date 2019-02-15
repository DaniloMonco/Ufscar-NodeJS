const routes = async (fastify, options) => {

    const repository = require('../repository/userRepository')

    fastify.post('/user/create', async (request, reply) => {
        const user = request.body
        const userRepository = new repository()
        userRepository.insert(user, (error, result)=>{
            if (error)
                reply.send(error)

            reply.send(result)
        })
        
    })

    fastify.post('/user/auth', async (request, reply) => {

        const userRepository = new repository()
        userRepository.findByUserAndPassword(request.body, (error, result)=>{
            if (error)
                reply.send(error)

                const user = result
                const token = fastify.jwt.sign(
                                                {
                                                    name: user.Name,
                                                    userId : user.UserId, 
                                                    exp : Math.floor(Date.now() / 1000) + (60 * 5)
                                                })
                reply.send({token})    
        })
        
    })
  }

  
  module.exports = routes