/**
 * Fetch here the specific pun that is about to be updated.
 * Prefill the textarea with the fetched pun content
 * 
 * 1. Begin with retrieving the punId from the queryString, check out window.location.search (google or console.log()) 
 * 2. Use the built-in JS Object 'URLSearchParams' to extract the queryString  => let urlParams = new URLSearchParams(window.location.search)
 * 3. Use urlParams to retrieve the punId like so => urlParams.get('id'); 
 * 4. Now you can fetch the specific pun by making a "GET" request to: https://pun-api.up.railway.app/puns/<punId>, where <punId> is the value of urlParams.get('id')
 * 5. Use the fetched pun data to prefill the textarea#content
 */

let textArea=document.getElementById('content-textarea')
let form=document.getElementById('update-pun-form')

fetchPunData()

function idPun(){
    try{
        let queryString=window.location.search //This is the id form the url
        console.log(queryString)
        let urlParams = new URLSearchParams(queryString) //Url id becomes a object
        console.log(urlParams)
        let punId=urlParams.get('id'); //För att komma åt det specifika värdet i URL:n
        console.log(punId)
        
        return punId;
    }catch(error){
        console.log("Error: "+error)
    }
}
async function fetchPunData(){
    let response=await fetch (`https://pun-api.up.railway.app/puns/${idPun()}`)//Lägger in pun ID:t i URL
    let punData=await response.json()
    console.log(punData)
    textArea.value=punData.content
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    fetch(`https://pun-api.up.railway.app/puns/${idPun()}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"content": textArea.value})
    })
    .then(()=>window.location.replace('index.html'))
    .catch((error) => console.log(error));
})

/**
 * Add here an eventlistener to update the pun, when the form is submitted
 * 
 * 1. Begin with selecting the form, and add an eventlistener on the form, that gets triggered with the 'submit'-event
 * 2. Make sure to use preventDefault(), to prevent the form from reloading the page
 * 3. Update the specific pun by making a "PATCH" request to: https://pun-api.up.railway.app/puns/<punId>, where <punId> is the value of urlParams.get('id')
 * 4. Make sure the formdata is sent in to the body parameter, when making the request. See how its done with the create pun request in create-pun.js
 * 5. If the form was successfully submitted, then redirect to the index.html with the following code: window.location.replace('index.html');
*/





// let serializeForm = function (form) {
//     var obj = {};
//     var formData = new FormData(form);
//     // console.log(formData.getAll());

//     for (var key of formData.keys()) {
//         let inputData = formData.getAll(key);

//         if (inputData.length > 1) {
//             obj[key] = inputData;
//         } else {
//             obj[key] = inputData[0];    
//         }
//     }
    
//     // console.log(obj);
//     return obj;
// };