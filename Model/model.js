
 
const model = {
    loggedInUser:null,
    content: '',
    logInInputs:{
        name: '',
        password: ''

    },
    currentPage: '',
    registerInput:{
        name: '',
        password: '',
        confirmPassword:'',
        place: '',
        birthDay:'',
        description: '',
        status:'',
       
       
    },

    profiles:[
        {
            id: 1,
            name: 'Therese',
            password: '1234',
            birthDay: '02.04.1990',
            place: 'Sandefjord',
            description: 'Liker alt i fra strikking til leirdueskyting',
            status: 'i forhold',
            relationshipWith: 10,
            friends:[2, 3, 10, 4, 11],
            requests: [],
        },
        {
            id: 2,
            name: 'Linn',
            password: '1234',
            birthDay: '28.02.1987',
            place: 'Larvik',
            description: 'Liker å brenne ting, og fugler da',
            status: 'singel',
            relationshipWith: null,
            friends:[1,3,4,11],
            requests: [10],
        },
        {
            id: 3,
            name: 'Bjørnar',
            password: '1234',
            birthDay: '15.08.1990',
            place: 'Tønsberg',
            description: 'Liker katter',
            status: 'i forhold',
            relationshipWith: null,
            friends:[2,1,4],
            requests: [11],
        },
        {
            id: 4,
            name: 'Joakim',
            password: '1234',
            birthDay: '10.04.1993',
            place: 'Stavenger',
            description: 'Liker å spille freesbee golf',
            status: 'i forhold',
            relationshipWith: null,
            friends:[2,3,1],
            requests: [],
        },
        {
            id: 10,
            name: 'Tom Eirik',
            password: '1234',
            birthDay: '25.09.1990',
            place: 'Sandefjord',
            description: 'Liker å spille med kompiser',
            status: 'i forhold',
            relationshipWith: 1,
            friends:[1],
            requests: [11],
        },
        {
            id: 11,
            name: 'Aina',
            password: '1234',
            birthDay: '19.09.1970',
            place: 'Larvik',
            description: 'Liker å vakse og hjelpe de gamle',
            status: 'i forhold',
            relationshipWith: null,
            friends:[2,1],
            requests: [],
        },
    ],

}

