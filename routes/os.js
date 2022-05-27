const fastify = require('fastify')({ logger: false });

async function os(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return reply.view('/views/index.ejs');
  })
}

module.exports = os;