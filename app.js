const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUi = (data) => {
    const cityDet = data.cityDet;
    const weather = data.weather;

    details.innerHTML = `<h5 class="my-3">${cityDet.EnglishName}</h5><div class="my-3">${weather.WeatherText}</div><div class="display-4 my-4"><span>${weather.Temperature.Metric.Value}</span><span>&deg;C</span></div>`;


    // Update night/day images and icons.

    var iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    var timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    }
    console.log(timeSrc);
    time.setAttribute('src', timeSrc);

    // remove d-none if present.
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

};

const updateCity = async (city) => {
    const cityDet = await getCity(city);
    const weather = await getWeather(cityDet.Key);
    return {
        cityDet,
        weather
    };
};

cityForm.addEventListener('submit', e => {
    // Prevent default action.
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    // Update ui with new city
    updateCity(city)
        .then(data => {
            updateUi(data);
        })
        .catch(err => console.log(err));
});