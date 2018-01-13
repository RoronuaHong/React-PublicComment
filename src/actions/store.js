import * as storeActions from "../constants/store";

export function update(data) {
    return {
        type: storeActions.STORE_UPDATE,
        data
    }
}

export function add(item) {
    return {
        type: storeActions.STORE_ADD,
        data: item
    }
}

export function deletes(item) {
    return {
        type: storeActions.STORE_DELETE,
        data: item
    }
}