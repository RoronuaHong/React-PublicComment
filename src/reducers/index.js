import { combineReducers } from "redux";
import userinfo from "./userinfo";
import operation from "./operation";
import store from "./store";
import islogin from "./islogin";

const rootReducers = combineReducers({
    userinfo,
    store,
    operation,
    islogin
});

export default rootReducers;
