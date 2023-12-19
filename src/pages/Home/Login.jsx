import React from 'react'
import { Link } from 'react-router-dom'
import { useLoginUserMutation } from '../../redux/serviceApi/userAuthApi';
import { useState } from 'react';
function Login() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [loginUser]=useLoginUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
   
      const result = await loginUser({ name, email });
      console.log(result);
   
  };
  
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-40 mt-10">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      {/* <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2> */}
  
      <form class="mx-auto max-w-lg rounded-lg border" onSubmit={handleSubmit}>
        <div class="flex flex-col gap-4 p-4 md:p-8">
          <div>
            <label htmlFor="name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Name</label>
            <input name="name" type='text' class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
  
          <div>
            <label htmlFor="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
            <input name="email" type='email' class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
  
           <button class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base mt-7" >Log in</button>
  
   
        </div>
  
        <div class="flex items-center justify-center bg-gray-100 p-4">
          <p class="text-center text-sm text-gray-500">Don't have an account? <Link to={'/signup'} class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Register</Link></p>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login
