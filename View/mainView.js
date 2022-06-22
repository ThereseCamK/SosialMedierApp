
function show(){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    let html = '';
        if(model.loggedInUser == null ){
            html += logInView()
        }
        else {
            html = showLoggedinpage(html, loggedIn);
        }
    html += `<div>${model.content}</div>`

    appdiv.innerHTML = html;
}

//function that show the page when you ar logged in
function showLoggedinpage(html, loggedIn) {
    html += `<h1>Logget inn som: ${loggedIn.name}</h1>
            <button onclick="showFriends()"> vis venner</button>
            <button onclick="showAll()"> vis alle</button>
            <button onclick="showRequests()"> vis forespørsler </button>
            <button onclick="logOut()"> Log ut </button>
            `;
    return html;
}

 // show All profiles there is
 function showAll(){
    let html = '';
    model.content = '';
  
    model.profiles.map(u => html += `
            <div> Navn: ${u.name}<br>
            bosted: ${u.place}<br>
            bursdag: ${u.birthDay}</div>
            ${checkIfAlreadyFriend(u)}<hr>
         
        `
        );
    model.content = html;
    show();
}

//function to check if the profile is already on yout friend list, gives you option to add, delete or abort request that is pending
function checkIfAlreadyFriend(user){
   
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    let mapFriends = loggedIn.friends.map(u => u);
    let isfriend = '';
    console.log(loggedIn.id)
        if(user.requests.includes(loggedIn.id)){
            isfriend = `<button onclick="removeRequest(${user.id})"> avbryt </button>`
        }
            else if(loggedIn.id == user.id){
            isfriend = ' '
        }
        else if(mapFriends.includes(user.id)){
            isfriend = `<button onclick="removeFriend(${user.id}, 'all')">Fjern Venn</button>`;
        }
        else{
            // isfriend = `<button onclick="addFriend(${user.id})">Legg til venn</button>`;
            isfriend = `<button onclick="sendRequest(${user.id}, ${loggedIn.id})">Legg til venn</button>`;
        }
  return isfriend;

}






