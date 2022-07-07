// show All profiles there is
function showAll(){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    let html = '';
    model.content = '';
   let allButNotU =  model.profiles.filter(p => loggedIn.id != p.id);
  

   allButNotU.map(u => 

        html +=  `
            <div class="allDiv" onclick="showOneProfile(${model.profiles.indexOf(u)})"> ${u.name}<br>
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
    let mapRequests = loggedIn.requests.map(f =>f);
    let i = mapRequests.indexOf(user.id);
    let isfriend = '';

    if(user.requests.includes(loggedIn.id)){
        isfriend = `<button class="friendsButton" onclick="removeRequest(${user.id})"> avbryt </button>`
    }
        else if(loggedIn.id == user.id){
        isfriend = ' '
    }
    else if(mapFriends.includes(user.id)){
        isfriend = `<button class="friendsButton"  onclick="removeFriend(${user.id}, 'all')">Fjern Venn</button>`;
    }
       else if(mapRequests.includes(user.id)){
    
            isfriend = 
            `
            <button class="friendButton" onclick="accpectRequest(${user.id}, ${i}, 'all')"> godta</button> 
            <button class="friendButton" onclick="decline(${i}, 'all')"> avslå</button></div>`
        }
    else{
        // isfriend = `<button onclick="addFriend(${user.id})">Legg til venn</button>`;
        isfriend = `<button class="friendsButton"  onclick="sendRequest(${user.id}, ${loggedIn.id})">Legg til venn</button>`;
    }
return isfriend;

}