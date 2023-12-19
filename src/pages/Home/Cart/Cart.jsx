import React, { useState } from 'react'
import './Cart.css'
import removeIcon from '../../../assets/cart_cross_icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, remove } from '../../../CartSlice'
function CartPage() {
const {cart}=useSelector((state)=>state.cart)
const dispatch=useDispatch();

  return (
    <>
     <div className='cart-items-main'>
      <div className='cart-items-format'>
        <p>Products</p>
        <p>Title</p>
        <p> Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {
 cart.map((item)=>{
   
      return (
        <div>
      <div className='cartitems-format cart-items-format'>
      <img src={item.image} className='cartIcon'/>
      <p>{item.name}</p>
<p>${item.new_price}</p>
<div><button className='cartQuantity' onClick={()=>dispatch(increaseQuantity(item.id))}>+</button>
<button className='cartQuantity'>{item.quantity}</button>
<button className='cartQuantity' onClick={()=>dispatch(decreaseQuantity(item.id))}>-</button></div>
<p>${item.new_price*item.quantity}</p>
<img src={removeIcon} alt='error'  className='cart-items-reove' onClick={()=>{dispatch(remove(item.id))}}/>
        </div>
      </div>
      )
  
  })}
 
     </div> 
    </>
  )
}

export default CartPage
