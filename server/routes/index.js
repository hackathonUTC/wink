var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');

var connectionString = "postgres://localhost:5432/winkdev";


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();

router.post('/api/newuser/:login', urlencodedParser, function(req, res) {
	console.log('api/newuser/', req.params.login);
	var client = new pg.Client(conString);
	client.connect(function(err) {
		if(err) {
			return console.error('could not connect to postgres', err);
		}

		client.query('INSERT INTO users(login) values($1)', req.params.login, function(err, result) {
			if(err) {
				return console.error('error running query', err);
			}
			console.log(result);
			client.end();
		});
	});
});

// get all countries
router.get('/api/countries', function(req, res) {
	var results = [];

	// Get a Postgres client from the connection pool
	pg.connect(connectionString, function(err, client, done) {
		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({ success: false, data: err});
		}

		// SQL Query > Select Data
		var query = client.query("SELECT * FROM origin ORDER BY id ASC;");

		// Stream results back one row at a time
		query.on('row', function(row) {
			results.push(row);
		});

		// After all data is returned, close connection and return results
		query.on('end', function() {
			done();
			return res.json(results);
		});

	});

});

module.exports = router;
