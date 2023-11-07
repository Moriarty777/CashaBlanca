import React from 'react';
import logo from "../assets/logo/Logo.png"

export default function Header() {
  return (
    <div className="w-full h-[69px] px-6 left-[-2px] top-0 absolute bg-gradient-to-b from-slate-100 to-slate-300 justify-center items-start inline-flex">
      <div className="h-[75px] justify-center items-center flex">
        <div className="h-[75px] justify-between items-center flex">
          <div className="justify-start items-start flex">
            <img className="w-[142px] h-[56.88px]" src={logo} alt="Header Logo" />
          </div>
          <div className="justify-start items-center gap-8 flex">
            <div className="px-3 py-6 justify-start items-start flex">
              <div className="text-black text-lg font-bold font-['Lato'] uppercase leading-[27px]">Learn</div>
            </div>
            <div className="px-3 py-6 justify-start items-start flex">
              <div className="text-black text-lg font-bold font-['Lato'] uppercase leading-[27px]">Features</div>
            </div>
            <div className="px-3 py-6 justify-start items-start flex">
              <div className="text-black text-lg font-bold font-['Lato'] uppercase leading-[27px]">Goal</div>
            </div>
            <div className="px-5 py-2 bg-teal-700 justify-center items-center gap-2 flex">
              <div className="text-white text-lg font-bold font-['Lato'] uppercase leading-[25.20px]">GET STARTED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
