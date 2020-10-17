const express = require('express');
const app = express();
const cors = require('cors'); // Using the CORS node package because cors is a pain to use, so just use the package instead of fighting with it
const pool = require('./db');

app.use(cors()); // implements the cors package middleware
app.use(express.json()); // You have to use this to get the body through your requests, otherwise it wont be available to use

app.route('/demoForCameron').get((req, res) => {
	pool.query('SELECT * FROM accounts', (err, users) => {
		if (err) {
			console.log(err);
			// send the SQL error if something goes wrong
			res.status(500).json({ err });
		} else {
			res.status(200).send({ peeps: users.rows });
		}
	});
});

app.listen(8675, () => console.log('Listening on port 8675')); // starts the server so you can hit your API's
