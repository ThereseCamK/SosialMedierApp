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
        console.log(model.profiles[j].id, 'Det som blir sendt med fra acceptOrdecline = id til den som har sendt forespørsel')
        html += `<div class="friendrequestName"> <div onclick="showOneProfile(${j})">${model.profiles[j].name} har sendt venneforespørsel</div><br>
                    <button class="friendButton"  onclick="accpectRequest(${model.profiles[j].id}, ${i}, 'request')"> godta</button> 
                    <button class="friendButton"  onclick="decline(${i},'request')"> avslå</button></div>`;
    }
    return html;
}