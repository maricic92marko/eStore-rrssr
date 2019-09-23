

export  function productsReducer  (state=[], action){
     
    const setProductQuantity = (products,item) =>
    {
        const Sort =(items) =>{
             
            const prod = [].concat(items).sort((a, b)=> 
                 a.id - b.id
              )
              return prod
        }
         
        const productsWithotItem = (products,item)=> products.filter(cartItem=> cartItem.id !== 
            item.id)
           let  prod = Sort([...productsWithotItem(products,item),{...item,quantity:0}])
        return  prod
    }

    switch(action.type){
        case 'UPDATEPRODUCTS':
            return setProductQuantity(state,action.payload)
        case 'LOADPRODUCTS':
            return action.payload
        default:
            return state
    }   
}


export  function setClassReducer  (state=[], action){
     
    switch(action.type){
        case 'SETCLASS':
        return action.payload
        default:
        return state
    }   
}

export  function storeInfoReducer  (state=[], action){
     
    switch(action.type){
        case 'STOREINFO':
        return action.payload
        default:
        return state
    }   
}

export  function sliderReducer  (state=[], action){
      
    switch(action.type){
        case 'SLIDER':
        return action.payload
        default:
        return state
    }   
}

export  function classReducer  (state=[], action){
     
    switch(action.type){
        case 'CLASS':
        return action.payload
        default:
        return state
    }   
}



const itemInCart = (cart,item)=>cart.filter(cartItem=> cartItem.id === 
    item.id)[0]

const cartWithotItem = (cart,item)=> cart.filter(cartItem=> cartItem.cartItemId !== 
        item.cartItemId)

const addMultipleitemsToCart=(cart,item)=>{
    debugger
 
    const add  = item.quantity
    if(cart.length>0)
    {
        item.cartItemId = cart[cart.length -1 ].cartItemId +1

    }
    else
    {
        item.cartItemId = 0
    }
    if(add >= 1)
    {
    return [...cartWithotItem(cart,item),{...item,quantity:parseFloat(add)}]
    }
    else
    {
        return cart;
 
    }
}
  
const changeOrder = (cart,items) => {
     
   const order = JSON.parse(items)
   cart = order
    return cart
//})
}



const addToCart=(cart,item)=>{
 
    const cartItem = itemInCart(cart,item)
    return cartItem ===undefined ? [...cartWithotItem(cart,item),{...item,quantity:1}]
    :[...cartWithotItem(cart,item),{...item,quantity:cartItem.quantity +1}]
  
}

const removeFromCart=(cart,item)=>{
    return item.quantity===1 
    ?[...cartWithotItem(cart,item)]
    :[...cartWithotItem(cart,item), {...item,quantity:item.quantity-1}]
}

const removeAllFromCart=(cart,item)=>{
    return [...cartWithotItem(cart,item)]
}
 
const clearCart=(cart,item)=>{
    return []
}

export function cartReducer  (state=[],action)
{
    switch(action.type){
        case'ADD':
            return addToCart(state,action.payload)
        case'ADDMULTIPLE':
            return addMultipleitemsToCart(state,action.payload)
        case'REMOVE':
            return removeFromCart(state, action.payload)
        case'REMOVEALL':
            return removeAllFromCart(state, action.payload)
        case 'CHANGEORDER':
            return changeOrder(state,action.payload)
        case 'CLEAR':
            return clearCart(state,action.payload)
        default:
    return state;
        }
}

export  function productIdReducer (state=[], action){
    switch(action.type){
        case 'ID':
        return action.payload
        default:
        return state
    }
}
  