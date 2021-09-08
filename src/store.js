import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers";

const initialvalue ={};
const middleware = [thunk];
const store = createStore(
    reducers,
    initialvalue,
    applyMiddleware(...middleware))

export default store;