
 
const model = {
    loggedInUser: 1,
    content: '',
    logInInputs:{
        name: '',
        password: ''

    },

    profiles:[
        {
            id: 1,
            name: 'Therese',
            password: '1234',
            birthDay: '02.04.1990',
            place: 'Sandefjord',
            friends:[3, 10],
            requests: [],
        },
        {
            id: 2,
            name: 'Linn',
            password: '1234',
            birthDay: '28.02.1987',
            place: 'Larvik',
            friends:[1,3],
            requests: [10],
        },
        {
            id: 3,
            name: 'Bjørnar',
            password: '1234',
            birthDay: '15.08.1990',
            place: 'Tønsberg',
            friends:[2,1],
            requests: [11],
        },
        {
            id: 4,
            name: 'Joakim',
            password: '1234',
            birthDay: '10.04.1993',
            place: 'Stavenger',
            friends:[],
            requests: [],
        },
        {
            id: 10,
            name: 'Tom Eirik',
            password: '1234',
            birthDay: '25.09.1990',
            place: 'Sandefjord',
            friends:[],
            requests: [11],
        },
        {
            id: 11,
            name: 'Aina',
            password: '1234',
            birthDay: '19.09.1970',
            place: 'Larvik',
            friends:[],
            requests: [2],
        },
    ],

}

