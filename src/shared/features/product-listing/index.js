import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import ImageSlider from '../imageSlider'
import ProductListItem from './ProductListItem'
import ProductMenu from '../productsMenu'
import {connect} from 'react-redux'


 class ProductClassList extends Component {

render(){
    const {slider_images, classes, products,
         addMultipleitemsToCart, removeFromCart,cart ,setClassReducer} = this.props


         return (
        <div className="ImageSlider-ProductClassList">
           
           <div className='ProductMenu'>
                    <ProductMenu 
                    products={products}
                    classes={classes}/>
                </div>

            <ImageSlider slider_images={slider_images}
            products={products}/>
{      
    products.filter(product => Boolean(product.snizenje) === true).length > 0 ?
    <div className="snizenja_container">
        <h3>Proizvodi na sniženju</h3>
        <div className="snizenja">
            {
                products.filter(product => Boolean(product.snizenje) === true).map( product =>
                <ProductListItem 
                    product={product}
                    cart={cart} 
                    addMultipleitemsToCart={ addMultipleitemsToCart}
                    removeFromCart={ removeFromCart}
                    cartItem={ cart.filter(cartItem =>cartItem.id === product.id)[0]}
                    key={product.id}
                />)
            }
        </div>
    </div>: null
}

{      
    products.filter(product => Boolean(product.snizenje) === true).length > 0 ?
    <div className="najprodavaniji_container">
        <h3>Najprodavaniji proizvodi</h3>
        <div className="najprodavaniji">
            { products.sort(function(a,b){ return b.quantity_sold-a.quantity_sold}).slice(0,10).map( product =>
                <ProductListItem 
                    product={product}
                    cart={cart} 
                    addMultipleitemsToCart={ addMultipleitemsToCart}
                    removeFromCart={ removeFromCart}
                    cartItem={ cart.filter(cartItem =>cartItem.id === product.id)[0]}
                    key={product.id}
                />)
            }
        </div>
    </div>: null
}

            <div className="ProductClassList-wraper">                
                <div className="ProductClassList">
                    { 
                        classes.map(pClass => 
                        <div className="ProductClassLink-wraper">
                            
                            <NavLink  className="ProductClassLink"
                            onClick={()=>{ setClassReducer(pClass.id)}} 
                            to ={
                                {
                                    pathname:`/productlist?id=${pClass.id}`                                
                                }
                            }>
                                <p>{pClass.class_name.toUpperCase()}</p>
                                <img alt=" " src={pClass.image_path}/>
                            </NavLink>
                            
                        </div>
                        )
                        
                    }
                </div>      
            </div> 
            
        </div>
    )        
}
}


function mapStateToProps(state){


    return {
        cart: state.cart,
        products: state.products,
        classes: state.classes,
        slider_images : state.slider_images
    }
  }
  
  function mapDispatchToProps(dispatch){
    
    return{
        
        classReducer:(product_class)=>{
            debugger
            dispatch({type:'CLASS',payload:product_class})
        },
        setClassReducer:(class_id)=>{
            debugger
            dispatch({type:'SETCLASS',payload:class_id})
        },        
        removeFromCart: (item)=>{
            dispatch({type:'REMOVE',payload:item})
        },
        addMultipleitemsToCart: (item)=>{
            debugger
            dispatch({type: 'ADDMULTIPLE', payload:item})
        }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(ProductClassList)
