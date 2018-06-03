const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')
const routes = require('./routes/routes')

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test') {
	mongoose.connect('mongodb://localhost/muber')
}

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
	
});

module.exports = app;