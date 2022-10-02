const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const txttosl = require('txttosl-api');

const app = express();
const port = 3000;

app.set('view engine', hbs);
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('landingPage.hbs');
})

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
