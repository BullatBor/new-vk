import { profileAPI } from "../api/api"

const SET_PROFILE_VISIBLE = "usersReducer/SET_PROFILE_VISIBLE"
const SET_PROFILE_INFO = "usersReducer/SET_PROFILE_INFO"


let initialState = {
    posts: [
        { id: 1, message: "sdfsdfsefsef", likesCount: 12 },
        { id: 2, message: "sdfsdfsefsef", likesCount: 12 },
        { id: 3, message: "sdfsdfsefsef", likesCount: 12 }
    ],
    profile: null,
    isFetching: true,
    AvatarImg: "https://atmstudio.su/d/warcraft-arthas-collectors-2_10.jpg",
    status: "",
    profileVisible: false
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_VISIBLE:{
            return {
                ...state,
                profileVisible: action.isVisible
            }
        }
        case SET_PROFILE_INFO:{
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}


export const setProfileVisible = (isVisible) => {
    return {
        type: SET_PROFILE_VISIBLE,
        isVisible
    }
}

export const setProfileInfo = (profile) => {
    return {
        type: SET_PROFILE_INFO,
        profile
    }
}

export const getProfileInfoThunkCreator = (userId = 1) => {
    return (dispatch) => {
        profileAPI.getProfileInfo(userId).then(data => {
            debugger
            dispatch(setProfileInfo(data))
        })
    }
}


export default profileReducer;