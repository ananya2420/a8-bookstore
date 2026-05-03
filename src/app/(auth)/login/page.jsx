"use client";

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Google from "../../../assets/google.png";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const router = useRouter();

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/"
    });
  };

  const handleLoginFunc = async (data) => {
    const redirect = "/";

    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: redirect,
    });

    if (error) {
      toast.error(error.message || "Invalid credentials");
    } else {
      toast.success("Login successful!");
      router.push(redirect);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
        <div className='p-4 rounded-xl bg-white text-black'>
          <h2 className='font-bold text-3xl text-center mb-6'>Login</h2>

          <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>

            <fieldset className="fieldset">
              <legend>Email</legend>
              <input
                type="email"
                className="input"
                placeholder="Type your Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </fieldset>

            <fieldset className="fieldset relative">
              <legend>Password</legend>
              <input
                type={isShowPassword ? "text" : "password"}
                className="input"
                placeholder="Type your password"
                {...register("password", { required: "Password is required" })}
              />

              <span
                className="absolute right-2 top-9 cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
              </span>

              {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </fieldset>

            <button className="btn w-full bg-slate-800 text-white">
              Login
            </button>

            <button
              type="button"
              onClick={handleGoogleSignin}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition w-full justify-center"
            >
              <Image src={Google} alt="google" width={20} height={20} />
              <span>Continue with Google</span>
            </button>

            <p className='mt-4 text-center'>
              Don’t have an account?{" "}
              <Link href={"/register"} className='text-blue-500'>
                Register
              </Link>
            </p>

          </form>
        </div>
      </div>
    </Suspense>
  );
};

export default LoginPage;