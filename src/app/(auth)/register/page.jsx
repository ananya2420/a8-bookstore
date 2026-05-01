"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { register, handleSubmit, watch, formState:{errors} } = useForm();

  const handleRegisterFunction = (data) => {
    console.log(data, "data");

    const {name,photo,email,password}=data;
    console.log(name,photo);
  };
  
  //console.log(watch("email"));
  //console.log(watch("password"));


  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Register your account
        </h2>

        <form
          className="space-y-4"
          onSubmit={handleSubmit(handleRegisterFunction)}
        >

          <fieldset>
            <legend>Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here name"
              {...register("name",{
                required:"Name field is required",
              })}
            />
            {errors.name && <p className="text-green-500">{errors.name.message}</p>}
          </fieldset>

          <fieldset>
            <legend>Photo url</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here photo url"
              {...register("photo",{required:"photo url field is required"})}
             
            />
             {errors.photo && <p className="text-green-500">{errors.photo.message}</p>}
          </fieldset>

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
              {...register("password",{
                required:"Password field is required",
              })}
            />
            {errors.password && <p className="text-green-500">{errors.password.message}</p>}
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">
            Register
          </button>
        </form>

       {/* <p className="mt-4">
          Do not have an account?
          <Link href="/register" className="text-green-500 ml-1">
            register
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default RegisterPage;