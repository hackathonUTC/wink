var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var path = require('path');
var pg = require('pg');

var conString = "postgres://tyrius@localhost:5432/winkdev";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function (req,res,next) {
  console.log("/" + req.method + " - " + JSON.stringify(req.body));
  next();
});

app.post('/api/users/new', function(req, res) {
    var results = [];

    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        // SQL Query > Insert Data
        client.query("INSERT INTO users(user_id) values($1)", [req.body.user_id]);

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users WHERE user_id=$1",[req.body.user_id]);

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

app.put('/api/users/modify', function(req, res) {
    var results = [];

    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        // SQL Query > Insert Data
		client.query("UPDATE users SET firstname = ($1), lastname = ($2), branch = ($3), gender = ($4), language = ($5), relationshipStatus = ($6), semester = ($7), typeOfRelation = ($8), sexualPref = ($9), origin_id = ($10) WHERE user_id = ($11);", [req.body.firstname, req.body.lastname, req.body.branch, req.body.gender, req.body.language, req.body.relationshipStatus, req.body.semester, req.body.typeOfRelation, req.body.sexualPref, req.body.origin_id, req.body.user_id]);

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users WHERE user_id=$1",[req.body.user_id]);

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


// get all countries
app.get('/api/countries', function(req, res) {
	var results = [];
	console.log(req.body.firstname);
	// Get a Postgres client from the connection pool
	pg.connect(conString, function(err, client, done) {
		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({ success: false, data: err});
		}

		// SQL Query > Select Data
		var query = client.query("SELECT * FROM origins ORDER BY origin_id ASC;");

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

module.exports = app;
