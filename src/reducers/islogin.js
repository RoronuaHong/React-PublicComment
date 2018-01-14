import * as ISLOGIN from "../constants/islogin";

const initialState = false;

export default function islogin(state = initialState, action) {
    switch(action.type) {
        case ISLOGIN.ISLOGIN:
            return action.data
        default:
            return state;
    }
}