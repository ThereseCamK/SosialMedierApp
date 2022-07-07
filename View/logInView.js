//view function to login page if not nogged in
function logInView(){
    let html = `
    <h2 class="logInHeadLine">Logg inn for å se dine venner eller få venner</h2>

    <div class="logInDiv">
    <input class="logInInput" type="text" oninput="model.logInInputs.name = this.value" value="Navn"><br>
    <input class="logInInput" type="text" oninput="model.logInInputs.password = this.value" value="Passord"><br>
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
    <input class="logInInput" type="text" oninput="model.registerInput.name = this.value" value="Navn"><br>
    <input class="logInInput" type="text" oninput="model.registerInput.password = this.value" value="Passord"><br>
    <input class="logInInput" type="text" oninput="model.registerInput.confirmPassword = this.value" value="Bekreft"><br>
    <input class="logInInput" type="text" oninput="model.registerInput.place = this.value" value="Sted"><br>
    <input class="logInInput" type="text" oninput="model.registerInput.birthDay = this.value" value="Bursdag"><br>
    <textarea class="logInInput" type="text" oninput="model.registerInput.description = this.value" >Beskrivelse</textarea><br>
    <input class="logInInput" type="text" oninput="model.registerInput.status = this.value" value="Sivil status"><br>
    
    <button class="regBTN" onclick="registrerUser()">Registrer</button>
    </div>
    
    `

    return html;

}