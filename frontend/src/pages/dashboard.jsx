import { useState } from 'react';
import { PiggyBank } from 'lucide-react';


const Dashboard = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
  <div className="mb-4 mt-20 flex flex-1 items-center justify-between">
    <button className=" rounded-md border border-blue-500 px-4 py-2 text-blue-500" onClick={toggleModal}>Add Category</button>
    <div className=" flex flex-1 justify-center text-3xl font-bold">Categories</div>
    
  </div>

  {/* <!-- Grocery --> */}
  <div className="grid gap-10 md:grid-cols-3 mx-10">
    <div className="my-10 max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
      {/* <!-- Card Content --> */}
      <div className="flex items-end justify-between bg-gray-50 p-4">
        <h2 className="text-xl font-semibold text-gray-800">Grocery</h2>
        <span className="text-sm font-medium text-blue-700 dark:text-white">72%</span>
      </div>
      {/* <!-- Progress Bar with Tooltip --> */}
      <div className="relative">
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div className="h-2.5 w-[72%] rounded-full bg-red-400"></div>
        </div>
        <div className="absolute right-[2%] mt-5 hidden rounded-xl bg-gray-500 bg-opacity-50 p-1 text-center text-white group-hover:block">$ 720/1000</div>
      </div>
      {/* <!-- Card Footer --> */}
      <div className='flex flex-1 items-center justify-between'>

      <div className="bg-gray-100 p-5 text-gray-400 hover:text-gray-500 cursor-pointer">View Expenses</div>
      <div className="bg-gray-100 p-5 text-blue-300 cursor-pointer hover:text-blue-500">Add Expense</div>


      </div>
    </div>

    {/* <!-- Bills & Utilities --> */}
    <div className="my-10 max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
      {/* <!-- Card Content --> */}
      <div className="flex items-end justify-between bg-gray-50 p-4">
        <h2 className="text-xl font-semibold text-gray-800">Bills & Utilities</h2>
        <span className="text-sm font-medium text-blue-700 dark:text-white">35%</span>
      </div>
      {/* <!-- Progress Bar with Tooltip --> */}
      <div className="relative">
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div className="h-2.5 w-[35%] rounded-full bg-green-400"></div>
        </div>
        <div className="absolute right-[2%] mt-5 hidden rounded-xl bg-gray-500 bg-opacity-50 p-1 text-center text-white group-hover:block">$ 450/1000</div>
      </div>
      {/* <!-- Card Footer --> */}
      <div className='flex flex-1 items-center justify-between'>

      <div className="bg-gray-100 p-5 text-gray-400 hover:text-gray-500 cursor-pointer">View Expenses</div>
      <div className="bg-gray-100 p-5 text-blue-300 cursor-pointer hover:text-blue-500">Add Expense</div>


      </div>
    </div>

    {/* <!-- Other --> */}
    <div className="my-10 max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
      {/* <!-- Card Content --> */}
      <div className="flex items-end justify-between bg-gray-50 p-4">
        <h2 className="text-xl font-semibold text-gray-800">Other</h2>
        <span className="text-sm font-medium text-blue-700 dark:text-white">55%</span>
      </div>
      {/* <!-- Progress Bar with Tooltip --> */}
      <div className="relative">
        <div className="h-2.5 w-full rounded-full bg-gray-200">
          <div className="h-2.5 w-[55%] rounded-full bg-yellow-400"></div>
        </div>
        <div className="absolute right-[2%] mt-5 hidden rounded-xl bg-gray-500 bg-opacity-50 p-1 text-center text-white group-hover:block">$ 550/1000</div>
      </div>
      {/* <!-- Card Footer --> */}
      <div className='flex flex-1 items-center justify-between'>

      <div className="bg-gray-100 p-5 text-gray-400 hover:text-gray-500 cursor-pointer">View Expenses</div>
      <div className="bg-gray-100 p-5 text-blue-300 cursor-pointer hover:text-blue-500">Add Expense</div>


      </div>
    </div>
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
  <div>
    {/* OverlLay */}
    <div
      onClick={toggleModal}
      className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-50"></div>

  <div
    tabIndex="-1"
    aria-hidden="true"
    className="fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden">

    <div className="relative p-4 w-full max-w-md max-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Create New Product
          </h3>
          <button
            type="button"
            onClick={toggleModal}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>
        {/* Modal body */}

        <form onSubmit={handleSubmit} className="p-4 md:p-5">
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="$200"
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option value="" disabled selected>
                Select category
              </option>
              <option value="TV/Monitors">Grocery</option>
              <option value="PC">Gas</option>
              <option value="Gaming/Console">Restaurants</option>
              <option value="Phones">Clothes</option>
              <option value="Phones">Misc</option>
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Product Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write product description here"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSubmit}
        >
          <svg
            className="me-1 -ms-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          Add new product
        </button>
      </form>



        </div>
      </div>
    </div>

  </div>
  )}

    
  </>

  )
}

export default Dashboard