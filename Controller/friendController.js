

function showFriends(){

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
 
    let friendIndex = loggedIn.friends.indexOf(friendId);
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
      loggedIn.requests.splice(index,1)
      loggedIn.friends.push(newFriend);
      showRequests();
  }
  function decline(index){
      loggedIn.requests.splice(index,1);
      show();
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
    let findUser = model.profiles.find(u => u.id == userId);
    let findIndex = findUser.requests.indexOf(loggedIn.id);
    findUser.requests.splice(findIndex, 1);
    showAll()

}