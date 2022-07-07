






//controller function to send a friend request and det user get a request to decline og accept
function sendRequest(idOfuserAceptRequest, idOfUserSendRequest ){
    let addedFriend = model.profiles.find(i => i.id == idOfuserAceptRequest );
      addedFriend.requests.push(idOfUserSendRequest);
      console.log(idOfUserSendRequest, 'id til sendt ');
      console.log(idOfuserAceptRequest, 'id til den som må aksepte');
      showAll();
  }
  
  //controller function to accept a friend request
  function accpectRequest(newFriend, index){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    let friendRecivedrequest=  model.profiles.find(f => f.id == newFriend);
      loggedIn.requests.splice(index,1)
      loggedIn.friends.push(newFriend);
      friendRecivedrequest.friends.push(loggedIn.id)
      console.log(newFriend, ' hva er newfriend')
      showRequests();
  }

  //controller function to decline a friend request
  function decline(index){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
      loggedIn.requests.splice(index,1);
      showRequests();
  }

  //controller function to remove a friend from your friend list and you from her/his friend list at the same time

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


 
// function to remove a already pendig friendrequest you have sent
function removeRequest(userId){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    let findUser = model.profiles.find(u => u.id == userId);
    let findIndex = findUser.requests.indexOf(loggedIn.id);
    findUser.requests.splice(findIndex, 1);
    showAll()

}





