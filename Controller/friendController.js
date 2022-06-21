

function showFriends(){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    model.content = '';
    let html = '';
    loggedIn.friends.forEach(element => {
        // element er id til vennene
           let friendsOfLoggedInUser = model.profiles.find(friendId => friendId.id == element)
               html += `<div class="friendCard"> Navn: ${friendsOfLoggedInUser.name}<br>
               ${friendsOfLoggedInUser.place}<button onclick="removeFriend(${friendsOfLoggedInUser.id}, 'friends')">x</button></div>
               `
       });
       model.content = html;
       show();
}

function removeFriend(friendId, view){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    let loggedInIndex = loggedIn.friends.indexOf(loggedIn.id)
    let friendIndex = loggedIn.friends.indexOf(friendId);    
    let friend = model.profiles.find(f => f.id ==friendId)

    friend.friends.splice(loggedInIndex, 1)
    loggedIn.friends.splice(friendIndex, 1);

    
    if(view == 'friends'){
        showFriends();
    }
    if(view == 'all'){
        showAll()
    }
  
    
}

function sendRequest(idOfuserAceptRequest, idOfUserSendRequest ){
    let addedFriend = model.profiles.find(i => i.id == idOfuserAceptRequest );
      addedFriend.requests.push(idOfUserSendRequest);
      console.log(idOfUserSendRequest, 'id til sendt ');
      console.log(idOfuserAceptRequest, 'id til den som må aksepte');
      showAll();
  }
  
  function accpectRequest(newFriend, index){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    let friendRecivedrequest=  model.profiles.find(f => f.id == newFriend);
      loggedIn.requests.splice(index,1)
      loggedIn.friends.push(newFriend);
      friendRecivedrequest.friends.push(loggedIn.id)
      console.log(newFriend, ' hva er newfriend')
      showRequests();
  }
  function decline(index){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
      loggedIn.requests.splice(index,1);
      showRequests();
  }
  
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

function removeRequest(userId){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    let findUser = model.profiles.find(u => u.id == userId);
    let findIndex = findUser.requests.indexOf(loggedIn.id);
    findUser.requests.splice(findIndex, 1);
    showAll()

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
