import React from 'react'
import ProductDetails from '../features/product-details'


export default function ProductDetailsPage(props) {
  debugger

  let product_id
  if (__isBrowser__) {

      let url_string = window.location.href
      let url = new URL(url_string);
      product_id = url.searchParams.get("id");
    }
    else
    { 
      product_id =  props.staticContext.url_data.get('id')
    }    

  return ( 
  <div>
 
    <ProductDetails product_id = {parseInt(product_id)} />
  
  </div>
  )
}
