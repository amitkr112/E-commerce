// HERE WE ARE CREATING THE REACT STORE USING THE CONCEPT OF REDUCER

import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { productDetailsReducer, productListReducer } from "./reducers/productReducers"

const initialState = {}
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer

})
//CONNECTING REACT APP WITH REDUX STORE
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store