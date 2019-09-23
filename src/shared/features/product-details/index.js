import React from 'react'
import QuantityInput from '../product-listing/QuantityInput'
import ProductListItem from '../product-listing/ProductListItem'
import  { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

class  ProductDetails extends React.Component {
    render()
    {
        try{
            let product_id = this.props.product_id
            const product = this.props.products.filter(product => product.id === parseInt(product_id))[0]
            let imgPathList;
            if(product.img_path_list)
            {
                imgPathList =  product.img_path_list.split(',')
                imgPathList.push(product.image)
            }
            const  productImgChange =(e) =>
            {
                let curProduct = document.getElementById("descriptionImg");
                curProduct.src =e.target.src;
            }
        return (
            <div className='product-item-description'>
                <div className='product-item-description-item'>
                <h3>{product.name}</h3>
                 {Boolean(product.snizenje) ?
                    <div className="price-snizenje">-{product.price} RSD Sniženo</div>:
                    <div>{product.price}RSD</div> 
                    }

                <QuantityInput
                product={product}
                addToCart={this.props.addToCart}
                cartItem={this.props.cart.filter(cartItem =>cartItem.id === product.id)[0]}
                addMultipleitemsToCart={this.props.addMultipleitemsToCart}
                removeFromCart={this.props.removeFromCart}
                />
                <img 
                    id="descriptionImg"
                    alt={''}
                    title={product.name}
                    src={product.image}
                />
                <br></br>
                <p>{product.description}</p>
               
              {  imgPathList?
              <div className="product-item-description-images">
                    <ul>
                        {
                            imgPathList.map(path =>
                                <li>
                                    <img  onClick={(e) =>{productImgChange(e)}} alt="" src={path}/>
                                </li>
                            )
                        }
                    </ul>
                </div>: null
            }
                </div>
                <div className="product-item-description-class-items-wraper">
                <p>Similar Products</p>
                    <div className="product-item-description-class-items">
                {
                this.props.products.filter(product1 => product1.class_id === product.class_id && product1.id !== product.id).map( product =>
                   
                    <ProductListItem 
                    product_qty = {product.quantity}
                    product={product} 
                    addMultipleitemsToCart={this.props.addMultipleitemsToCart}
                    removeFromCart={this.props.removeFromCart}
                    cartItem={this.props.cart.filter(cartItem =>cartItem.id === product.id)[0]}
                    key={product.id}
                    />)
                }
                    </div>
                </div>
            </div>
        )
    }
    catch(e){
        console.log(e)
        return <Redirect to='/'/>
    }
}

}

function mapStateToProps(state){
     
    return {
        cart: state.cart,
        products: state.products
    }
}

function mapDispatchToProps(dispatch){
    
    return{
        productIdReducer: (id)=>{
             
            dispatch({ type: 'ID', payload: id})
        },
        removeFromCart: (item)=>{
            dispatch({type:'REMOVE',payload:item})
        },
        addMultipleitemsToCart: (item)=>{
            dispatch({type: 'ADDMULTIPLE', payload:item})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails)