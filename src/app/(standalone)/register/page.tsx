"use client";
import { registerSchema } from "@/app/lib/register-schema";
import Link from "next/link";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type Inputs = z.infer<typeof registerSchema>;

export default function Register() {
  const [inputData, setData] = useState<any>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(registerSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    reset();
    setData(data);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Create free account
          </h2>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-10">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <form onSubmit={handleSubmit(processForm)}>
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      First & Last name
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <input
                        placeholder="Enter your full name"
                        className="block w-full py-4  pr-4 text-black placeholder-gray-500 transition-all duration-200
                         bg-white border border-gray-200 rounded-md"
                        {...register("name")}
                      />
                      {errors.name?.message && (
                        <p className="text-sm text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <input
                        placeholder="Enter email to get started"
                        className="block w-full py-4  pr-4 text-black placeholder-gray-500 
                        transition-all duration-200 bg-white border 
                        border-gray-200 rounded-md"
                        {...register("email")}
                      />
                      {errors.email?.message && (
                        <p className="text-sm text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="block w-full py-4  pr-4 text-black
                         placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md
                         "
                        {...register("password")}
                      />
                      {errors.password?.message && (
                        <p className="text-sm text-red-400">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base 
                      font-semibold text-white 
                      transition-all duration-200
                    bg-rose-500 border border-transparent rounded-md "
                    >
                      Create account
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-base text-gray-600">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        title=""
                        className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                      >
                        Login here
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
