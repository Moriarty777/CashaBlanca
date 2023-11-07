import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo/Logo.png"

export default function Footer() {
  return (
    <div className="w-full h-[189px] px-6 pt-16 pb-2 left-[-2px] top-[1200px] absolute bg-slate-100 flex-col justify-start items-center gap-[123px] inline-flex">
    <div className="w-[960px] justify-between items-start inline-flex">
    <div className="w-80 flex-col justify-start items-start gap-6 inline-flex">
    <div className="pt-4 justify-start items-start inline-flex">
    <img className="w-[146px] h-[83px]" src={logo} alt='Logo' />
    </div>
    </div>
    <div className="w-[257px] text-center text-black text-2xl font-normal font-['Inter'] leading-9">Copyright © 2023 CashaBlanca</div>
    </div>
    </div>

  );
}