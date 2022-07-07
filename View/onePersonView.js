function showOneProfile(j, ){
    let html = '';
   html += `<div> 
   <p>Navn: ${model.profiles[j].name}<p> 
   <p>Bursdag: ${model.profiles[j].birthDay}<p> 
   <p>Bosted: ${model.profiles[j].place}<p> 
   <div><p>Venner: ${showFriendsOFOtherPersons(model.profiles[j])} <p> </div>
   </div>`
   model.content = html;
   show();
}

function showFriendsOFOtherPersons(profileObject){
    let html = '';
    let indexOFFriend = model.profiles.indexOf(profileObject)
   console.log(indexOFFriend, ' friends')
   for(let i = 0; i < model.profiles[indexOFFriend].friends.length; i++)
    {
      html +=  showInfoOFFriend( model.profiles[indexOFFriend].friends[i])
    }
    return html;
}
function showInfoOFFriend( indexfriend){
    let html = ''
    let friend = model.profiles.find(f => f.id == indexfriend);
    let friendIndex = model.profiles.indexOf(friend)
    if(friend.id != model.loggedInUser){
        html += `<div class="allDiv" onclick="showOneProfile(${friendIndex})">
        <p> ${friend.name} </p>${checkIfAlreadyFriend(friend)}</div>`
    }


    return html

}