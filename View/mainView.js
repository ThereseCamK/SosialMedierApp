function show(){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    let html = '';
        if(model.loggedInUser == null ){
            html += logInView()
        }
        else {
            html += `<h1>Logget inn som: ${loggedIn.name}</h1>
            <button onclick="showFriends()"> vis venner</button>
            <button onclick="showAll()"> vis alle</button>
            <button onclick="showRequests()"> vis forespørsler </button>
            <button onclick="logOut()"> Log ut </button>
            `;
        }
        
  
    // html = checkForfriendRequests(html);

    html += `<div>${model.content}</div>`

    document.getElementById('app').innerHTML = html;
}
function logOut(){
    model.loggedInUser = null;
    model.content = '';
    show()
}

function logInView(){
    let html = `
    <input type="text" oninput="model.logInInputs.name = this.value">
    <input type="text" oninput="model.logInInputs.password = this.value">
    <button onclick="logIn()">Log in</button>
    `
    return html;

}
function logIn(){
    for(let i = 0; i < model.profiles.length; i++){
        if(model.logInInputs.name == model.profiles[i].name &&
            model.logInInputs.password == model.profiles[i].password
            ){
                model.loggedInUser = model.profiles[i].id
            }
            
    }
    show();
}

function showRequests(){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    model.content = '';
    let html = '';
    if (loggedIn.requests != '') {
        for (let i = 0; i < loggedIn.requests.length; i++) {
            for (let j = 0; j < model.profiles.length; j++) {
                if (loggedIn.requests[i] == model.profiles[j].id) {
                    html += `<hr>${model.profiles[j].name} har sendt venneforespørsel<br>
                    <button onclick="accpectRequest(${model.profiles[j].id}, ${i})"> godta</button> 
                    <button onclick="decline(${i})"> avslå</button>`;
                }
            }
        }


    }
    model.content = html;
    show()

}


function checkForfriendRequests(html) {
   
    return html;
}

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






