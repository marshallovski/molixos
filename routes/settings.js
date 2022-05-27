const fastify = require('fastify')({ logger: false });

async function bikefm(fastify, options) {
    fastify.get('/settings', async (request, reply) => {
        return reply.view('/views/defaultapps/settings/index.html');
    });
}

module.exports = bikefm;