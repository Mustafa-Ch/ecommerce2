import { createSlice } from "@reduxjs/toolkit";
import all_product from "./assets/all_product";
const initialState={
    cart:[],
    items:all_product,
    totalAmount:0,
    totalQuantity:0
};

export const cartSlice=createSlice({
name:'cart',
initialState,
reducers:{
    add:(state,action)=>{
        let find = state.cart.findIndex((item) => item.id === action.payload.id);
        if (find >= 0) {
          state.cart[find].quantity += 1;
        } else {
          state.cart.push(action.payload);
        }
      },
      getCartTotal: (state) => {
        let { totalQuantity, totalPrice } = state.cart.reduce(
          (cartTotal, cartItem) => {
            const { new_price, quantity } = cartItem;
            const itemTotal = new_price * quantity;
            cartTotal.totalPrice += itemTotal;
            cartTotal.totalQuantity += quantity;
            return cartTotal;
          },
          {
              totalQuantity: 0,
            totalPrice: 0,
          }
        );
        state.totalAmount = parseInt(totalPrice.toFixed(2));
        state.totalQuantity = totalQuantity;
      },remove:(state,action)=>{
     state.cart= state.cart.filter((product)=>{
        return product.id!=action.payload
      })
      },increaseQuantity:(state,action)=>{
        state.cart.filter((item)=>{
        if(item.id==action.payload){
            return {...item,quantity:item.quantity+=1};
        }
        return item
        })
      },
      decreaseQuantity:(state,action)=>{
        state.cart.filter((item)=>{
        if(item.id==action.payload){
            return {...item,quantity:item.quantity-=1};
        }
        return item
        })
      }
      },
        
        
        

})
export const {add,getCartTotal,remove,increaseQuantity,decreaseQuantity} =cartSlice.actions
export default cartSlice.reducer