import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import  { Redirect } from 'react-router-dom'

 class searchInput extends Component {
    
    constructor(props) 
    {
        super(props);
        this.state = {
            products: this.props.products,
            value :"",
            searcherItems : []
            
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)

    }

    handleChange  (event) {
        debugger
        let myValue =event.target.value  
        if (myValue.length > 0) 
        {

            this.setState({value: myValue, searcherItems : this.props.products.filter( product => product.name.toUpperCase().indexOf(myValue.toUpperCase())> -1)})


        }
        else
        {
            this.setState({value: '',searcherItems : []})
        }     

    }
    
    handleSubmit () {
        return  this.state.value
    }

    onMouseLeaveHandler () {
        this.setState({value: '',searcherItems : []})
    }

    render() {
  

    try{
        const claerSearch =() =>
        {
            let searchIn = document.getElementById("searchIn");
            searchIn.value = '';
            this.setState({value :"",searcherItems : []})
        }
        return (
        <div onMouseLeave={this.onMouseLeaveHandler}
            className="searchInput">
            <div className="searchInput-input">
            <img onClick={this.handleSubmit} alt="" src="./products/icons-search-white.png" className="searchIcon"></img>
            <input  id="searchIn" onChange={this.handleChange} type="text" placeholder="Search"></input>
          </div>
        {         
            this.state.value.length > 0 ?
            <div onClick={claerSearch} 
            className="autocomplete_menu" >
           {   
                this.state.searcherItems.map(item => 
                <div>
                    <NavLink to={{
                    pathname:`/ProductDetails?id=${item.id}`}}>
                        {item.name} 
                    </NavLink>
                </div>)
            }
            </div> : null
        }
        </div>)
        }
        catch(e){
                 
            return <Redirect to='/'/>
        }
    }
}
  
export default searchInput
