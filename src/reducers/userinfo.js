import * as actionTypes from "../constants/userinfo";

const initialState = {};

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.USERINFO_LOGIN:
            return action.data;
        case actionTypes.UPDATE_CITYNAME:
            return action.data;
        default:
            return state;
    }
}