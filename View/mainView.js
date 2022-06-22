
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
    html += `<h2 class="loggedInName">${loggedIn.name}</h2>
    <div class="menuDiv">
            <button class="menuButton" onclick="showFriends()"> Venner</button>
            <button class="menuButton" onclick="showAll()"> Alle</button>
            <button class="menuButton" onclick="showRequests()"> Forespørsler </button>
            <button class="menuButton" onclick="logOut()"> Logg ut </button>
            </div>
            <hr>
            
            `;
    return html;
}

 // show All profiles there is
 function showAll(){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    let html = '';
    model.content = '';
   let allButNotU =  model.profiles.filter(p => loggedIn.id != p.id);


   allButNotU.map(u => 
        html +=  `
            <div class="allDiv" onclick="selectPerson(${u})"> ${u.name}<br>
                ${checkIfAlreadyFriend(u)}
            </div>
         
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
            isfriend = `<button class="friendButton" onclick="removeRequest(${user.id})"> avbryt </button>`
        }
            else if(loggedIn.id == user.id){
            isfriend = ' '
        }
        else if(mapFriends.includes(user.id)){
            isfriend = `<button class="friendButton"  onclick="removeFriend(${user.id}, 'all')">Fjern Venn</button>`;
        }
        else{
            // isfriend = `<button onclick="addFriend(${user.id})">Legg til venn</button>`;
            isfriend = `<button class="friendButton"  onclick="sendRequest(${user.id}, ${loggedIn.id})">Legg til venn</button>`;
        }
  return isfriend;

}






