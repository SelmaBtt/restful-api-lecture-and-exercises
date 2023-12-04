fetchAllPuns();

async function fetchAllPuns() {
    try {
        const response = await fetch('https://pun-api.up.railway.app/puns');
        const puns = await response.json();

        let punsListHTML = "";
        for (let pun of puns) {
            let punDate = new Date(pun.date)

            punsListHTML += `
                <li class="list-group-item">
                    <p>${pun.content} <br> <span class="date">- ${punDate.getFullYear()}-${punDate.getMonth()+1}-${punDate.getDate()} ${punDate.toLocaleTimeString()}</span> </p>
                    
                    <div>
                        <a href="update-pun.html">Update</a> |
                        <a href="#" data-id="${pun._id}">Delete</a> 
                    </div>
                </li>
            `
        }

        document.getElementById('pun-list').innerHTML = punsListHTML;
    } catch(error) {
        console.log(error)
    }   


    /**
     * Add here an eventlistener to all delete-links, 
     * that makes a request to delete the chosen pun from DB, 
     * And also deletes the pun from the DOM
     * 
     * 1. Begin with selecting all delete-links with an appropiate element selector
     * 2. Loop through all delete-links and add an eventlistener for each delete-link,
     * 3. The eventlisteners should be triggered on the 'click'-event
     * 4. Make sure to use preventDefault(), to prevent the link from reloading the page
     * 5. When triggered, the eventlistener should make a "DELETE" request to the URL: https://pun-api.up.railway.app/puns/<punID>, and the <punId> should be retrieved from delete-link data-attribute => 'e.target.dataset.id'
     * 6. Make sure to remove() the whole pun from DOM.
     */

}






































    
  





























    