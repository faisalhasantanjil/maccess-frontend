import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../config/AuthProvider';
import axios from 'axios' 

const CartComponent = () => {
    const [cartItems, setCartItems] = useState();
    const [orderItems, setOrderItems] =useState();
    const [total, setTotal] = useState(0)
    const {user} = useContext(AuthContext);
    const [address, setAddress] = useState('');
    const email = user?.email;
    

    useEffect(()=>{
        viewCart();
    },[]);

    useEffect(()=>{
        viewOrder()
    },[orderItems])
    
    
    

    const viewCart= async()=>{
        const cart = JSON.parse(localStorage.getItem('cart'))|| [];
        if (cart.length !== 0){
            setCartItems(cart)
            let tot =0
            cart.map((item)=>{
                let i = (parseFloat(item.unit_price) * parseFloat(item.quantity));
                tot= tot + i;
            })
            setTotal(tot)
        }
        
    }

    const viewOrder = async()=>{
        
        const order = await axios.get('https://maccess01.vercel.app/view-order');
        const customer_order =await order.data.order.filter((item)=>item.email === email );
        setOrderItems(customer_order)
       
    }

    
    
    const buyCart = async(e) =>{
        const the_url= 'https://maccess01.vercel.app/order'
        fetch(the_url, { method: 'POST',headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            cartItems:cartItems,
            email: email,
            address:address
        })})
        .then(res=> res.json())
        .then(data=> console.log(data))
        localStorage.clear();
        window.location.reload(false);

    }

    const removeFromCart = (product_id)=>{
        let cart = JSON.parse(localStorage.getItem('cart'));
        let index = cart.findIndex(item => item.product_id === product_id)
        cart.splice(index,1);
        localStorage.setItem('cart', JSON.stringify(cart));
        viewCart();
        
    }


  return (
    <div className='container'>
        <section className='row mx-auto flex-row-reverse mt-3 pt-3 d-flex justify-content-center'>
            <section className='col-sm-12 col-md-12 col-lg-2 mx-auto rounded-pill align-self-center' style={{backgroundColor:"black", color:"white", fontFamily: "Copperplate, fantasy"}}>
                <p className='display-6'>Your Cart</p>

            </section>
            <section className='col-sm-12 col-md-12 col-lg-10 mx-auto table-responsive '>
                {cartItems ?
                    <table class="table  w-75 mx-auto text-start">
                        <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cartItems.map(
                            (cartItem)=>(
                                    <tr key={cartItem.product_id}>
                                        <td>{cartItem.product_name }</td>
                                        <td>{cartItem.quantity }</td>
                                        <td> {cartItem.unit_price }</td>
                                        <td>{cartItem.unit_price * cartItem.quantity }</td>
                                        <td> <button className='btn btn-sm btn-danger' onClick={()=>removeFromCart(cartItem.product_id)}>remove</button> </td>
                                    </tr>
                            )
                        ) }
                            <tr >
                                <td></td>
                                <td></td>
                                <td>Total :</td>
                                <td><b>{total} </b></td>
                            </tr>
                        </tbody>
                    </table>
                    :<p className='h4 '>No items In the cart</p>
                }
            </section>
        </section>

        {cartItems ?
        <section className='row w-50 mx-auto bg-black text-white m-5 rounded' style={{opacity:1}}>
            <section className='col-sm-12 col-md-3 '>
                <p className='ms-sm-0 m-md-2 '>Your Delivery Address</p>
            </section>
            <section className='col-sm-12 col-md-6 '>
                <section className='ms-sm-0 m-md-2 '><textarea className='' value={address} onChange={(e)=>setAddress(e.target.value)} cols='30' rows='2' placeholder='Enter your Address'/></section>
            </section>
            <section className='col-sm-12 col-md-3'>
                {email?
                <button onClick={buyCart} className='my-3 p-2 btn btn-light'>Place order</button> : <button className='my-3 p-2 btn btn-light'><a href='/signin' style={{textDecoration: 'None', color:'black'}}>Login</a></button>
                }
            </section>
           
        </section>
        :""
        }
        <section id='orderTotal' className='row mx-auto mt-5'>
                <section className='col-sm-12 col-md-12 col-lg-2 mx-auto rounded-pill align-self-center' style={{backgroundColor:"black", color:"white", fontFamily: "Copperplate, fantasy"}}>
                    <p className='h1 align-self-center p-2'>Order Placed</p>

                </section>
                <section className='col-sm-12 col-md-12 col-lg-10 mx-auto table-responsive '>
        {orderItems ?
           
                <div><table class="table w-75 w-sm-50 mx-auto text-start">
                <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Price</th>
                    <th scope="col">Order Data</th>
                    <th scope="col">status</th>
                </tr>
                </thead>
                <tbody>
                {orderItems.map(
                    (cartItem)=>(
                            <tr key={cartItem._id}>
                                <td>{cartItem.product_name }</td>
                                <td>{cartItem.quantity }</td>
                                <td> {cartItem.unit_price }</td>
                                <td>{cartItem.unit_price * cartItem.quantity }</td>
                                <td> {cartItem.date.slice(0, 10)}</td>
                                <td> {cartItem.status }</td>
                            </tr>
                    )
                ) }

                </tbody>
            </table></div>

            :<p className='display-5'>No items</p>
        }
        </section>
                </section>

        
    </div>
  )
}

export default CartComponent