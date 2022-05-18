const fastify = require('fastify')({ logger: false });
const { exec } = require('child_process');

async function execf(fastify, options) {
  fastify.get('/exec/:action', async (request, reply) => {
    const execarg = request.params.action.replace('&', ' ');
    return exec(execarg, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }

      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });

  });
}

module.exports = execf;