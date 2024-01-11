import { useState } from 'react';
import { PiggyBank } from 'lucide-react';
import Modal from '../components/Modal'
import { categories } from '../constants/index';


const Dashboard = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleModal = (category) => {
    setModalOpen(!isModalOpen);
    setSelectedCategory(category);
  };
  
  

  return (
    <>
    
    <section className="mx-auto max-w-screen-3xl bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div className="mx-4 flex flex-1 justify-center text-3xl font-bold text-emerald-500">Welcome Back, Eric</div>
    
    <div className="mx-4 my-5 flex flex-1 justify-center text-3xl font-bold">Summary</div>


    <div className="flex flex-1 items-center justify-between gap-7">
      <div className="flex w-1/4 flex-col items-center justify-center gap-2 rounded-md bg-slate-200 p-4 text-lg font-bold shadow-lg">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z" clipRule="evenodd" className="text-green-600" />
          </svg>

          <div className="text-xl">Income</div>
        </div>
        <div className="text-center text-xl">1000</div>
      </div>

      <div className="flex w-1/4 flex-col items-center justify-center gap-2 rounded-md bg-slate-200 p-4 text-lg font-bold shadow-lg">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M1.22 5.222a.75.75 0 011.06 0L7 9.942l3.768-3.769a.75.75 0 011.113.058 20.908 20.908 0 013.813 7.254l1.574-2.727a.75.75 0 011.3.75l-2.475 4.286a.75.75 0 01-1.025.275l-4.287-2.475a.75.75 0 01.75-1.3l2.71 1.565a19.422 19.422 0 00-3.013-6.024L7.53 11.533a.75.75 0 01-1.06 0l-5.25-5.25a.75.75 0 010-1.06z" clipRule="evenodd" className="text-red-600" />
          </svg>
          <div className="text-xl">Expense</div>
        </div>
        <div className="text-center text-xl">300</div>
      </div>

      <div className="flex w-1/4 flex-col items-center justify-center gap-2 rounded-md bg-slate-200 p-4 text-lg font-bold shadow-lg">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-teal-600">
            <path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v.258a33.186 33.186 0 016.668.83.75.75 0 01-.336 1.461 31.28 31.28 0 00-1.103-.232l1.702 7.545a.75.75 0 01-.387.832A4.981 4.981 0 0115 14c-.825 0-1.606-.2-2.294-.556a.75.75 0 01-.387-.832l1.77-7.849a31.743 31.743 0 00-3.339-.254v11.505a20.01 20.01 0 013.78.501.75.75 0 11-.339 1.462A18.558 18.558 0 0010 17.5c-1.442 0-2.845.165-4.191.477a.75.75 0 01-.338-1.462 20.01 20.01 0 013.779-.501V4.509c-1.129.026-2.243.112-3.34.254l1.771 7.85a.75.75 0 01-.387.83A4.98 4.98 0 015 14a4.98 4.98 0 01-2.294-.556.75.75 0 01-.387-.832L4.02 5.067c-.37.07-.738.148-1.103.232a.75.75 0 01-.336-1.462 32.845 32.845 0 016.668-.829V2.75A.75.75 0 0110 2zM5 7.543L3.92 12.33a3.499 3.499 0 002.16 0L5 7.543zm10 0l-1.08 4.787a3.498 3.498 0 002.16 0L15 7.543z" clipRule="evenodd" />
          </svg>

          <div className="text-xl">Amount Left</div>
        </div>

        <div className="text-center text-xl">700</div>
      </div>

      <div className="group cursor-pointer relative flex w-1/4 flex-col items-center justify-center gap-2 rounded-md bg-gradient-to-r from-yellow-200 to-yellow-500 p-4 text-lg font-bold shadow-lg shadow-yellow-500">
        <div className="flex items-center gap-2">
          <PiggyBank className='text-pink-500 font-bold' />
          <div className="text-xl">Savings</div>
        </div>
        <div className="text-center text-white font-bold text-xl">1600</div>
        <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 z-10 px-4 py-2 rounded-md shadow-md text-white bg-gray-800 text-xs font-bold transition-all duration-150 scale-0 group-hover:scale-100">
          <p className="text-sm">Laptop - $200 Saved</p>
          <p className="text-sm">PS5 - $500 Saved</p>
          <p className="text-sm">Switch - $900 Saved</p>
        </div>
      </div>

    </div>

    {/* Categories */}
  <div className="mb-4 mt-20 flex flex-1 items-center justify-center">
    {/* <button className=" rounded-md border border-blue-500 px-4 py-2 text-blue-500" onClick={toggleModal}>Add Category</button> */}
    <div className=" flex flex-1 justify-center text-3xl font-bold">Categories</div>
  </div>


  <div className="grid gap-10 md:grid-cols-3 mx-10">

    {
    categories.map((category) => (

    <div key={category.title} className="my-10 max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
    {/* <!-- Card Content --> */}
    <div className="flex items-end justify-between bg-gray-50 p-4">
      <h2 className="text-xl font-semibold text-gray-800">{category.title}</h2>
      <span className="text-sm font-medium text-blue-700 dark:text-white">{category.progress}%</span>
    </div>
    {/* <!-- Progress Bar --> */}
    <div className="relative">
      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
      <div className={`h-2.5 w-[${category.progress}%] rounded-full ${category.progress < 50 ? 'bg-green-400' : category.progress >= 50 && category.progress < 70 ? 'bg-yellow-400' : 'bg-red-400'}`}></div>


      </div>
      <div className="absolute right-[2%] mt-5 hidden rounded-xl bg-gray-500 bg-opacity-50 p-1 text-center text-white group-hover:block">$ 720/1000</div>
    </div>
    {/* <!-- Card Footer --> */}
    <div className='flex flex-1 items-center justify-between'>

    <div className="bg-gray-100 p-5 text-gray-500 hover:text-gray-700 cursor-pointer">View Expenses</div>
    <button className="bg-gray-100 p-5 text-blue-500 cursor-pointer hover:text-blue-700 " onClick={() => toggleModal(category.title)}>Add Expense</button>
    </div>
    </div>

    ))
    }


  </div>

  <div className="mt-20 flex flex-1 justify-center text-3xl font-bold">Goal Progress...</div>

  <div className="flex flex-1 justify-center items-center mx-10">
    {/* <!-- Laptop --> */}
    <div className="my-10 max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
      <div>
        <img src="https://shorturl.at/ctM27" alt="" className="" />
      </div>
      {/* <!-- Card Content --> */}
      <div className="flex items-end justify-between bg-slate-100 p-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-amber-700 hover:text-amber-800">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>

        <span className="text-sm font-medium text-blue-700 dark:text-white">20%</span>
      </div>
      {/* <!-- Progress Bar with Tooltip --> */}
      <div className="relative">
        <div className="h-2.5 w-full rounded-full bg-gray-200">
          <div className="h-2.5 w-[20%] rounded-full bg-rose-400"></div>
        </div>
      </div>
      {/* <!-- Card Footer --> */}
      <div className="flex justify-between bg-slate-100 p-5 text-gray-400"></div>
    </div>

    
  </div>


  </section>

{/* Modal toggle */}


{/* Main modal */}
{isModalOpen && (
  <Modal selectedCategory={selectedCategory} onClose={toggleModal} />
)}


    
  </>

  )
}

export default Dashboard