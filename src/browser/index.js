import React from 'react'
import {hydrate} from 'react-dom'
import App from '../shared/App'
import {BrowserRouter} from 'react-router-dom'
import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import {productIdReducer,cartReducer,storeInfoReducer,setClassReducer,
    productsReducer,sliderReducer,classReducer} from '../shared/store/Reducers'

const preloadedState = window.__INITIAL_DATA__


function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    }catch(e)
    {
        console.log(e)
    }
}

function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('state') 
        if(!serializedState) return undefined
        return JSON.parse(serializedState)
    }catch(e)
    {
        console.log(e)
        return undefined
    }
}

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__
const RootReducer = combineReducers({
    products: productsReducer,
    currentClass: setClassReducer,
    cart: cartReducer,
    classes : classReducer,
    product_id : productIdReducer,
    //form: formReducer,
    store_info : storeInfoReducer,
    slider_images:sliderReducer
})
// Create Redux store with initial state
const presistedState = loadFromLocalStorage()
let store
if(presistedState)
{
    store = createStore(RootReducer, presistedState)
}
else
{
    store = createStore(RootReducer, preloadedState)
}

store.subscribe(() => saveToLocalStorage(store.getState()))


hydrate(
    <Provider store={store}>
        <BrowserRouter> 
            <App  />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)



