'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Google from "../../../assets/google.png"
import { toast } from "react-hot-toast";

const LoginPage = () => {

  const {register,handleSubmit,watch,formState:{errors}}=useForm();
  
  const [isShowPassword,setIsShowPassword]=useState(false);

const handleLoginFunc = async (data) => {
  const { data: res, error } = await authClient.signIn.email({
    email: data.email,
    password: data.password,
    callbackURL: "/", 
  });

  if (error) {
    toast.error(error.message || "Invalid credentials");
  } else {
    toast.success("Welcome back!");
    router.push("/"); // Navigate back home
  }
};

// Add this button inside your form or below it
const handleGoogleLogin = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });
};
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

          <button className="flex items-center gap-2 px-4 py-2 bg-black-600  rounded-lg hover:bg-black-700 transition">
            <Image src={Google} alt="google" width={20} height={20} />
            <span>Continue with Google</span>
          </button>

          <p className='mt-4'>Do not Have An Account ?<Link href={"/register"} className='text-blue-500'>Register</Link> </p>

      </form>
      </div>
    </div>
  )
}

export default LoginPage