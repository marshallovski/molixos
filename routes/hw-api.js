const fastify = require('fastify')({ logger: true });
const os = require('os');

async function hw(fastify, options) {
  fastify.get('/sys', async (request, reply) => {
    let sec = os.uptime();
    let min = sec/60;
    let hour = min/60;
       
    sec = Math.floor(sec);
    min = Math.floor(min);
    hour = Math.floor(hour);
      
    hour = hour%60;
    min = min%60;
    sec = sec%60;


    return {
    ram: {
        frontendUsage: `${formatBytes(process.memoryUsage().rss, 1)}`,
        memoryUsage: `${formatBytes(os.totalmem() - os.freemem(), 1)} / ${formatBytes(os.totalmem(), 1)}`,
        freeMemory: `${formatBytes(os.freemem(), 1)}`
    },
    cpu: {
        name: os.cpus()[0] ? os.cpus()[0].model : "unknown CPU",
        usage: 'soon',
        cpus: os.cpus(),
        arch: os.arch()
    },
    other: {
        hostname: os.hostname(),
        tmpdir: os.tmpdir(),
        nodever: process.version,
        uptime: `${hour}:${min}:${sec}`,
        uinfo: os.userInfo(),
    }
};
  })
}

function formatBytes(bytes, decimals) {
     if (bytes === 0) return '0 B'
      let k = 1000,
          dm = decimals + 1 || 3,
          sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(bytes) / Math.log(k))
     return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

module.exports = hw;