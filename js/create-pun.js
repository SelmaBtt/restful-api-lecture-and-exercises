document.getElementById('create-pun-form').addEventListener('submit', createPun);


async function createPun(e) {
  e.preventDefault();
  // let form = document.getElementById('create-pun-form');
  let form = e.target;


  try {

    /*
      {
        "content": "To the guy who invented zero, thanks for nothing."
      }
    */

    // Solution 1
    // let data = {"content": document.getElementById('content-textarea').value};


   
    // Solution 2
    let formData = new FormData(form)
    data = {"content": formData.get('content')};


    // Solution 3
    // data = serializeForm(form);
    // console.log(data);


    await fetch('https://pun-api.up.railway.app/puns', {
      method: "POST", // GET, POST, PATCH, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });


    location.replace('index.html');

  } catch(error) {
      console.log(error)
  } 
}



let serializeForm = function (form) {
    var obj = {};
    var formData = new FormData(form);
    // console.log(formData.getAll());

    for (var key of formData.keys()) {
        let inputData = formData.getAll(key);

        if (inputData.length > 1) {
            obj[key] = inputData;
        } else {
            obj[key] = inputData[0];    
        }
    }
    
    // console.log(obj);
    return obj;
};
