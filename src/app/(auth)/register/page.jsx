'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const router = useRouter();

  const handleRegisterFunc = async (data) => {
    console.log(data);
    const { data: res, error } = await authClient.signUp.email({

      name: data.name,
      email: data.email,
      password: data.password,
      image: data.photo,
      callbackURL: "/login",
    });

    if (error) {
      console.log(error);
      toast.error(error.message || "Registration failed");
      return;
    }

    if (res) {
      toast.success("Account created! Please login.");
      router.push("/login");
    }
  };

  return (
    <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
      <div className='p-4 rounded-xl bg-white text-black'>
        <h2 className='font-bold text-3xl text-center mb-6'>
          Register your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>

          {/* Name */}
          <fieldset>
            <legend>Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          </fieldset>

          {/* Photo */}
          <fieldset>
            <legend>Photo url</legend>
            <input
              type="text"
              className="input"
              placeholder="Photo URL"
              {...register("photo", { required: "Photo is required" })}
            />
            {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
          </fieldset>

          {/* Email */}
          <fieldset>
            <legend>Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </fieldset>

          {/* Password */}
          <fieldset className="relative">
            <legend>Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input w-full"
              {...register("password", { required: "Password is required" })}
            />
            <span
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;