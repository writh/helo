const initialState = {
    username: null,
    password: null,
    profile_pic: null,
   
}
const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'
const GET_INFO = 'GET_INFO'
const LOGOUT = "LOGOUT"

export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
        return Object.assign({}, state, {username: action.payload.username, password: action.payload.password, profile_pic: action.payload.profile_pic})

        case REGISTER:
        return Object.assign({}, state, {username: action.payload.username, password: action.payload.password, profile_pic: action.payload.profile_pic})
        
        case GET_INFO:
        return Object.assign({}, state, {username: action.payload.username, profile_pic:action.payload.profile_pic})

        case LOGOUT:
        return Object.assign({}, state, {username: action.payload.username, password: action.payload.password, profile_pic: action.payload.profile_pic})
        default: return state
    }
}

export function loginUser(user){
    return{
        type:LOGIN,
        payload: user
    }
}
export function registerUser(user){
    return{
        type: REGISTER,
        payload: user
    }
}
export function getUser(user){
    return{
        type: GET_INFO,
        payload: user
    }
}
export function logOut(){
    return{
        type: LOGOUT,
        payload: initialState
    }
}