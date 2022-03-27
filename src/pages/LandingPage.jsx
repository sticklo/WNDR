import React from "react";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import "../App.css";


function LandingPage() {
  return (
    <div className="landing min-h-[100vh] text-white">
      <header className="pt-4">
        <Link to="/landing"><img src={Logo} alt="Logo" className="w-[155px]" /></Link>
      </header>

      <div className="flex flex-col h-[81vh] lg:h-[90vh] justify-center items-center ">
        <div className="text-center mb-4">
          <h1 className="text-[2.8rem] md:text-[3.8rem] font-bold">A Place where Old</h1>
          <h1 className="text-[2.8rem] md:text-[3.8rem] font-bold">meets New</h1>
        </div>
        <h2 className="text-center font-bold text-[2.2rem] mb-8 bg-gradient-to-r from-[#101EC4] to-[#1599C2] landing__coming_soon ">
          Coming Soon
        </h2>
        <button className="border-2 border-white px-8 py-2">
          <Link to="/join-waitlist" >Get early access</Link> 
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
