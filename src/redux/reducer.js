import axios from "axios";

const GET_ALL_USERZ = "GET_ALL_USERZ"
const GET_USER = "GET_USER"
const GET_BLOG = "GET_BLOG"
const GET_PRODUCTS = "GET_PRODUCTS"

export function getUser(){
    return {
        type: GET_USER,
        payload: axios.get('/api/user').then( res => {
            return res.data
        })
    }
}

export function getAllUserz(){
    return {
        type: GET_ALL_USERZ,
        payload: axios.get('/api/alluserz').then( res => {
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

export function getProducts(){
    return {
        type: GET_PRODUCTS,
        payload: axios.get('/api/store').then( res => {
            return res.data
        })
    }
}

const initialState = {
    user: [],
    blogPost: [],
    allUserz: [],
    products: []
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
            };

        case GET_ALL_USERZ + "_FULFILLED":
        return {
            ...state,
            allUserz: action.payload
        };

        case GET_PRODUCTS + "_FULFILLED":
        return {
            ...state,
            products: action.payload
        }

        default:
        return state;
    }
}