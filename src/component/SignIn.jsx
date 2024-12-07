import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Logo/Brand */}
        <h1 className="text-2xl font-bold text-green-600 text-center mb-6">PlantLeafAI</h1>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Sign In to Your Account
        </h2>

        {/* Form */}
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-gray-600 text-sm">
                Remember Me
              </label>
            </div>
            <a href="#forgot-password" className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-center">
          <span className="h-px w-full bg-gray-300"></span>
          <span className="px-2 text-sm text-gray-600">or</span>
          <span className="h-px w-full bg-gray-300"></span>
        </div>

        {/* Create Account */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#signup" className="text-green-600 font-medium hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;