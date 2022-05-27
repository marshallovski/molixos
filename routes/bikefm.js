const fastify = require('fastify')({ logger: false });
const os = require('os');

async function bikefm(fastify, options) {
    fastify.get('/bikefm', async (request, reply) => {
        return reply.view('/views/defaultapps/filemanager/index.ejs', {
            homedir: os.userInfo().homedir.replaceAll('\\', '/'),
            uname: os.userInfo().username
        });
    });
}

module.exports = bikefm;