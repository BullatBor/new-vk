import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import userReducer from "./usersReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    usersPage: userReducer,
    profilePage: profileReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store