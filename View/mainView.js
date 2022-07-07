
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

//funskjon for å vise venner
function showFriends(){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    model.content = '';
    let html = '';
    loggedIn.friends.forEach(element => {
        // element er id til vennene
           let friendsOfLoggedInUser = model.profiles.find(friendId => friendId.id == element)
               html += `<div class="friendCard"> 
                <p>${friendsOfLoggedInUser.name}</p>
                <p>${friendsOfLoggedInUser.place}</p>
                <p>test informasjon</p>
                <button class="friendsButton" onclick="removeFriend(${friendsOfLoggedInUser.id}, 'friends')">
                Fjern Venn</button>
               </div>
               `
       });
       model.content = html;
    show();
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

//shows freindrequests, gives you option to decline or accept
function showRequests(){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    model.content = '';
    let html = '';
    if (loggedIn.requests != '') {
        for (let i = 0; i < loggedIn.requests.length; i++) {
            for (let j = 0; j < model.profiles.length; j++) {
                html = acceptOrDeclineRequest(loggedIn, i, j, html);
            }
        }
    }
    model.content = html;
    show()

}

function acceptOrDeclineRequest(loggedIn, i, j, html) {

    if (loggedIn.requests[i] == model.profiles[j].id) {
        html += `<div class="friendrequestName"> <div onclick="showOneProfile(${j},${i})">${model.profiles[j].name} har sendt venneforespørsel</div><br>
                    <button class="friendButton"  onclick="accpectRequest(${model.profiles[j].id}, ${i})"> godta</button> 
                    <button class="friendButton"  onclick="decline(${i})"> avslå</button></div>`;
    }
    return html;
}

function showOneProfile(j, i){
    let html = '';
   html += `<div> 
   <p>Navn:${model.profiles[j].name}<p> 
   <p>Bursdag:${model.profiles[j].birthDay}<p> 
   <p>Bosted:${model.profiles[j].place}<p> 
   <p>Venner til felles ${checkFriendsInCommon(j)} <p> 
   <button class="friendButton"  onclick="accpectRequest(${model.profiles[j].id}, ${i})"> godta</button> 
   <button class="friendButton"  onclick="decline(${i})"> avslå</button></div>
   </div>`
   model.content = html;
   show();

}

function checkFriendsInCommon( j){
    console.log(j,' check')
    let html = ''
    let loggedIn2 = model.profiles.find(users => users.id == model.loggedInUser);
    let loggedInFriends = loggedIn2.friends.map(f=> f);
    for(let i = 0; i< loggedInFriends.length; i++){
        if(model.profiles[j].friends.includes(loggedInFriends[i])){
            
           html += showNameOfCommonFriend(loggedInFriends[i], j)
        }
    }
   
    return html

    


}

function showNameOfCommonFriend(commonFriendID, j){
    
    console.log(commonFriendID)
  
    let html = ''
    let friendIndex = model.profiles.find(p => p.id == commonFriendID)
    html += `<div onclick="showProfile(${friendIndex.id}, ${j})"> ${friendIndex.name}</div> `
   return html
}

function showProfile(userID, j){
    let html = ''
    let profile = model.profiles.find(f => f.id == userID)
    html += `<h3 onclick="showOneProfile(${j})">Tilbake</h3><div>${profile.name}</div>`
    model.content = html;
    show()
}










