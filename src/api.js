
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64b096485cmsh8b5cdd368a14bc0p131b2cjsn5b8daddbd498',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "http://api.openweathermap.org/data/2.5"

export const WEATHER_API_KEY = 'a9e630b58022603ea2850628da6bdad4';
//const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries';
/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/