import * as operationAction from "../constants/operation";

const initialState = 0;

export default function operation(state = initialState, action) {
    switch(action.type) {
        case operationAction.COUNT_ADD:
            return state + 5;
        case operationAction.COUNT_MINUS:
            return state - 1;
        default:
            return state;
    }
}