function show(){
    let html = '';

    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);

    html += `<h1>Logget inn som: ${loggedIn.name}</h1>`;


    loggedIn.friends.forEach(element => {
     // element er id til vennene
        let friendsOfLoggedInUser = model.profiles.find(friendId => friendId.id == element)
       
    
            html += `<div class="friendCard"> Navn: ${friendsOfLoggedInUser.name}<br><button onclick="removeFriend(${friendsOfLoggedInUser.id})">x</button></div>
            `
        
   
    });

  
    // html += ``

    document.getElementById('app').innerHTML = html;
}

function removeFriend(friendId){
  
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser); 
    // let removeuser = loggedIn.friends.find(users => users == friendId);
    let friendIndex = loggedIn.friends.indexOf(friendId);
    loggedIn.friends.splice(friendIndex , 1);
    
        show();
    
}