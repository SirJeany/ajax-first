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
    resultHeading.textContent = chosenCity + ":";
    weatherReport.appendChild(resultHeading);

    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&appid=ad897ca0752a545d18557cce8eeacfad');

    apiRequest.send();

    // Add the information to the weather report section:
    result.textContent = "HELLO " + apiRequest.responseText;
    weatherReport.appendChild(result);
    
})