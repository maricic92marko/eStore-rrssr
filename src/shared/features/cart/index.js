import React,{useContext} from 'react'
import QuantityInput from '../product-listing/QuantityInput'
import {NavLink} from 'react-router-dom'
import  { Redirect } from 'react-router-dom'
import {removeAllFromCart} from './cartFunctions'
import {connect} from 'react-redux'

function Sort(items){
    debugger
    const cart = [].concat(items).sort((a, b)=> 
         a.id - b.id
      )
      return cart
}

function Cart(props) {
    //const [cart, setCart] = useContext(CartContext)
    debugger
    let {cart,removeAllFromCart, addMultipleitemsToCart} = props
    const handleSubmit = (item) =>
    {
         removeAllFromCart(item)   

    }
  

    try{
    return ( <div className="cart">
                {  
        cart && cart.length && window.location.pathname === '/cart'?   
          <NavLink className="CheckOutLink" to ='/checkout'>Naruči</NavLink>:null
        }
    {
        cart && cart.length ?
        <table className="cartTable">


            <tbody>
                {
                    Sort(cart).map(item=> 
                    <tr>
                        <td><img alt="" className="cartImg" src={item.image}></img>
                        </td>
                        <td>
                            <QuantityInput
                            product={item}
                            cartItem={item}
                            setCart={(value)=>addMultipleitemsToCart(value)}
                            cart={cart}
                            key={item.cartItemId}
                            />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.metricUnitName +': '+ item.price}RSD</td>
                        <td> Ukupno:{ Math.round((item.priceSum ) * 100) / 100}RSD</td>
                        <td>
                            <button
                            data-value ={item}
                            className="remove_item_btn"
                            onClick={() =>handleSubmit(item)}> 
                                Ukloni iz korpe
                            </button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table> : <h2>Korpa je prazna</h2>
    }
 
    </div>)
        }
        catch(e){ 
            return <Redirect to='/'/>
        }
}



function mapStateToProps(state){
    debugger
    return {
        
        cart : state.cart
    }
}

function mapDispatchToProps(dispatch){
    return{
        addToCart: (item) =>{
            dispatch({type:'ADD',payload:item})
        },
        removeFromCart: (item)=>{
            dispatch({type:'REMOVE',payload:item})
        },
        removeAllFromCart: (item)=>{
            dispatch({type:'REMOVEALL',payload:item})
        },
        addMultipleitemsToCart: (item)=>{
            debugger
            dispatch({type: 'ADDMULTIPLE', payload:item})
        },
        loadProducts: (products)=>{
          dispatch({ type: 'UPDATEPRODUCTS', payload: products})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)