const express = require('express');
const app = express();
let port = 3030;

app.engine('ejs', require('ejs').__express);
app.use(express.static('public'));

app.get('/molix', function (req, res) {
    res.render(__dirname + '/index.ejs', {

    });
});

app.listen(port, () => {
    console.log(`Molix is running on http://localhost:${port}/molix`);
});