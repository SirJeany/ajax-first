'use strict';

const cityForm = document.getElementById('cityForm');
const cityInp = document.getElementById('cityInp');
const submitBtn = document.getElementById('submitBtn');
const weatherReport = document.getElementById('weatherReport');

// elements to display all the different weather properties:
let resultHeading = document.createElement('h3'); // City name
let description = document.createElement('p'); // Cloudy or clear
let temp = document.createElement('p'); // Temperature (received in Kelvin: so subtract 273.15 )
let windSpeed = document.createElement('p'); // Windspeed
let timezone = document.createElement('p'); // Timezone

let apiRequest = new XMLHttpRequest();


cityForm.addEventListener('submit', ($event) => {
    $event.preventDefault();

    const chosenCity = cityInp.value;

    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&appid=ad897ca0752a545d18557cce8eeacfad');

    apiRequest.send();

    // Add the information to the weather report section:
    // result.textContent = "HELLO " + apiRequest.responseText;
    // weatherReport.appendChild(result);
    
})

// Get the state change:
apiRequest.onreadystatechange = () => {
    if(apiRequest.readyState === 4){
        if(apiRequest.status === 404){
            weatherReport.removeChild(description);
            return resultHeading.textContent = "City not found";
        }

    }

    //For testing:
    console.log(JSON.parse(apiRequest.responseText));

    const response = JSON.parse(apiRequest.response);
    resultHeading.textContent = response.name + ':';
    description.textContent = 'Sky looks like ' + response.weather[0].description + '.';

    weatherReport.appendChild(resultHeading);
    weatherReport.appendChild(description);
};

