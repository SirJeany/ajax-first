'use strict';

let prom = false;

function cookiePromise() {
    return new Promise((resolve, reject) => {
        console.log('I promise cookies to the boy');
        
        if (prom){
            resolve('Nice! Cookiiiiies!');
        } else { 
            reject('You rat bastard!');
        }
    });
}

async function checkCookies() {
    try {
        let cookiePromises = await cookiePromise();
        console.log(cookiePromises);
        console.log('I delivered on the promise and the Boy is now happy');
    }
    catch {
        console.log('I didn\'t bring the cooks... Boy is angry.');
    }
}

checkCookies();