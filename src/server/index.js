import express from 'express'
import cors from 'cors'
import {renderToString} from 'react-dom/server'
import App from '../shared/App'
import React from 'react'
import serialize from 'serialize-javascript'
import {matchPath, StaticRouter} from 'react-router-dom'
import routes from '../shared/routes'
import  FetchApi  from '../shared/api'
import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import {productIdReducer,cartReducer,storeInfoReducer,setClassReducer,
    productsReducer,sliderReducer,classReducer} from '../shared/store/Reducers'

const app = express()

app.use(cors())

app.use(express.static('public'))


app.get('*', (req,res,next)=>{

    if(req.url === '/favicon.ico'){
        res.end()
        return
    }

    /*const promise = activeRoute.fetchInitialData 
    ? activeRoute.fetchInitialData('get', 'http://localhost:5000/initial_state')
    : Promise.resolve()*/

    const activeRoute = routes.find((route) => 
    matchPath(req.url,route)) || undefined
    let full_url = req.protocol + '://' + req.get('host') + req.url;
        let url = new URL(full_url);
        let url_data


    if(activeRoute !== undefined)
    {     
        url_data = url.searchParams
    }


    let promise = FetchApi('get', 'https://api.rolten.info/initial_state')
        .then(json => json )
    console.log(promise)
    if(!promise)
    {
        promise = Promise.resolve()
    }
    promise.then((data) => {
       
        const RootReducer = combineReducers({
            products: productsReducer,
            currentClass: setClassReducer,
            cart: cartReducer,
            classes : classReducer,
            product_id : productIdReducer,
           // form: formReducer,
            store_info : storeInfoReducer,
            slider_images:sliderReducer
        })

        let preloadedState

        if(!preloadedState)
        {
            preloadedState = data

        }

        const store = createStore(RootReducer,preloadedState)
            const markup = renderToString(
                <Provider store={store}>
                    <StaticRouter location={req.url} context={{url_data}}>
                        <App />
                    </StaticRouter> 
                </Provider>
            )
           
            res.send(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>SSR with RR</title> 
                        <link rel="stylesheet" href="/main.css">
                        <script src='/bundle.js' defer></script>
                        <script>window.__INITIAL_DATA__=${serialize(data)}</script>
                        </head>      
                    <body>
                        <div id='app'>${markup}</div>
                    </body>
                </html>
                `)  
        }).catch(next)
 
})

app.listen(3000, () => {
    console.log('server is listening on port :3000')
})

