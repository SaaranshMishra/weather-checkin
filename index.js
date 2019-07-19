const express = require('express');
const Datastore = require('nedb');
const fetch = require('node-fetch');
require('dotenv').config();
console.log(process.env);

const app = express();
app.listen(5000, () => console.log('Listening at 5000...'));

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (req, res) => {
	database.find({}, (err, data) => {
		if (err) {
			res.end();
			return;
		}
		res.json(data);
	});
});

app.post('/api', (req, res) => {
	const data = req.body;
	const timestamp = Date.now();
	data.timestamp = timestamp;
	
	database.insert(data);

	res.json(data);
});

app.get('/weather/:latlon', async (req, res) => {
	const latlon = req.params.latlon.split(',');
	const latitude = latlon[0];
	const longitude = latlon[1];

	const api_key = process.env.API_KEY;
	const weather_url =`https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}/?units=si`;
	const weather_response = await fetch(weather_url);
	const weather_data = await weather_response.json();

	const airQuality_url =`https://api.openaq.org/v1/latest?coordinates=${latitude},${longitude}`;
	const airQuality_response = await fetch(airQuality_url);
	const airQuality_data = await airQuality_response.json();

	const data = {
		weather: weather_data,
		air_quality: airQuality_data
	};

	res.json(data);
});