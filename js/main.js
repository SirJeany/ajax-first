'use strict';

const cityForm = document.getElementById('cityForm');
const cityInp = document.getElementById('cityInp');
const submitBtn = document.getElementById('submitBtn');
const weatherReport = document.getElementById('weatherReport');

let resultHeading = document.createElement('h3');
let result = document.createElement('p');

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
            return resultHeading.textContent = "City not found";
        }

    }

    const response = JSON.parse(apiRequest.response);
    resultHeading.textContent = response.name + ':';
    result.textContent = 'Sky looks like: ' + response.weather[0].main;

    weatherReport.appendChild(resultHeading);
    weatherReport.appendChild(result);
};

