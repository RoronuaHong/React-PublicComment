import { combineReducers } from "redux";
import userinfo from "./userinfo";
import operation from "./operation";
import store from "./store";

const rootReducers = combineReducers({
    userinfo,
    store,
    operation
});

export default rootReducers;
