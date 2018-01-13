import * as storeActions from "../constants/store";

const initialStore = [];

export default function store(state = initialStore, action) {
    switch(action.type) {
        case storeActions.STORE_UPDATE:
            return action.data;
        case storeActions.STORE_ADD:
            state.unshift(action.data);
            return state;
        case storeActions.STORE_DELETE:
            return state.filter(item => {
                if(item.id !== action.data.id) {
                    return item;
                }
            });
        default:
            return state;
    }
}