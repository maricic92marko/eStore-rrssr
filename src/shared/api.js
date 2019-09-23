

import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill()

export default  function FetchApi (method, url, data) {

    if (method.toLowerCase() === 'get' ) {
        return fetch(url,{
            method,
            headers:{ 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
            }).then(response => response.json())
            .catch((error) => {
                console.warn(error)
                return null
            });
    } 
    else {
    return fetch(url,{
        method,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body : JSON.stringify(data),

        }).then(response => response.json())
        .catch((error) => {
            console.warn(error)
            return null
        });

    }
}


