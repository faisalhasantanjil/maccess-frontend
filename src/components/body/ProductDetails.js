import React, { useState } from 'react'

const ProductDetails = (props) => {
    const [addQuantity, setAddQuantity] =useState(1)
    const addToCart= async()=>{
        let cart = JSON.parse(localStorage.getItem('cart')) ||[];
        const cart_item = cart.find(item=> item.product_id === props.product._id);
        
        if(cart_item){
            cart_item.quantity = parseInt(cart_item.quantity)+parseInt(addQuantity);
        }
        else{
            cart.push({
                product_name : props.product.name,
                product_id :props.product._id,
                category : props.product.category,
                quantity : addQuantity,
                unit_price: props.product.price,
            })
        }
        localStorage.setItem('cart', JSON.stringify(cart))

    }

  return (
    <div className='container' style={{backgroundColor:"white"}}>
        <div className='row p-3 border border-5 border-bottom-0 border-end-0 rounded-pill'>
            <div className="col-sm-12 col-md-6">
                <img className='img-fluid w-50' src={`https://maccess001.onrender.com/images/${props.product?.image}`} alt="wallet" />
            </div>
            <div className="text-start col-sm-12 col-md-6 align-self-stretch">
                <span className='lead'>{props.product?.brand}</span>
                <p className='h5'>{props.product?.name}</p>
                <p><b>Price</b>: {props.product?.price}/=</p>
                <p><b>Stocks left</b>: {props.product?.quantity}</p>
                <p><b>Material</b>: {props.product?.material} </p>
                <p><b>Measurement</b>: {props.product?.measurement} </p>
                <button onClick={(e)=>{setAddQuantity(addQuantity-1)}}> - </button>
                <span className='mx-2 border border-1'>{addQuantity}</span>
                <button onClick={(e)=>{setAddQuantity(addQuantity+1)}}>+</button>
                <button className='ms-3' onClick={addToCart}>Add to cart</button>
            </div>
        </div>  
        <div className='row p-3 '>
        <p className=' m-sm-0 m-md-4 mb-md-0  text-start'>Description</p>
        <p className=' m-sm-0 m-md-4 mt-1 text-start'>{props.product?.description}</p>
            
            
        </div>
    </div>
  )
}

export default ProductDetails