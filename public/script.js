const operation = () => {
	const latitude = document.getElementById('latitude');
	const longitude = document.getElementById('longitude');
	const summary = document.getElementById('summary');
	const temperature = document.getElementById('temp');
	const airReading = document.getElementById('airReading');
	const errMsg = document.getElementById('errMsg');
	const aq_parameter = document.getElementById('aq_parameter');
	const aq_value = document.getElementById('aq_value');
	const aq_units = document.getElementById('aq_units');
	const aq_date = document.getElementById('aq_date');

	if ("geolocation" in navigator) {
	  	navigator.geolocation.getCurrentPosition(async position => {
	  		let lat, lon, weather, air;
	  		try {
		  		lat = position.coords.latitude;
		  		lon = position.coords.longitude;
					  		
		  		latitude.textContent = lat.toFixed(2);
		  		longitude.textContent = lon.toFixed(2);
					
		  		const api_url = `/weather/${lat},${lon}`;
		  		const response = await fetch(api_url);
		  		const data = await response.json();
		  				  		
		  		weather = data.weather.currently;
		  		air = data.air_quality.results[0].measurements[0];

		  		summary.textContent = weather.summary;
		  		temperature.textContent = weather.temperature;
		  		aq_parameter.textContent = air.parameter;
		  		aq_value.textContent = air.value;
		  		aq_units.textContent = air.unit;
		  		aq_date.textContent = air.lastUpdated;

		  		

		  	} catch(error) {
		  		airReading.style.display = 'none';
		  		errMsg.style.display = 'inline';
		  		air = { value: -1 };
		  	}

		  	const submitData = { lat, lon, weather, air };
		  	const options = {
		  		method: 'POST',
		  		headers: {
		  			'Content-Type': 'application/json'
		  		},
		  		body: JSON.stringify(submitData)
		  	};
		  	const data_response = await fetch('/api', options);
		  	const json_data = await data_response.json();  		
		});
	}

}

operation();