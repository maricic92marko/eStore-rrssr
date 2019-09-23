import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import  { Redirect } from 'react-router-dom'

class ImageSlider extends Component {

    constructor (props){
        super(props)

        this.state = {

            sliderImages: this.props.slider_images,
            produts: this.props.products,
            count: 0,
            opimg : 1,
            imgid :1

        }

        this.nextImage = this.nextImage.bind(this)
        this.previousImage = this.previousImage.bind(this)
        this.setCount = this.setCount.bind(this)

    }
    componentDidMount(){
        const images =this.props.slider_images;

        if(images && images.length>0){
            this.setState({ sliderImages : images, imgid : ((Math.floor(Math.random() * 
                            Math.round(images.length / 2 - 1)) + 1) * 2)})
        }



    this.myInterval = setInterval(this.setCount(), 15);
}

setCount()  {
    if(Math.round(this.state.count) === 8)
    {   
        this.setState({imgid : this.state.imgid + 1,count : 0})
        if(this.state.imgid >  this.state.sliderImages.length -1)
        {
        this.setState({imgid : 0, count : 0})
        }
    }
    this.setState({count : this.state.count + 0.015})
}

    nextImage () {
        if(this.state.imgid <  this.state.sliderImages.length  -1 )
        {
            this.setState({count : 0 ,imgid:this.state.imgid+1}) 

        }
    }
    previousImage () {
        if(this.state.imgid >  0)
        {
        this.setState({count:0,imgid:this.state.imgid-1}) 
        }
    }

    render() {
        try{
        return (
            <div className="ImageSlider-wraper">
           
            <div className="ImageSlider"
            style ={{'transform' : `translateX(-${this.state.imgid *100}%)`}}>
                {  
                this.state.sliderImages.map( image=>
                    image.product_id ? 
                    <NavLink to={{
                        pathname:`${image.page_link}?id=${image.product_id}`
                        }}>
                          {  
              
                        <img src={image.image_path} alt="" className="SliderImg" id="SliderImg"></img> 
                          }
                        </NavLink>
                    :<NavLink  to={{
                        pathname:`${image.page_link}?id=${image.class_id}`
                        }}>
                        {  
                 
                        <img src={image.image_path} alt="" className="SliderImg" id="SliderImg"></img> 
                        }
                        </NavLink>)
            }
                </div>
                <button id="btnPrevious" 
                    onClick={()=>this.previousImage()} className="ImageSlider-btnPrevious">
                    <img src="/products/iconfinder_arrow-left.png"/>
                </button>
                <button id="btnNext" 
                    onClick={()=>this.nextImage()} className="ImageSlider-btnNext">
                    <img src="/products/iconfinder_arrow-right.png"/>
                </button>
            </div>
        )
    }
    catch(e){ 
        return <Redirect to='/'/>
    }
    }
}

export default ImageSlider