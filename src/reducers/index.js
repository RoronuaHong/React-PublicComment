import { combineReducers } from "redux";
import userinfo from "./userinfo";
import operation from "./operation";

const rootReducers = combineReducers({
    userinfo,
    operation
});

export default rootReducers;
