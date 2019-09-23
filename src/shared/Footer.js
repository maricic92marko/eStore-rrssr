import React, {Component} from 'react'
import ScrollUpButton from "react-scroll-up-button";
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class Footer extends Component {

  constructor(props) {
    super(props);  
    this.handleClickFb = this.handleClickFb.bind(this);
    this.handleClickTw = this.handleClickTw.bind(this)
    this.handleClickLi = this.handleClickLi.bind(this)
}

 handleClickFb  (e)  {
  let url = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href
    window.open(url,
        'facebook-share-dialog',
        'width=800,height=600'
    );
    return false;
};

 handleClickTw (e) {
    let url = "https://twitter.com/share?url=" + window.location.href
      window.open(url);
      return false;
  };
    
   handleClickLi (e) {
    let url = 'https://www.linkedin.com/shareArticle?mini=true&amp;url=' + window.location.href
      window.open(url);
      return false;
  }; 
  render() { 
    const {store_info, classes, setClassReducer} = this.props
    return (
        <div className="footer-part">
          <div className="footerlinkList">
            <p>Proizvodi</p>
               
              {
                             classes.map(pClass => 
                             <NavLink className="footerlinks"
                         onClick={()=>{setClassReducer(pClass.id)}} 
                         to ={{
                         pathname:'/ProductList',
                         product_class:pClass.id
                        }} >
                         {pClass.class_name}
                         </NavLink>
                         )}
          </div>
        <div className="footerPageLinks">
              <NavLink  to ='/'>Početna</NavLink>
              <NavLink  to ='/InfoContact'>Informacije i kontakti</NavLink>
              <NavLink  to ='/cart'>Korpa</NavLink>
              <NavLink to={{pathname:'/ProductList',product_class: 'svi',}}> 
                Svi proizvodi
              </NavLink>
        </div> 
        <div className="footerContacts">
            <p>Email:{' '+store_info.store_mail}</p>
            <p>Telefon:{' '+store_info.store_phone}</p>
            <p>Adresa:{' '+store_info.store_address}</p>
        </div>
        <div className="shareButtons">
                <span onClick={this.handleClickFb} title="Share on Facebook"><img alt="" src="/products/icons-facebook-grey.png"/></span>
                <span onClick={this.handleClickTw} title="Share on Twitter"><img alt="" src="/products/icons-twitter-grey.png"/></span>
                <span onClick={this.handleClickLi} title="Share on LinkedIn"><img alt="" src="/products/icons-linkedin-grey.png"/></span>
        </div>
          <ScrollUpButton />
        </div>
    )
  }
}

function mapStateToProps(state){
  debugger
  return {
    store_info: state.store_info, 
    classes : state.classes
  }
}

function mapDispatchToProps(dispatch){
  return{
      setClassReducer:(class_id)=>{
          dispatch({type:'SETCLASS',payload:class_id})
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer)