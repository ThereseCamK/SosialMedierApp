//logIn funtion to check if password and name is correct
function logIn(){
    for(let i = 0; i < model.profiles.length; i++){
        if(model.logInInputs.name == model.profiles[i].name &&
            model.logInInputs.password == model.profiles[i].password
            ){
                model.loggedInUser = model.profiles[i].id
            }
            
    }
    show();
}
//function to log out from your page
function logOut(){
    model.loggedInUser = null;
    model.content = '';
    model.logInInputs.name = '';
    model.logInInputs.password = '';
    show();
}