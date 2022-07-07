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

function registrerUser(){
    
    model.profiles.push({
        
            id: Math.floor(Math.random() * 1000),
            name: model.registerInput.name,
            password: model.registerInput.password,

            birthDay: model.registerInput.birthDay,
            place: model.registerInput.place,
            description: model.registerInput.description,
            status: model.registerInput.status,
            relationshipWith: null,
            friends:[],
            requests: [],
        
    })
    model.currentPage = '';
    show();
}