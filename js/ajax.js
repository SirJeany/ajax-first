'use strict';

let approval = 'Not Approved';

const result = document.getElementById('result');

function getApproval() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('Approved');
            reject('Nope');
        }, 2000);
    })
}

getApproval().then(
    (resolvedApproval) => {
    result.textContent = resolvedApproval;
});

getApproval().catch(
    (rejected) => {
        result.textContent = rejected;
    }
);

result.textContent = approval;