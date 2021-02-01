//search
function displayWeatherCondition(response) {
  let iconElement = document.querySelector("#icon");
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML =
    response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed  );
    iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
}

function handleSubmit(event) {
  event.preventDefault();
  let apiKey = "50dffa1789574536f016b2bc3914e6d6";
  let city = document.querySelector("#city-input").value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
let cityForm = document.querySelector("#search-form");
console.log(cityForm);

cityForm.addEventListener("submit", handleSubmit);

