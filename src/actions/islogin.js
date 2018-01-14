import * as ISLOGIN from "../constants/islogin";

export function islogin(data) {
    return {
        type: ISLOGIN.ISLOGIN,
        data
    }
}