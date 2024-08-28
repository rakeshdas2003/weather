


let inputBox = document.querySelector(".input-box");
let searchBox = document.querySelector("#search-box");
let weatherImg = document.querySelector(".weather-img");
let temperature = document.querySelector(".temperatur");
let description = document.querySelector(".desperction");
let humidity = document.getElementById("humandity");
let windSpeed = document.getElementById("wind-speed"); 

async function checkWeather(city) {  
    let api_key = "4933d93b74a1ae13a65f1a30db6ae009";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    
    let weather_data = await fetch(url).then(response => response.json());
    
    if(weather_data.cod ===`404`){
        console.log("Error");
        return;
    }



    temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
    description.innerHTML =  `${(weather_data.weather[0].description)}`;
    humidity.innerHTML =  `${(weather_data.main.humidity)}%`;
    windSpeed.innerHTML =  `${(weather_data.wind.speed)}Km/H`;
    
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherImg .src ="img/cloud.png" ;
            break;
        case 'Clear':
            weatherImg .src ="img/sun.png" ;
            break;
        case 'Rain':
            weatherImg .src ="img/rain.png" ;
            break;
        case 'Snow':
            weatherImg .src ="img/snow.jpg" ;
            break;
        case 'Mist':
            weatherImg .src ="img/mist.png" ;
            break;
    }
    
}

searchBox.addEventListener('click', () => {
    checkWeather(inputBox.value);
});

