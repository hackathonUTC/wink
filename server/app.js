var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

var path = require('path');
var pg = require('pg');

var conString = "postgres://tyrius@localhost:5432/winkdev";

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json();

/* GET home page. */
router.get('/', function(req, res) {
	res.json({"message": "test", "req": req.body});
});

router.post('/api/newuser', jsonParser, function(req, res) {
	console.log('api/newuser/', req.body.login);

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
        client.query("INSERT INTO users(user_id) values($1)", [req.body.login]);

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users WHERE user_id=$1",[req.body.login]);

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

router.put('/api/user', jsonParser, function(req, res) {
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
		client.query("UPDATE users SET firstname=($1), lastname=($2), branch=($3), gender=($4), language=($5), relationshipStatus=($6), birthday=($6), semester=($7), typeOfRelation=($8), sexualPref=($9), origin_id=($10) WHERE id=($11)", [req.body[0].firstname, req.body[0].lastname, req.body[0].branch, req.body[0].gender, req.body[0].language, req.body[0].relationshipStatus, req.body[0].birthday, req.body[0].semester, req.body[0].typeOfRelation, req.body[0].sexualPref, req.body[0].origin.origin_id, req.body[0].user_id]);

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users WHERE user_id=$1",[req.body[0].user_id]);

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
router.get('/api/countries', function(req, res) {
	var results = [];

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


app.use("/", router);

module.exports = app;
