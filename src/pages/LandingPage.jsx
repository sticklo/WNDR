import React from "react";
import Logo from "../assets/images/Logo.svg";
import Wonder_cube from "../assets/images/Wonder_cube.svg";
import { Link } from "react-router-dom";
import "../App.css";

function LandingPage() {
  return (
    <div className="landing min-h-[100vh] text-white">
      <header className="pt-4">
        <Link to="/landing">
          <img src={Logo} alt="Logo" className="w-[155px] pl-8" />
        </Link>
      </header>

      <div className="flex flex-col h-[81vh] lg:h-[90vh] justify-center items-center ">
        <div className="test">
        <div className="text-center mb-4">
          <h1 className="text-[1.9rem] md:text-[3.8rem] font-bold">
            A Place Where
          </h1>
          <h1 className="text-[1.9rem] md:text-[3.8rem] font-bold ">
            Old Meets New
          </h1>
          <hr className="hr-border" />
        </div>
        <div>
          <img
            src={Wonder_cube}
            alt="Logo"
            className=" block m-auto  w-[185px] rotate"
          />
        </div>
        </div>
        <h2 className="text-center font-bold text-[2.2rem] mb-8 bg-gradient-to-r from-[#0e20ec] to-[#d400a1] landing__coming_soon ">
          Coming Soon
        </h2>
        <Link to="/join-waitlist">
          <button className="btn-waitlist  px-8 py-2">Get early access</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
