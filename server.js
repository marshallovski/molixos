const fastify = require('fastify')({ logger: false });
const path = require('path');

const port = 3030;

fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs')
  }
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/'
})

// API
fastify.register(require('./routes/exec.js'), { prefix: '/api' })
fastify.register(require('./routes/api.js'), { prefix: '/api' })

// desktop
fastify.register(require('./routes/os.js'), { prefix: '/' })

// filemanager
fastify.register(require('./routes/bikefm.js'), { prefix: '/apps' })

// music player
fastify.register(require('./routes/hiplay.js'), { prefix: '/apps' })

// settings (control panel)
fastify.register(require('./routes/settings.js'), { prefix: '/apps' })



const start = async () => {
  try {
    await fastify.listen(port);
    console.log(`Molix is running on ${fastify.server.address().address}:${fastify.server.address().port}.`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

// experimental, but works
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 7070 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    try {
      let res = require('child_process').execSync(data.toString('utf-8'));
      console.log(Buffer.from(data).toString());
      ws.send(Buffer.from(res).toString());
    } catch (e) {
      ws.send(e);
      console.log(e);
    }
  });

});
start()
