//view function to login page if not nogged in
function logInView(){
    let html = `
    <h2 class="logInHeadLine">Logg inn for å se dine venner eller få venner</h2>

    <div class="logInDiv">
    <input class="logInInput" type="text" oninput="model.logInInputs.name = this.value" placeholder="Navn"><br>
    <input class="logInInput" type="text" oninput="model.logInInputs.password = this.value" placeholder="Passord"><br>
    <button class="logInButton" onclick="logIn()">Logg inn</button><br>
    <tt>Ikke bruker? registrer deg her! </tt><br>
    <button class="regBTN" onclick="registrerpage()">Registrer</button>
    </div>
    
    `

    return html;

}
function registrerpage(){
    model.currentPage = 'register';
    show();
}

function registrer(){
    let html = '';
     html = `
    <h2 class="logInHeadLine">Registrer Deg her!</h2>

    <div class="logInDiv">
    <input class="logInInput" type="text" value="${model.registerInput.name}"
    oninput="model.registerInput.name = this.value" placeholder="Navn"><br>

    <input class="logInInput" type="text" value="${model.registerInput.password}"
    oninput="model.registerInput.password = this.value" placeholder="Passord"><br>

    <input class="logInInput" type="text" value="${model.registerInput.confirmPassword}"
    oninput="model.registerInput.confirmPassword = this.value" placeholder="Bekreft"><br>

    <input class="logInInput" type="text" value="${model.registerInput.place}"
    oninput="model.registerInput.place = this.value" placeholder="Sted"><br>

    <input class="logInInput" type="text" value="${model.registerInput.birthDay}"
    oninput="model.registerInput.birthDay = this.value" placeholder="Bursdag"><br>

    <textarea class="logInInput" type="text" value="${model.registerInput.decription}"
     oninput="model.registerInput.description = this.description" placeholder="Beskrivelse"></textarea><br>

    <input class="logInInput" type="text" value="${model.registerInput.status}"
    oninput="model.registerInput.status = this.value" placeholder="Sivil status"><br>
    
    <button class="regBTN" onclick="registrerUser()">Registrer</button>
    </div>
    
    `

    return html;

}