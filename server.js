const fastify = require('fastify')({ logger: true });
const path = require('path');

let port = 3030;

fastify.register(require("point-of-view"), {
    engine: {
        ejs: require("ejs"),
    },
});

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/'
});

// API
fastify.register(require('./routes/exec.js'), { prefix: '/api' }); 
fastify.register(require('./routes/hw-api.js'), { prefix: '/api' });  

// desktop
fastify.register(require('./routes/os.js'), { prefix: '/' });  


const start = async () => {
    try {
        await fastify.listen(port);
        console.log(`Molix is running on ${fastify.server.address().port}.`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();