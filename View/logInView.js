//view function to login page if not nogged in
function logInView(){
    let html = `
    <h2 class="logInHeadLine">Logg inn for å se dine venner eller få venner</h2>

    <div class="logInDiv">
    <input class="logInInput" type="text" oninput="model.logInInputs.name = this.value" value="Navn"><br>
    <input class="logInInput" type="text" oninput="model.logInInputs.password = this.value" value="Passord"><br>
    <button class="logInButton" onclick="logIn()">Logg inn</button>
    </div>
    `
    return html;

}