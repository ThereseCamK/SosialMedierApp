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

    model.profiles.map(u => html += `
            <div> Navn: ${u.name}<br>
            bosted: ${u.place}</div><hr>
        `);
    model.content = html;
    show();
}

