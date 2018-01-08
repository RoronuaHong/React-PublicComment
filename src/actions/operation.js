import * as actionTypes from "../constants/operation";

export function add() {
    return {
        type: actionTypes.COUNT_ADD
    }
}

export function minus() {
    return {
        type: actionTypes.COUNT_MINUS
    }
}