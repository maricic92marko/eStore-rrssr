import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import  { Redirect } from 'react-router-dom'

class ProductMenu extends Component {

    constructor(props)
    {

        super(props)
        this.state = {
            class_menu_toggle : false ,
            product_menu_toggle: false,
            class_id : 0}

        this.onMouseLeaveHandlerClass = this.onMouseLeaveHandlerClass.bind(this)
        this.onMouseEnterHandlerProduct = this.onMouseEnterHandlerProduct.bind(this)
        this.onMouseLeaveHandlerProduct = this.onMouseLeaveHandlerProduct.bind(this)
        this.onMouseClickHandlerProduct = this.onMouseClickHandlerProduct.bind(this)
    }


    onMouseLeaveHandlerClass () {

            this.setState({ class_menu_toggle  :  false ,product_menu_toggle : false})
        
    }

    onMouseClickHandlerProduct (id,length) {

        if(length > 0 )
        {
        this.setState({class_id : id ,product_menu_toggle : this.state.product_menu_toggle ? false : true , class_menu_toggle : true})
    }


    } 
    onMouseEnterHandlerProduct (id,length) {


        if(length > 0 )
        {
        this.setState({class_id : id ,product_menu_toggle :  true ,class_menu_toggle : true})
        }


    }

    onMouseLeaveHandlerProduct (id) {

        this.setState({product_menu_toggle :  false })
    }

    render() {
  

        try{
        return (
            <div  className="products-drop-menu"> 
                    <ul id="classList"  className="class-drop-menu-list"
                        onMouseLeave={this.onMouseLeaveHandlerClass}>
                        {
                            this.props.classes.map(pClass => <div>
                            <li  /*onMouseLeave={()=>{this.onMouseLeaveHandlerProduct()}}*/
                             className="class-drop-menu-list-item">
                            {  
                            <NavLink to={{ pathname: `/ProductList?id=${pClass.id}`}}>
                                <p>{pClass.class_name}</p>
                            </NavLink>
                            }
                           
                                <img onClick={()=>{this.onMouseClickHandlerProduct(pClass.id,
                                this.props.products.filter(product => product.class_id === pClass.id).length?
                                this.props.products.filter(product => product.class_id === pClass.id).length :0)}}
                                alt='' src="/products/white-arrow-right.png">
                                </img>
                           
                            </li>
                            { 
                    this.state.product_menu_toggle && this.state.class_menu_toggle  ?
                        <ul onMouseEnter={()=> this.onMouseEnterHandlerProduct(this.state.class_id,1)} 
                        onMouseLeave={()=>{this.onMouseLeaveHandlerProduct(this.state.class_id,1)}}
                        className="products-drop-menu-list">
                            { this.props.products.filter(product => product.class_id === pClass.id 
                            && product.class_id === this.state.class_id)
                                .map(product => 
                                <li>
                                
                                <NavLink to={{
                                pathname:`/ProductDetails?id=${product.id}`
                                }}>{product.name}
                                </NavLink>
                                </li>
                                )}
                        </ul>:null
                }
                             </div>)
                        }
                        <li className="class-drop-menu-list-item">
                        <NavLink to={{
                                pathname:'/ProductList?id=-1'
                                }}> Svi proizvodi
                                </NavLink>
                           </li>
                    </ul>    
        
            </div>
        )
    }
    catch(e){
             console.log(e)
        return <Redirect to='/'/>
    }
    }
}


export default ProductMenu