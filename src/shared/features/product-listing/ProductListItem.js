import React from 'react'
import QuantityInput from './QuantityInput'
import {NavLink} from 'react-router-dom'
import  { Redirect } from 'react-router-dom'

export default function ProductListItem(props)  {
  try{
  return (
  <div  className='product-list-item'>
  
          <NavLink className="product-list-item-btn"  to={{
            pathname:`/productdetails?id=${props.product.id}`
            }}>
      <h3>{ props.product.name}</h3>
      <img height={100}
        alt={''}
        title={ props.product.name}
        src={ props.product.image}
      />
      <br></br>
      {  
      /*  props.product.description  ?
        <button className="product-list-item-btn" >      
          <NavLink to={{
            pathname:`/productdetails?id=${props.product.id}`
            }}>Show description
          </NavLink>
        </button> : null*/
      }
  
      {
        props.product.snizenje === 1 ?
        <div className="price-snizenje">-{ props.product.price}RSD</div>
        :<div className="price">{ props.product.price}RSD</div> 
      }
           </NavLink>
           <div className='quantity-container'>
        <QuantityInput
          product={ props.product}
          cart = {props.cart}
          addMultipleitemsToCart={ props.addMultipleitemsToCart}
          removeFromCart={ props.removeFromCart}
          />
          </div>
  </div>
  )
    }
  catch(e){
    console.log(e)
    return <Redirect to='/'/>
}
}
