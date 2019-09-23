import React,{Component} from 'react'
import Cart from '../cart'
import FetchApi from '../../api';
import  { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

class Chekout extends Component {

  constructor(props)
  {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.submitOrder = this.submitOrder.bind(this)
  }

  

 handleSubmit (e) {
  event.preventDefault();

  let val = document.forms["CheckoutForm"].getElementsByTagName("input");
  this.submitOrder(val)
}

  submitOrder (values) {
    event.preventDefault();
  if (values !== undefined) {
      if(this.props.cart.length < 1)
      {
        alert('Cart is empty')
        return <Redirect to='/Cart'/>

      }
      else{
        FetchApi('POST', 'https://api.rolten.info/createorder',{
                  order:{
                    Firstname: values.Firstname.value,
                    Lastname: values.Lastname.value,
                    PravnoLice: values.PravnoLice.value,
                    phone: values.phone.value,
                    Grad: values.Grad.value,
                    Ulica: values.Ulica.value,
                    Drzava:  values.Drzava.value,
                    email: values.email.value,
                    order_items_attributes : this.props.cart.map(item => ({
                    product_id : item.id,
                    qty:item.quantity,
                    duzina:item.duzina,
                    sirina: item.sirina,
                    metar: item.metar
                }))
              }
          }).then(json =>{
            if (json.errors) {
              alert('something went wrong!')
              document.location.href =   '/'

            }      
            debugger
              this.props.clearCart(this.props.cart)
              alert(json)
              document.location.href =   '/'
          })
  } 

}

}

render(){
  return (<div className="Chekout">
<div className="CheckoutForm">
      <form name="CheckoutForm"    onSubmit={(e)=>{this.handleSubmit(e)}}  >
      <div >
            <p htmlFor="Firstname">Ime* </p> <br/>
          <input name="Firstname" maxlength="50" component="input" type="text" required/>
          </div>
          <div >
            <p htmlFor="Lastname">Prezime* </p> <br/>
          <input name="Lastname" maxlength="50" component="input" type="text" required/>
          </div>
          <div >
            <p htmlFor="PravnoLice">Pravno Lice(Opciono)</p> <br/>
          <input name="PravnoLice" maxlength="100" component="input" type="text"/>
          </div>
          <div >
            <p htmlFor="email">Email*</p> <br/>
          <input name="email" maxlength="50" component="input" type="email" required/>
          </div>
          <div >
            <p htmlFor="phone">Telefon*</p> <br/>
          <input name="phone" maxlength="50" component="input" type="text" required/>
          </div>
          <div >
            <p htmlFor="Grad">Grad/Naselje*</p> <br/>
          <input name="Grad" maxlength="50" component="input" type="text" required/>
          </div>
          <div >
            <p htmlFor="Ulica">Ulica i broj*</p> <br/>
          <input name="Ulica" maxlength="50" component="input" type="text" required/>
          </div>
          <div >
            <p htmlFor="Drzava">Drzava*</p> <br/>
          <input name="Drzava" maxlength="50" component="input" type="text" required/>
          </div>
          <div>
              <button className="SubmitOrder-btn" type="submit">Naruči</button>
          </div>
      </form>
    </div>

        <div className="Chekout-cart" >
        <Cart/>
      </div>
  </div> ) 
}
}

function mapStateToProps(state){
  return {
      cart: state.cart
  }
}
function mapDispatchToProps(dispatch){
    
  return{       
    clearCart: (item)=>{
          dispatch({type:'CLEAR',payload:item})
      }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Chekout)
