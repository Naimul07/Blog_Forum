import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const password = watch("password");


  async function onSubmit(data) {
    console.log(data);
  }


  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="shadow-xl rounded-md md:p-14 w-full md:w-auto">
          <h1 className="font-bold text-xl mb-10 text-center">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)} className=" px-2 sm:p-8 w-full md:w-auto">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                <input
                  type="text"
                  {
                  ...register('firstName', {
                    required: "First Name is required",
                  })
                  }

                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

                />
                {errors.firstName && <span className="text-red-500 text-xs mt-1 input-error">{errors.firstName.message}</span>}
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                <input
                  type="text"
                  {
                  ...register('lastName', {
                    required: "Last Name is required",
                    
                  })
                  }

                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

                />
                {errors.lastName && <span className="text-red-500 text-xs mt-1 input-error">{errors.lastName.message}</span>}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Enter a valid email address"
                  }
                })}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

              />
              {errors.email && <p className="text-red-500 text-xs mt-1 input-error">{errors.email.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long"
                  }
                })}

                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

              />
              {errors.password && <p className="text-red-500 text-xs mt-1 input-error">{errors.password.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
              <input
                type="password"

                {...register("password_confirmation", {
                  required: "Password confirmation is required",
                  validate: value => value === password || "Passwords do not match"
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"

              />
              {errors.password_confirmation && <p className="text-red-500 text-xs mt-1 input-errorm">{errors.password_confirmation.message}</p>}
            </div>

            <button

              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {loading ? (<ClipLoader color="#ffffff" loading={loading} size={20} />) : ('Submit')}
            </button>
          </form>

        </div>
      </div>
      </div>
    </>
  )
}

export default Register