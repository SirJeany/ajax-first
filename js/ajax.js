'use strict';

let approval = 'Not Approved';

const result = document.getElementById('result');

result.textContent = 'Waiting....';

function getApproval() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('Approved');
            resolve('Approved!');
        }, 2000);
    })
}

// To replace the .then:
async function setApprovalText() {
    const approvalPromise = getApproval();
    result.textContent = await approvalPromise;
}

setApprovalText();

// getApproval().then(
//     (resolvedApproval) => {
//     result.textContent = resolvedApproval;
// });

// getApproval().catch(
//     (rejected) => {
//         result.textContent = rejected;
//     }
// );

// result.textContent = approval;

const submitBtn = document.getElementById('submitBtn');
const formResult = document.getElementById('formResult');
const titleInp = document.getElementById('title');
const contentText = document.getElementById('content');

// Some elements that are dynamically added for displaying result:
const resultTitle = document.createElement('h2');
const resultContent = document.createElement('p');

// Stitch: 
formResult.appendChild(resultTitle);
formResult.appendChild(resultContent);


const api = 'https'; // Holds the response from post

submitBtn.addEventListener('click', ($event) => {
    $event.preventDefault();

    const post = {
        title: titleInp.value,
        content: contentText.value
    }

    submitFormData(post);
});

// Promise to post users stuff:
function makeRequest(data) {
    return new Promise((resolve, reject) =>{
        let request = new XMLHttpRequest();
        request.open('POST', api + '/create-post'); //CRUD - create read update delete
        
        request.onreadystatechange = () => {
            if(request.readyState === 4) {
                if(request.status === 201) {
                    resolve(JSON.parse(request.response));
                } else {
                    reject(JSON.parse(request.response));
                }
            }
        };
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(data));

        // if(title.value && content.value){ //If they are both filled
        //     resolve(title, content);
        // }
        // else {
        //     reject('Incorrect comment made');
        // }
    });
}



async function submitFormData(post) {
    try {
        const requestPromise = makeRequest(post);
        const response = await requestPromise;

        // Add responses to page:
        resultTitle.textContent = response.post.title;
        resultContent.textContent = response.post.content;

    } catch(errorResponse) {
        resultContent.classList.add('text-danger');
    }
    // const approvalPromise = makeRequest();
    // formResult.textContent = approvalPromise;
}

