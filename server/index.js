const express = require('express');
const app = express();
const cors = require('cors'); // Using the CORS node package because cors is a pain to use, so just use the package instead of fighting with it

app.use(cors()); // implements the cors package middleware
app.use(express.json()); // You have to use this to get the body through your requests, otherwise it wont be available to use

let dbId;
let dbName;

app.route('/api/updateName').put((req, res) => {
	const { name, id } = req.body; // destructures name and id off of body, just saves code
	dbId = id;
	dbName = name;
	res.status(200).send({ id: dbId, name: dbName }); // sends 200 and the result of the update
});

app.listen(8675, () => console.log('Listening on port 8675')); // starts the server so you can hit your API's
