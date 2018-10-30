import axios from "axios";

const GET_USER = "GET_USER"

export function getUser(){
    return {
        type: GET_USER,
        payload: axios.get('/api/user').then( res => {
            return res.data
        })
    }
}

const initialState = {
    user: [],
    // blogPost: []
}


export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_USER + "_FULFILLED":
            return { 
                ...state, 
                user: action.payload
            };

        // case GET_BLOGS:
        //     return {
        //         ...state,
        //         blogPost: action.payload
        //     }
        default:
        return state;
    }
}