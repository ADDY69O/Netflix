import React from "react";
import Netflix_Logo from "../assets/Netflix_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
const Login = () => {
    const navigate = useNavigate()
    const handleHome =()=>{
        navigate("/")
    }

  return (
    <div className="bg-Netflix_main bg-cover bg-center w-full h-full inset-0  ">
      <div className=" bg-gradient-to-t from-black via-transparent to-black">
        <div className={`flex flex-row justify-start    text-white h-full `}>

          <img className="h-16 ml-36 cursor-pointer" src={Netflix_Logo} alt="" onClick={()=>handleHome()} />
        </div>
        <div className="flex flex-col p-16  m-auto opacity-80 w-96 bg-black text-white  ">
          <h1 className="text-4xl font-bold mb-4 ">Sign in</h1>
          <input
            className="pl-2  pt-2 pb-2 pr-12 bg-black text-white border-2 border-white mb-4"
            type="email"
            name=""
            id=""
            placeholder="Email or phone number"
          />
          <input
            className="pl-2  pt-2 pb-2 pr-12 bg-black text-white border-2 border-white mb-4"
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
          <button className="w-full bg-red-600   ">Sign in </button>
          <a href="/forget" className="text-center mt-2">
            Forget Password
          </a>

          <div className="flex flex-row gap-4 mt-20 text-xs">
            <input type="checkbox" name="rem" id="rem" />
            <label htmlFor="rem">Remember me </label>
          </div>
          <h4 className="text mt-2 text-white">
            New to Netflix? <Link className="font-bold">Sign up now.</Link>
          </h4>
          <p className="mt-2 text-sm text-wrap  ">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <Link className="text-blue-700 underline">Learn more.</Link>
          </p>
        </div>

      <Footer/>        

      </div>
    </div>
  );
};

export default Login;
