import { combineReducers } from "@reduxjs/toolkit";
import applicationReducer from "./reducers/application-slice";

export default combineReducers({
    applications: applicationReducer,
})