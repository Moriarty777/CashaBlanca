import React from 'react';
import Feature from '../assets/images/illustration.png'
import PlaceHolder from "../assets/images/placeholder.png"

export default function LandingPage() {
  return (
    
    <div className="w-full h-full relative bg-slate-100">
    {/* <!-- Header Section --> */}
    <div className="w-[1440px] h-[598px] px-6 pt-16 bg-slate-100 justify-center items-start gap-20 inline-flex">
    <div className="h-[534px] justify-start items-center gap-20 flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-[445px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-black text-[56px] font-bold font-['Inter'] leading-[67.20px]">Meet CashaBlanca: Your Financial Buddy</div>
                <div className="self-stretch text-center text-black text-[32px] font-medium font-['Inter'] leading-[38.40px]">Track, set goals, and unlock your financial potential—all in one place.</div>
                <div className="self-stretch text-neutral-800 text-xl font-normal font-['Inter'] leading-[30px]">From managing your daily expenses to reaching your long-term dreams, CashaBlanca is designed with you in mind. Dive into curated lessons, stay motivated with engaging challenges, and watch your financial growth story unfold.</div>
            </div>
            <div className="pt-4 justify-start items-start gap-4 inline-flex">
                <div className="px-6 py-3 bg-teal-700 justify-center items-center gap-2 flex">
                    <div className="text-white text-lg font-medium font-['Inter'] leading-[25.20px]">GET STARTED</div>
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 h-[392.90px] justify-start items-start gap-2.5 flex">
            <div className="grow shrink basis-0 flex-col justify-center items-center inline-flex">
                <img className="self-stretch" src={Feature} alt='Feature' />
            </div>
        </div>
    </div>
</div>

    {/* <!-- Main Content Section --> */}
    <div className="w-[1440px] h-[629px] px-6 pt-16 bg-slate-100 flex-col justify-start items-center gap-16 inline-flex">
    <div className="h-[565px] flex-col justify-start items-center gap-16 flex">
        <div className="h-[189px] flex-col justify-start items-center gap-4 flex">
            <div className="self-stretch text-center text-black text-[32px] font-bold font-['Inter'] leading-[38.40px]">Team section</div>
            <div className="self-stretch text-center text-black text-[32px] font-medium font-['Inter'] leading-[38.40px]">Our Features</div>
            <div className="self-stretch text-center text-black text-lg font-normal font-['Inter'] leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.</div>
        </div>
        <div className="self-stretch justify-start items-start gap-12 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-[180px] flex-col justify-start items-start gap-2.5 flex">
                    <img className="self-stretch grow shrink basis-0" src={PlaceHolder} />
                </div>
                <div className="self-stretch h-[132px] p-6 bg-white flex-col justify-start items-start flex">
                    <div className="self-stretch text-black text-2xl font-semibold font-['Inter'] leading-9">Budget Analysis</div>
                    <div className="self-stretch text-black text-base font-normal font-['Inter'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-[180px] flex-col justify-start items-start gap-2.5 flex">
                    <img className="self-stretch grow shrink basis-0" src={PlaceHolder} />
                </div>
                <div className="self-stretch h-[132px] p-6 bg-white flex-col justify-start items-start flex">
                    <div className="self-stretch text-black text-2xl font-semibold font-['Inter'] leading-9">Reaching Financial Goals</div>
                    <div className="self-stretch text-black text-base font-normal font-['Inter'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-[180px] flex-col justify-start items-start gap-2.5 flex">
                    <img className="self-stretch grow shrink basis-0" src={PlaceHolder} />
                </div>
                <div className="self-stretch h-[132px] p-6 bg-white flex-col justify-start items-start flex">
                    <div className="self-stretch text-black text-2xl font-semibold font-['Inter'] leading-9">Learn new things</div>
                    <div className="self-stretch text-black text-base font-normal font-['Inter'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
            </div>
        </div>
    </div>
</div>


</div>


  );
}

