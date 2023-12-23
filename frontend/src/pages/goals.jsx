const Goals = () => {
  return (

<>
<div className="mb-4 flex flex-1 items-center justify-between">
  <div className="mx-auto my-5 flex flex-1 justify-center text-3xl font-bold">Your Goals...</div>

  <button className="mr-6 rounded-xl bg-blue-400 px-4 py-2 text-white shadow-lg hover:bg-blue-700">Add Goals</button>
</div>
{/* <div className="mt-20 flex flex-1 justify-center text-3xl font-bold">Your Goals...</div> */}

<div className="grid gap-10 md:grid-cols-3 mx-[10%]">
  {/* <!-- Laptop --> */}
  <div className="my-10 max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
    <div>
      <img src="https://shorturl.at/fgK68" alt="" className="w-full h-56 object-fill" />
    </div>
    {/* <!-- Card Content --> */}
    <div className="flex items-end justify-between bg-slate-100 p-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-amber-700 hover:text-amber-800">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>

      <h2 className="text-xl font-semibold text-gray-800">Laptop</h2>
      <span className="text-sm font-medium text-blue-700 dark:text-white">20%</span>
    </div>
    {/* <!-- Progress Bar with Tooltip --> */}
    <div className="relative">
      <div className="h-2.5 w-full rounded-full bg-gray-200">
        <div className="h-2.5 w-[20%] rounded-full bg-rose-400"></div>
      </div>
    </div>
    {/* <!-- Card Footer --> */}
    <div className="flex justify-center border-t bg-slate-100 p-5 text-gray-400">
      <div className="group">
        <div className="font-bold text-md cursor-pointer">View Stats</div>
        <div
          className="absolute mt-10 mx-12 transform -translate-x-1/2 z-10 px-4 py-2 rounded-md shadow-md text-white bg-gray-800 text-xs font-bold transition-all duration-150 scale-0 group-hover:scale-100"
        >
          <p className="text-sm">To achieve your goal in approximately 4 weeks:</p>
          <p className="text-sm">- Save approximately $250.00 per week.</p>
          <p className="text-sm">- Save approximately $35.71 per day.</p>
        </div>
      </div>
    </div>




    
  </div>

  {/* <!-- PS5 --> */}
  <div className="my-10 max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
    <div>
      <img src="https://shorturl.at/MVW04" alt="" className="w-full h-56 object-fill" />
    </div>
    {/* <!-- Card Content --> */}
    <div className="flex items-end justify-between bg-slate-100 p-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-gray-400 hover:text-gray-600">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>

      <h2 className="text-xl font-semibold text-gray-800">PS 5</h2>
      <span className="text-sm font-medium text-blue-700 dark:text-white">50%</span>
    </div>
    {/* <!-- Progress Bar with Tooltip --> */}
    <div className="relative">
      <div className="h-2.5 w-full rounded-full bg-gray-200">
        <div className="h-2.5 w-[50%] rounded-full bg-amber-300"></div>
      </div>
    </div>

    {/* <!-- Card Footer --> */}
    <div className="flex justify-center border-t bg-slate-100 p-5 text-gray-400">
      <div className="group">
        <div className="font-bold text-md cursor-pointer">View Stats</div>
        <div
          className="absolute mt-10 mx-12 transform -translate-x-1/2 z-10 px-4 py-2 rounded-md shadow-md text-white bg-gray-800 text-xs font-bold transition-all duration-150 scale-0 group-hover:scale-100"
        >
          <p className="text-sm">To achieve your goal in approximately 4 weeks:</p>
          <p className="text-sm">- Save approximately $250.00 per week.</p>
          <p className="text-sm">- Save approximately $35.71 per day.</p>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Switch --> */}
  <div className="my-10 max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
    <div>
      <img src="https://shorturl.at/lqrvL" alt="" className="w-full h-56 object-fill" />
    </div>
    {/* <!-- Card Content --> */}
    <div className="flex items-end justify-between bg-slate-100 p-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-yellow-500 hover:text-yellow-600">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>

      <h2 className="text-xl font-semibold text-gray-800">Switch</h2>
      <span className="text-sm font-medium text-blue-700 dark:text-white">90%</span>
    </div>
    {/* <!-- Progress Bar with Tooltip --> */}
    <div className="relative">
      <div className="h-2.5 w-full rounded-full bg-gray-200">
        <div className="h-2.5 w-[90%] rounded-full bg-lime-400"></div>
      </div>
    </div>

    {/* <!-- Card Footer --> */}
    <div className="flex justify-center border-t bg-slate-100 p-5 text-gray-400">
      <div className="group">
        <div className="font-bold text-md cursor-pointer">View Stats</div>
        <div
          className="absolute mt-10 mx-12 transform -translate-x-1/2 z-10 px-4 py-2 rounded-md shadow-md text-white bg-gray-800 text-xs font-bold transition-all duration-150 scale-0 group-hover:scale-100"
        >
          <p className="text-sm">To achieve your goal in approximately 4 weeks:</p>
          <p className="text-sm">- Save approximately $250.00 per week.</p>
          <p className="text-sm">- Save approximately $35.71 per day.</p>
        </div>
      </div>
    </div>
    
  </div>
</div>

</>

  )
}

export default Goals