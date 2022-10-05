const express = require('express');
const txttosl = require('txttosl-api');

const router = express.Router();

router.get('/', (req, res) => {
    let errorMessage = "";
    res.render('landingPage.hbs', {errorMessage});
});

router.post('/convert', (req, res) => {
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

module.exports = router;