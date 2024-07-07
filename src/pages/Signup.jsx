import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-3/6 rounded bg-gray-800">
        <div className="text-4xl font-semibold my-2">Sign up</div>
        <input
          type="username"
          placeholder="username"
          className="bg-gray-600 px-3 py-2 my-3 w-full rounded"
          name="username"
        />
        <input
          type="email"
          placeholder="email"
          className="bg-gray-600 px-3 py-2 my-3 w-full rounded"
          name="xyz@example.com"
          required
        />
        <input
          type="password"
          placeholder="password"
          className="bg-gray-600 px-3 py-2 my-3 w-full rounded"
          name="password"
        />
        <div className="w-full flex items-center justify-between">
          <button className="bg-red-600 text-l px-3 py-2 my-3 rounded">
            Create Account
          </button>
          <Link to="/login" className="text-gray-400 hover:text-gray-200">
            Already have an account? LogIn here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
