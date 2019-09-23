import React from 'react'
import ProductListing from '../features/product-listing//ProductListing'


export default function ProductListPage(props) {

  let class_id
  if (__isBrowser__) {

      let url_string = window.location.href
      let url = new URL(url_string);
      class_id = url.searchParams.get("id");
      console.log(class_id)

    }
    else
    { 
      class_id =  props.staticContext.url_data.get('id')
    }    


  return ( <div>
      <ProductListing classid={parseInt(class_id)} />
    </div>
  )
}
