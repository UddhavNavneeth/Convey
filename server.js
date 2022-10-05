const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const app = express();
const port = 3000;


app.set('view engine', hbs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.use("/", routes);

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
