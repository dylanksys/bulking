var express = require ('express');

var protein = require('./protein');
var db = require('./db');
var theheck = require('./theheck');

var app = express();

app.use('/', protein);
app.use('/api', db);
app.use('/hecka', theheck);

app.listen(8000, function () {
	console.log('bulking listening on port 8000');
};
