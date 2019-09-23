import React,{useContext} from 'react'
import ProductClassList from '../features/product-listing/index'
import  { Redirect } from 'react-router-dom'

function HomePage(props) {
    return (<div className="home-page">
      {
        <ProductClassList />
      }
    </div>)


}






export default HomePage
