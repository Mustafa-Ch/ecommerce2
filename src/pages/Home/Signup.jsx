import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/serviceApi/userAuthApi";
function Signup() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [number,setNumber]=useState('');
    const[password,setPassword]=useState('');
    const [registerUser]=useRegisterUserMutation();
    const handleSubmit= async()=>{
       const res=await registerUser({ name, email, number, password });
      
       setName('')
       setEmail('')
       setNumber('')
       setPassword('')
       alert('your account has been created...');
       console.log(res);
    }
  return (
    <div>
      <div class="bg-grey-lighter min-h-screen flex flex-col py-40">
        <div class="container max-w-[40%] mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}

            />

            <input
              type="number"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="number"
              placeholder="number"
              value={number}
              onChange={(e)=>setNumber(e.target.value)}

            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder=" Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}

            />

            <button
              type="submit"
              class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base mt-7 w-full"
               onClick={handleSubmit}>
              Create Account
            </button>
            <div class="text-grey-dark mt-6">
              Already have an account?
              <Link
                class="no-underline border-b border-blue text-blue"
                to={"/login"}
              >
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
