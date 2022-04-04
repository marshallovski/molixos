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
})

fastify.get('/', async (request, reply) => {
    return reply.view("/index.ejs", { text: "text" });
});

fastify.get('/api/:action', async function (request, reply) {
    let action = request.params.action;
    switch (action) {
        case 'sys':
            return { memoryUsage: (process.memoryUsage().rss / 1024 ** 2).toFixed(1) };
            break;

        default:
            return { content: '[molix]: select action' };
            break;
    }
});

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