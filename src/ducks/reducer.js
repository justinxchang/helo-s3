const initialState = {
    username: '',
    profile: '',
    userId: 0,
    user: {}
}

const USER_NAME = 'USER_NAME'
const PROFILE = 'PROFILE'
const USER_ID = 'USER_ID'
const USER = 'USER'

export function updateUsername(username){
    return {
        type: USER_NAME,
        payload: username
    }
}

export function updateProfile(profile){
    return {
        type: PROFILE,
        payload: profile
    }
}

export function updateUserId(userId){
    return {
        type: USER_ID,
        payload: userId
    }
}

export function updateUser(username, profile, userId){
    return {
        type: USER,
        payload: {
            username,
            profile,
            userId
        }
    }
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case USER_NAME:
            return {...state, username: action.payload}
        case PROFILE:
            return {...state, profile: action.payload}
        case USER_ID:
            return {...state, userId: action.payload}
        case USER:
            return {...state, user: action.payload}

        default:
            return state;
    }

}