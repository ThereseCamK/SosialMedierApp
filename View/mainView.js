function show(){
    let html = '';

    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    html += `<h1>Logget inn som: ${loggedIn.name}</h1>
    <button onclick="showFriends()"> vis venner</button>
    <button onclick="showAll()"> vis alle</button>
    `;

    html += `<div>${model.content}</div>`

    document.getElementById('app').innerHTML = html;
}

function showAll(){
    let html = '';
    model.content = '';
    // let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    // let friends = model.profiles.map(u => u.name);
    // let friendOfUser = loggedIn.friends.map(f => f.name);
    // let f = friends;
    // console.log(f)
    // let isfriend = '';
    // if(loggedIn.friends.includes(f)){
    //     isfriend = true;
    // }
    // else{
    //     isfriend = false;
    // }
    

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

function checkIfAlreadyFriend(user){
    let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
    let mapFriends = loggedIn.friends.map(u => u);
    let isfriend = '';
        if(loggedIn.id == user.id){
            isfriend = 'meg selv'
        }
        else if(mapFriends.includes(user.id)){
            isfriend = 'Venner';
        }
        else{
            isfriend = 'Legg til';
        }
  return isfriend;

}

