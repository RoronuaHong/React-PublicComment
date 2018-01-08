import { createStore } from "redux";
import rootReducers from "../reducers";

export default function configureStore(initialState) {
    const store = createStore(rootReducers, initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );

    return store;
}
