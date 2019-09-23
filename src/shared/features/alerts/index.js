import React, { Component } from 'react'
import FetchApi from '../../api'
import  { Redirect } from 'react-router-dom'

export default class index extends Component {

    constructor(props){
        super(props)
        this.cancelOrder = this.cancelOrder.bind(this)
        { __isBrowser__? this.cancelOrder():null}
    }

    
    cancelOrder(){
        debugger
        if(this.props.uuid.length >0 ){
            const url =`http://api.rolten.info/cancel_order?uuid=${this.props.uuid}&email=${this.props.email}`
            FetchApi('get', url)
            .then(json => {
                debugger
                alert(json.result)
                return <Redirect to='/'/>
            })
        }
    }
    render() {
        try{
        return (
            <div>

                <Redirect to='/'/>
            </div>
        )
    }
    catch(e){ 
        return <Redirect to='/'/>
    }
    }
}
