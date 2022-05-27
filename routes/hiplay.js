const fastify = require('fastify')({ logger: false });
const mm = require('music-metadata');
const fs = require('fs');

async function bikefm(fastify, options) {
    fastify.get('/hiplay/:file', async (request, reply) => {
        try {
            const metadata = await mm.parseFile(request.query.file);
            if (!fs.existsSync('./public/assets/hiplay/tmp')) {
                fs.mkdirSync('./public/assets/hiplay/tmp');
            }

            fs.copyFileSync(request.query.file, './public/assets/hiplay/tmp/music.mp3');
            return reply.view('/views/defaultapps/hiplay/index.ejs', {
                trackName: metadata.common.title,
                trackAuthors: metadata.common.artists,
                filepath: request.query.file,
                trackCover: `data:${mm.selectCover(metadata.common.picture).format};base64,${mm.selectCover(metadata.common.picture).data.toString('base64')}`
            });
        } catch (error) {
            console.error(`[${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}] Hiplay error: ${error.message}`);
            return { content: error.message }
        }
    });
}

module.exports = bikefm;