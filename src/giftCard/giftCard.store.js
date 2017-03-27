import { createStore, combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import giftCardCustomize from "./customize/reducers/giftCardCustomize.reducer";

// Combine all the reducers here
const allReducers = Object.assign({}, giftCardCustomize, {
    routing: routerReducer
});

// Create the store
const store = createStore(combineReducers(allReducers));

export default store;
