import {createStore, combineReducers} from 'redux'
import {productIdReducer,CartReducer,storeInfoReducer,setClassReducer,
    productsReducer,sliderReducer,classReducer} from './Reducers'
import {reducer as formReducer} from 'redux-form'

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

const RootReducer = combineReducers({
    products: productsReducer,
    currentClass: setClassReducer,
    cart: CartReducer,
    classes : classReducer,
    product_id : productIdReducer,
    form: formReducer,
    store_info : storeInfoReducer,
    slider_images:sliderReducer
})

const presistedState = loadFromLocalStorage()

const Store = createStore(
    RootReducer,
    presistedState);

Store.subscribe(() => saveToLocalStorage(Store.getState()))

export default Store;

