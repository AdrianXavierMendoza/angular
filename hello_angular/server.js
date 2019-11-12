const express = require("express");
const app = express();
const mongoose = require('mongoose');


app.listen(8000, () => console.log("listening on port 8000"));

app.use(express.static(__dirname + "/public/dist/public"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/static');
app.use(express.urlencoded({ extended: true }));


require('./server/config/mongoose.js')
require('./server/models/task.js')
require('./server/config/routes.js')(app)