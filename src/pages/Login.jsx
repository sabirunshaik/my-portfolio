import React from "react";

const Login = () => {
  return (
    <div className="flex items-center flex-col justify-center w-full h-screen bg-gray-400 gap-3">
      <div className="border flex items-center flex-col justify-center p-5 bg-gray-400 gap-3">
        <input type="text" placeholder="Enter your Name" />
        <input type="email" placeholder="Enter your Email" />
        <a href="./Home.jsx">
          <button className="bg-blue-400 font-bold text-xl rounded px-2 text-white">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default Login;
