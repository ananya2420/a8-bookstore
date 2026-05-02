'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

  const {register,handleSubmit,watch,formState:{errors}}=useForm();
  
  const [isShowPassword,setIsShowPassword]=useState(false);


  const handleLoginFunc=async(data)=>{
         //e.preventDefault();
  //const email=e.target.email.value;
  //const password=e.target.password.value;
  //console.log(email,password);

  console.log(data,"data");


  const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
   
console.log(res,error);

  }
  //console.log(watch("email"));
  //console.log(watch("password"));
  return (
    <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
      <div className='p-4 rounded-xl bg-white text-black'>
      <h2 className='font-bold text-3xl text-center mb-6'>Login your account</h2>

      <form action="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset relative">
          <legend className="fieldset-legend">Email</legend>
          <input type="email" className="input" placeholder="Type here Email" {...register("email",{
            required:"Email field is required",
          })}/>

          <span className="absolute right-2 top-4 cursor-pointer" onClick={()=>setIsShowPassword(!isShowPassword)}>
            {isShowPassword? <FaEye />:<FaEyeSlash />}</span>
         
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
</fieldset>
          
          <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input type={isShowPassword?"text":"password"} className="input" placeholder="Type here password" {...register("password",{ required:"password field is required" })}/>
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
</fieldset>

          <button className="btn w-full bg-slate-800 text-white">Login</button>

          <p className='mt-4'>Do not Have An Account ?<Link href={"/register"} className='text-blue-500'>Register</Link> </p>

      </form>
      </div>
    </div>
  )
}

export default LoginPage