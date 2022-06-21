
 
const model = {
    loggedInUser: 11,
    content: '',

    profiles:[
        {
            id: 1,
            name: 'Therese',
            birthDay: '02.04.1990',
            place: 'Sandefjord',
            friends:[3, 10],
            requests: [],
        },
        {
            id: 2,
            name: 'Linn',
            birthDay: '28.02.1987',
            place: 'Larvik',
            friends:[1,3],
            requests: [10],
        },
        {
            id: 3,
            name: 'Bjørnar',
            birthDay: '15.08.1990',
            place: 'Tønsberg',
            friends:[2,1],
            requests: [11],
        },
        {
            id: 10,
            name: 'Tom Eirik',
            birthDay: '25.09.1990',
            place: 'Sandefjord',
            friends:[],
            requests: [11],
        },
        {
            id: 11,
            name: 'Aina',
            birthDay: '19.09.1970',
            place: 'Hekken',
            friends:[],
            requests: [2],
        },
    ],

}
let loggedIn = model.profiles.find(users => users.id == model.loggedInUser);
