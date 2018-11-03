import axios from "axios";

const GET_USER = "GET_USER"
const GET_BLOG = "GET_BLOG"

export function getUser(){
    return {
        type: GET_USER,
        payload: axios.get('/api/user').then( res => {
            return res.data
        })
    }
}

export function getBlog(){
    return {
        type: GET_BLOG,
        payload: axios.get('/api/blog').then( res => {
            console.log(res.data)
            return res.data
        })
    }
}

const initialState = {
    user: [],
    blogPost: []
}


export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_USER + "_FULFILLED":
            return { 
                ...state, 
                user: action.payload
            };

        case GET_BLOG + "_FULFILLED":
            return {
                ...state,
                blogPost: action.payload
            }
        default:
        return state;
    }
}