'use strict';

const cityForm = document.getElementById('cityForm');
const cityInp = document.getElementById('cityInp');
const submitBtn = document.getElementById('submitBtn');
const weaterReport = document.getElementById('weaterReport');

// let result = document.createElement('p');

let apiRequest = new XMLHttpRequest();


cityForm.addEventListener('submit', ($event) => {
    $event.preventDefault();

    const chosenCity = cityInp.value;
    // result.textContent = chosenCity;

    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&appid=ad897ca0752a545d18557cce8eeacfad');

    apiRequest.send();

    weaterReport.textContent = "HELLO " + apiRequest.responseText;
    // return apiRequest;
})