import { act } from "react-dom/test-utils";
import { profileAPI, usersAPI } from "../api/api";

const SET_USERS = "SET-USERS"
const SET_PROFILE_INFO = "SET_PROFILE_INFO"
const SET_FETCHING_TOOGLE = "SET_FETCHING_TOOGLE"

let initialState = {
    users: [
        { id: 1, name: "user1" },
        { id: 2, name: "user2" },
        { id: 3, name: "user3" },
        { id: 4, name: "user4" },
        { id: 5, name: "user5" },
        { id: 6, name: "user6" },
    ],
    userProfile: null,
    isFetching: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_PROFILE_INFO:
            return {
                ...state,
                userProfile: action.profile
            }
        case SET_FETCHING_TOOGLE:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

export const setUserInfo = (profile) => {
    return {
        type: SET_PROFILE_INFO,
        profile
    }
}
export const setFetching = (isFetching) => {
    return {
        type: SET_FETCHING_TOOGLE,
        isFetching
    }
}

export const getUserThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        //let promise =  UserAPI.getUsers(currentPage, pageSize)
        usersAPI.getUsers(currentPage, pageSize).then(data => {//запрос на сервер
            dispatch(setUsers(data.items))
        })
    }
}

export const getUserInfoThunkCreator = (userId = 1) => {
    return (dispatch) => {
        dispatch(setFetching(false));
        profileAPI.getProfileInfo(userId).then(data => {
            dispatch(setUserInfo(data));
            dispatch(setFetching(true))
        })
    }
}

export default userReducer;