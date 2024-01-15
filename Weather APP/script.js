/*
function getweather(){
    const APIkey = '58040114f972c2467401bdae5f4add52';
    const city = document.getElementById('city').value;

    if(!city) {
        alert('Please Enter');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;

    fetch (currentWeatherUrl)
        .then(response => response.json())
        .then(data =>  {
            displayWeather(data);
    })
    .catch( error => {
        console.error('Error Fetching current weather:',error);
        alert('Error fetching current weather, Please try again.');
    });

    fetch (forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.list);
    })
    .catch( error => {
        console.error('Error Fetching Hourly Forecast:',error);
        alert('Error fetching Hourly Forecast, Please try again.');
    });
}

function displayWeather(data){
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfodiv = document.getElementById('weather-information');
    const weatherIcon = document.getElementById('weather-icon');
    const HourlyForecastDiv = document.getElementById('hourly-forecast');


    // to clear the precious weather information
    
    tempDivInfo.innerHTML = '';
    weatherInfodiv.innerHTML = '';
    HourlyForecastDiv.innerHTML = '';
    

    if (data.cod == '404'){
        weatherInfodiv.innerHTML = `<p>${data.message}</p>`;

    } else {

        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;  


        const temperatureHTML = `<p>${temperature} C</p>`;
        const weatherHTML = `
            <p>${cityName}</p>
            <p>${description}</p>
        `;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherIcon.scr = iconUrl;
        weatherInfodiv.innerHTML = weatherHTML;
        weatherIcon.alt = description;

        showImage();
    }

}

function displayHourlyForecast(hourlydata){
    const HourlyForecastDiv = document.getElementById(hourly-forecast);
    const next24hours = hourlydata.slice(0,8);

    next24hours.forEach (item => {
        const dateTime =  new Data(item.dt * 1000);
        const hour = dateTime.getHpurs();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHTML = `
        <div class="hourly-item">
            <span>${hour}:00</span>
            <img src="${iconUrl}" alt="Hourly weather icon">
            <span>${temperature} C</span>
    </div>
        `;
        HourlyForecastDiv.innerHTML += hourlyItemHTML
    });
}

function showImage(){
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display= 'block';
}

*/

function getWeather() {
    const apiKey = '58040114f972c2467401bdae5f4add52';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        });

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.list);
        })
        .catch(error => {
            console.error('Error fetching hourly forecast data:', error);
            alert('Error fetching hourly forecast data. Please try again.');
        });
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    // Clear previous content
    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML = `
            <p>${temperature}°C</p>
        `;

        const weatherHtml = `
            <p>${cityName}</p>
            <p>${description}</p>
        `;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    const next24Hours = hourlyData.slice(0, 8); // Display the next 24 hours (3-hour intervals)

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000); // Convert timestamp to milliseconds
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15); // Convert to Celsius
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°C</span>
            </div>
        `;

        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block'; // Make the image visible once it's loaded
}