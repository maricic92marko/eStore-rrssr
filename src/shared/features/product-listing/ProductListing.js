import React from 'react'
import ProductListItem from './ProductListItem'
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'

class ProductListing extends React.Component {

    render(){
        debugger
        try{
            debugger
            const{addMultipleitemsToCart,removeFromCart, cart} = this.props
            let {products,classid} = this.props
            debugger
            let prod
            if(classid !== undefined)
            {   
                if(classid !== -1)
                {console.log(77777777777777)
                    prod = products.filter(product => product.class_id === classid)
                }
                else
                {  console.log(88888888888)
                    prod = products
                }
            }
            console.log(prod)

        return  (
            <div className='product-listing'>
                {
                prod.map( product =>
                    <ProductListItem 
                    product={product} 
                    addMultipleitemsToCart={addMultipleitemsToCart}
                    removeFromCart={removeFromCart}
                    cartItem={cart.filter(cartItem =>cartItem.id === product.id)[0]}
                    key={product.id}
                    />)
                }
            </div>
        )
    }
    catch(e){
             
        return <Redirect to='/'/>
    }
    }
}

function mapStateToProps(state){
    return {
        cart: state.cart,
        products: state.products,
        currentClass : state.currentClass
    }
}

function mapDispatchToProps(dispatch){
    
    return{       
        removeFromCart: (item)=>{
            dispatch({type:'REMOVE',payload:item})
        },
        addMultipleitemsToCart: (item)=>{
            dispatch({type: 'ADDMULTIPLE', payload:item})
        },
        setClassReducer : (currentClass) => {
            dispatch({type: 'SETCLASS', payload:currentClass})

        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)