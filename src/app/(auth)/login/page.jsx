"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit, watch, formState:{errors} } = useForm();

  const handleLoginFunction = (data) => {
    console.log(data, "data");
  };
  
  //console.log(watch("email"));
  //console.log(watch("password"));


  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login your account
        </h2>

        <form
          className="space-y-4"
          onSubmit={handleSubmit(handleLoginFunction)}
        >
          <fieldset>
            <legend>Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type here email"
              {...register("email",{
                required:"Email field is required",
              })}
            />
            {errors.email && <p className="text-green-500">{errors.email.message}</p>}
          </fieldset>

          <fieldset>
            <legend>Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Type here password"
              {...register("password",{required:"password field is required"})}
             
            />
             {errors.password && <p className="text-green-500">{errors.password.message}</p>}
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">
            Login
          </button>
        </form>

        <p className="mt-4">
          Do not have an account?
          <Link href="/register" className="text-green-500 ml-1">
            register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;