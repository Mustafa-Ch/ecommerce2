import React, { useContext,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { getCartTotal } from "../../CartSlice";

function Checkout() {

  const dispatch = useDispatch();
  const { cart, totalQuantity, totalAmount } = useSelector((state) => state.cart);

 useEffect(()=>{
  dispatch(getCartTotal());
 },[dispatch,cart])
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    last_name: "",
    email: "",
    number: "",
    city: "",
    postal_code: "",
    address: "",
    price: 0,//totals()
    quantity:1, //cartItems.length,
    user_id: 1, // Replace with the actual user ID
    // product_id: cartItems.map((item) => item.id).join(), // Assuming your cartItems have an 'id' property
  });
  const handleInputChange = (e) => {
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = () => {
    axios
      .post("http://your-laravel-api-url/api/order/store", billingInfo)
      .then((response) => {
        console.log(response.data);
        // Handle success, e.g., redirect to a confirmation page
      })
      .catch((error) => {
        console.error("Error during checkout:", error);
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <div className="flex py-10">
      <div class="bg-grey-lighter min-h-screen flex flex-col py-40 flex-1">
        <div class="container max-w-[70%] mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Billing Information</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="First Name"
              onChange={handleInputChange}
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name=" last_name"
              placeholder="Last Name"
              onChange={handleInputChange}
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="number"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="number"
              placeholder="Phone"
              onChange={handleInputChange}
            />
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="city"
              placeholder="City"
              onChange={handleInputChange}
            />
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Postal Code"
            />
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Adress"
            />

        
            
          </div>
        </div>
      </div>
      <div className='cartItems-down flex my-10 mt-40'>
  <div className='cartItemsTotal flex-1 flex flex-col mr-20'>
    <h1 className='text-2xl mb-4'>Cart Total</h1>

    <div className='flex flex-col gap-4'>
      <div className='cart-item-totalItem flex justify-between'>
        <p>Total Items</p>
        <p>{totalQuantity}</p>
      </div>
      <hr className='border-t' />
      <div className='cart-item-totalItem flex justify-between'>
        <p>Shipping Fee</p>
        <p>Free</p>
      </div>
      <hr className='border-t' />
      <div className='cart-item-totalItem flex justify-between'>
        <h3>Total Price</h3>
        <h3>{totalAmount}</h3>
      </div>
    </div>
    <button className='w-48 h-12 mt-4 bg-red-500 text-white font-semibold text-lg border-none rounded cursor-pointer' onClick={handleCheckout}>
      Proceed To Checkout
    </button>
  </div>
</div>
    </div>
    
  );
}

export default Checkout;
