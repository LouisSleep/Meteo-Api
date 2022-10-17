
let weather = {
    // API Key from openweathermap
    apiKey: "API'S KEY",
    // Function that permit to fetch and collect all weather data
    fetchWeather: function (city) {
        fetch("https://api.weatherapi.com/v1/current.json?key=" + this.apiKey + "&q=" + city + "&aqi=no").then((response) => response.json()).then((data) => this.displayWeather(data));

    },
    // Function that permit to use all weather data
    displayWeather: function (data) {

        const { localtime, name, lon, lat, region } = data.location
        const { icon, text } = data.current.condition;
        const { temp_c, humidity, wind_kph } = data.current;


        document.querySelector('.date').innerHTML = localtime;

        document.querySelector('.city').innerHTML = 'Weather in ' + name;
        document.querySelector('.region').innerHTML = 'Region ' + region;

        document.querySelector('.temps').innerHTML = temp_c + "°C";

        document.querySelector('.description').innerHTML = text;

        document.querySelector('.humidity').innerHTML = "Humidity : " + humidity + "%";

        document.querySelector('.wind').innerHTML = "Wind Speed : " + wind_kph + " km/h";

        document.querySelector(".icon").src =
            icon

        // let body = document.querySelector('body')
        // body.style.cssText = 'background-image: url(https://source.unsplash.com/1600x900/?' + name + ');'

        document.querySelector('#latitude').innerHTML = "Latitude : " + lat + " °";

        document.querySelector('#longitude').innerHTML = "Longitude: " + lon + " °";
    },
    // take the search value from the search bar
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
}
// Click on search button to do a search
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

// Press Enter to do a search
document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

// get native latitude and longitude position
let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");







navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude;

    let long = position.coords.longitude;
    LocalCity.fetchCity(lat, long)
    latText.innerHTML = "Latitude : " + lat;
    longText.innerHTML = "Longitude : " + long;
});



let LocalCity = {

    // Function that permit to fetch and collect all weather data
    fetchCity: function (la, lon) {


        fetch("https://geo.api.gouv.fr/communes?lat=" + la
            + "&lon=" + lon + "&fields=code,nom,codesPostaux,surface,population,centre,contour").then((response) => response.json()).then((data) => this.displayCity(data));
    },
    // Starting city
    displayCity: function (data) {
        const { nom } = data[0];
        weather.fetchWeather(nom);
    },


}










