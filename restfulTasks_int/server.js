const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/tasklist', { useNewUrlParser: true });


app.listen(8000, () => console.log("listening on port 8000"));

// app.use(express.static(__dirname + "/client/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/static');

app.use(express.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());


require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)