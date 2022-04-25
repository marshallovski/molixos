const fastify = require('fastify')({ logger: true });
const path = require('path');
const os = require('os');

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
    return reply.view('/views/index.ejs', { text: "text" });
});

fastify.get('/api/:action', async (request, reply) => {
    let action = request.params.action;

    let sec = os.uptime();
    let min = sec/60;
    let hour = min/60;
       
    sec = Math.floor(sec);
    min = Math.floor(min);
    hour = Math.floor(hour);
      
    hour = hour%60;
    min = min%60;
    sec = sec%60;

    switch (action) {
        case 'sys':
            return {
                ram: {
                    frontendUsage: `${(process.memoryUsage().rss / 1024 ** 2).toFixed(1)} MB`,
                    memoryUsage: `${(os.freemem() / 1e+9).toFixed(3)} MB / ${(os.totalmem() / 1e+9).toFixed(3)} MB`,
                    freeMemory: `${(os.freemem() / 1e+9).toFixed(3)} MB`
                },
                cpu: {
                    name: os.cpus()[0] ? os.cpus()[0].model : "unknown CPU",
                    usage: 'soon', 
                    //cpus: os.cpus()
                },
                other: {
                    hostname: os.hostname(),
                    tmpdir: os.tmpdir(),
                    nodever: process.version,
                    uptime: `${hour}:${min}:${sec}`
                }
            };
            break;

        default:
            return { content: 'Molix internal API. Please do not use in public.' };
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