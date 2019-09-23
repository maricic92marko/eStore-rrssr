import React from 'react'
import Alerts from '../features/alerts'

export default function AlertPage(props) {
  
    let uuid
    let email

  if (__isBrowser__) {
      let url_string = window.location.href
      let url = new URL(url_string);
      uuid = url.searchParams.get("uuid");
      email = url.searchParams.get("email");

    }
    else
    { 
      uuid =  props.staticContext.url_data.get('uuid')
      email =  props.staticContext.url_data.get('email')

    }    

    return (
        <div>
            <Alerts uuid={uuid}
            email={email}/>
        </div>
    )
}
