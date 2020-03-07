import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducers";
import thunk from 'redux-thunk';

const middlewares = [thunk];

export const store = createStore(reducer, compose(
    applyMiddleware(...middlewares)));