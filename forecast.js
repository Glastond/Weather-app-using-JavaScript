const key = 'L9zIU9jtPDXnt0mrGKwx6GgRQnMKVWOJ'
// you make total two resquests to Accuwheather.com
// First to get the region or city key.
// Second to get the actual weather condition of the above city.


const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    // Query parameter in the URL contains two required things apiKey and the q (ie. The City Name)
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    var info = await response.json();

    return info[0];
}

// async function always returns a Promise.
// Get City info (key code)
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    // Query parameter in the URL contains two required things apiKey and the q (ie. The City Name)
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    var data = await response.json();
    return data[0];
}

// // Returns a Promise
// getCity('mumbai')
//     // .then method runs when the Promise is resolved.
//     .then(data => {
//         return getWeather(data.Key);
//     }).then(info => {
//         console.log(info);
//     })
//     // .catch method runs when a Promise has an Error.
//     .catch(err => console.log(err));