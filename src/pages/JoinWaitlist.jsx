import React from "react";
import Logo from "../assets/images/Logo.svg";
import Bolt from "../assets/images/Bolt.svg";
import { Link } from "react-router-dom";

function JoinWaitlist() {
  return (
    <div className="bg-black text-white min-h-[100vh]">
      <div className=" pb-[2rem] lg:pb-[0] lg:w-[50.7%] m-auto">
        <header className="pt-[6rem] mb-[6rem] ">
          <Link to="/landing">
            <img
              src={Logo}
              alt="Logo"
              className=" block m-auto  w-[185px]"
            />
          </Link>
        </header>

        <div className="flex flex-col items-center gap-y-3.5 lg:flex-row lg:justify-between lg:items-center ">
          <div className="flex flex-col items-center lg:items-start  w-[7.912rem]">
            <img src={Bolt} alt="Bolt" className="w-[3rem] mb-[1.5rem]" />
            <h1 className="text-center lg:text-left font-bold text-[1.4rem] md:text-[1.8rem] leading-[2.24rem] mb-[1.5rem]">
              Join the waitlist
            </h1>
            <p className="font-bold text-[0.8rem]">
              we'll invite you soon
            </p>
          </div>

          <form className="bg-[#161823] flex flex-col lg:w-[30.912rem] pt-[1.75rem] pb-[5.316rem] px-[4rem] rounded-[5px]">
            <h1 className="font-bold text-[1.5rem] md:text-[1.8rem] leading-[4.24rem]">
              Get early access
            </h1>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="full_name"
                placeholder="Full name"
                className="rounded-[2.5px] px-[1.4rem] py-[0.7rem] text-[black]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-[2.5px] px-[1.4rem] py-[0.7rem] mb-[1.5rem] text-[black]"
              />
              <button className="bg-gradient-to-r from-[#0e20ec] to-[#d400a1] py-[0.7rem] ">
                Join waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JoinWaitlist;
