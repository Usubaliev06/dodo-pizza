import { applyMiddleware, combineReducers, createStore } from "redux";
import {  pizzaReducer } from "./pizzaReducer";
import { basketReducer } from "./basketReducer";
import { authReducer } from "./authReduser";
import {composeWithDevTools } from "redux-devtools-extension"
import reduxThunk from "redux-thunk"

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    basket: basketReducer,
    auth: authReducer,
})



export const store = createStore(

    rootReducer,
    composeWithDevTools( applyMiddleware(reduxThunk))
    );

store.subscribe(() => {
    const state = store.getState()
    localStorage.setItem("basket", JSON.stringify(state.basket.data))
    localStorage.setItem("auth", JSON.stringify(state.auth.data))
    
})

window.store = store;