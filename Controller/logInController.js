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
    if(model.registerInput.name && model.registerInput.place != '' && model.registerInput.password === model.registerInput.confirmPassword){

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
    
            emptyFieldsInRegistrer();
    }
    else{
        alert('Du mangler å fylle inn * ')
    }

    show();
}

function emptyFieldsInRegistrer() {
    model.currentPage = '';
    model.registerInput.name = '';
    model.registerInput.password = '';
    model.registerInput.confirmPassword = '';
    model.registerInput.birthDay = '';
    model.registerInput.place = '';

    model.registerInput.description = '';
    model.registerInput.status = '';
}
