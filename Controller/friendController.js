

function showFriends(){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    model.content = '';
    let html = '';
    loggedIn.friends.forEach(element => {
        // element er id til vennene
           let friendsOfLoggedInUser = model.profiles.find(friendId => friendId.id == element)
               html += `<div class="friendCard"> Navn: ${friendsOfLoggedInUser.name}<br>
               ${friendsOfLoggedInUser.place}<button onclick="removeFriend(${friendsOfLoggedInUser.id})">x</button></div>
               `
       });
       model.content = html;
       show();
}

function removeFriend(friendId){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser); 
    let friendIndex = loggedIn.friends.indexOf(friendId);
    loggedIn.friends.splice(friendIndex, 1);
    
    showFriends();
    
}