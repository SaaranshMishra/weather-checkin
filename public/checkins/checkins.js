const mymap = L.map('checkinMap').setView([0, 0], 1.6);
const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

const getData = async () => {
	const response = await fetch('/api');
	const data = await response.json();

	data.forEach(item => {
		const marker = L.marker([item.lat, item.lon]).addTo(mymap);
		let text = `The weather at latitude: ${item.lat} and longitude: ${item.lon} is ${item.weather.summary} with a temperature of ${item.weather.temperature} C.`;

		if (item.air.value < 0) {
			text += ' No air quality reading'
		} else {
			text += ` The concentration of particulate matter (${item.air.parameter}) is ${item.air.value} ${item.air.unit} (last measured on ${item.air.lastUpdated}).`
		}

		marker.bindPopup(text);
	});
}

getData();