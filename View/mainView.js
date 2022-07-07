
function show(){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    let html = '';
        if(model.loggedInUser == null ){
            html += logInView()
        if(model.currentPage == 'register'){
            html = registrer()
        }
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
                <p>${friendsOfLoggedInUser.description}</p>
                <button class="friendsButton" onclick="removeFriend(${friendsOfLoggedInUser.id}, 'friends')">
                Fjern Venn</button>
               </div>
               `
       });
       model.content = html;
    show();
}





// function checkFriendsInCommon( j){

//     let html = ''
//     let loggedIn2 = model.profiles.find(users => users.id == model.loggedInUser);
//     let loggedInFriends = loggedIn2.friends.map(f=> f);
//     for(let i = 0; i< loggedInFriends.length; i++){
//         if(model.profiles[j].friends.includes(loggedInFriends[i])){
            
//            html += showNameOfCommonFriend(loggedInFriends[i])
//         }
//     }
//     return html
// }

// function showNameOfCommonFriend(commonFriendID){
//     let html = ''
//     let friendIndex = model.profiles.find(p => p.id == commonFriendID);
//     let indexOFFriend = model.profiles.indexOf(friendIndex)

//     html += `
//         <div onclick="showOneProfile(${indexOFFriend})"> ${friendIndex.name}</div> `
//     //  html +=   checkIfAlreadyFriend(friendIndex) 
//    return html
// }











