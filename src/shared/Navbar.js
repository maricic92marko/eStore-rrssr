import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import SearchInput from './features/searchInput'
import HamburgerMenu from './features/hamburgerMenu'
import ProductMenu from './features/productsMenu'

 class Navbar extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = { width: 0, height: 0,product_menu_toggle: false};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onClickHandlerProducts = this.onClickHandlerProducts.bind(this)
    this.onMouseLeaveHandlerProducts = this.onMouseLeaveHandlerProducts.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.count = this.count.bind(this)
    this.price = this.price.bind(this)
}

  count  (cart) {
  debugger
  if(cart && cart.length > 0)
  {
    return cart.reduce((acc, item)=>{

      return parseInt(acc) + parseInt(item.quantity)
    }, 0)
  }
  else
  {
    return 0
  }

}

  price (cart) {
  debugger
  if(cart && cart.length > 0)
  {
    return cart.reduce((acc, item)=>{
      return Math.round((acc +  item.priceSum) * 100) / 100
    }, 0)
  }
  else
  {
    return 0
  }
}

  onClickHandlerProducts  () {
      let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
      
      if(scrollTop>50 || window.localStorage.href !== '/')
      {
        this.setState({ product_menu_toggle  : this.state.product_menu_toggle? false : true  })
      }
  }

  onMouseLeaveHandlerProducts () {
      this.setState({ product_menu_toggle  : false  })
  }

  componentDidMount() {

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    
  }
 
  render() { 

    let {cart, products, classes} = this.props

    return (
      <div id="Header-part" className="Header-part">
        <div className="Header-top">
        {
            this.state.width >  1000 ?
          <NavLink to ='/'>
                      <img className="logoMali" src='/products/logoMali.png'></img>

            <img className="logoVeliki" src='/products/logoVeliki.png'></img>
            
          </NavLink> 
          :  this.state.width >350?
          <NavLink to ='/'>
          <img className="logoMali" src='/products/logoMali.png'></img>
         </NavLink>:null
        } 
          <div className="cartBag">
          <NavLink className="cartLink" to ='/cart'>
            <div className="cartBagImg">
            <img alt="" src="./products/Online-Shopping-Cart-PNG-Free-Commercial-Use-Image.png"></img>
                <span className="quantityProducts">{this.count(cart)}</span>
            </div>
            </NavLink>
            <span className="priceTag">Korpa ${this.price(cart)}</span>
          </div> 
        </div>
        <div className="Header-botom">
        {
            this.state.width <  1000 ?
            
            <HamburgerMenu
            products={products}
            classes={classes}/>:
            <ul className="Header-botom-ul">
           
              <li className="products-menu-link"
                onClick={this.onClickHandlerProducts} 
              ><p>Proizvodi</p>
              <img  alt=' ' src='/products/controls-burger-white.png'></img>
            </li> 
              <li className="bot-menu-link"><NavLink  to ='/InfoContact'>Informacije i kontakti</NavLink></li>
              <li className="bot-menu-link"><NavLink  to ='/cart'>Korpa</NavLink></li>
            </ul>
        }
      {  this.state.product_menu_toggle?
      <div
      onMouseEnter={this.onMouseEnterHandlerProducts} 
      onMouseLeave={this.onMouseLeaveHandlerProducts} 
      className="products-menu-container">

          <ProductMenu 
          products={products}
          classes={classes}/>
        </div> :null}
          <SearchInput 
          products={products}/>

        </div>

      </div>
    )
  }
}

function mapStateToProps(state){
  debugger
  return {
      cart: state.cart,
      products: state.products,
      classes : state.classes
  }
}

export default connect(mapStateToProps)(Navbar)
