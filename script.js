const cityInput = document.getElementById("cityInput");
 const cityName = document.getElementById("cityname");
 const temperature = document.getElementById("temperature");
 const condition = document.getElementById("condition");
 const humidity = document.getElementById("humidity");
 const wind = document.getElementById("wind");
 const searchBtn = document.getElementById("searchBtn");


 const API_Key = "bdf2e6c8ef7fc9790e4214841aebc61d";


 async function getWeather(){
  const city = cityInput.value;
  const API_URL  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch("APi_URL");
const data = await response.json;

cityName.textContent = data.name;
temperature.textContent = data.temperature + "°C";
condition.textContent = data.description;
humidity.textContent = data.humidity + '%';
wind.textContent = data.wind + "m/s";

 }

 searchBtn.addEventListener("click", getWeather);







 
 