const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const txttosl = require('txttosl-api');

const app = express();
const port = 3000;

app.set('view engine', hbs);
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    let errorMessage = "";
    res.render('landingPage.hbs', {errorMessage});
});

app.post('/convert', (req, res) => {
    const input = req.body.input;
    console.log(`input received for input: ${input}`);

    txttosl.translate(input, 'BSL').then((url) => {
        console.log(`url generated after conversion: ${url}`);
        res.redirect(url);
    }).catch((e) => {
        const errorMessage = 'an error occured while converting';
        res.render('landingPage.hbs', {errorMessage});
        console.log(`conversion error: ${e}`);
    })
});

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
