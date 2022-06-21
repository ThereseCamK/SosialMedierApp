

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






