import { useState } from "react";
import { PiggyBank, TrendingUp, TrendingDown, Scale } from "lucide-react";
import Modal from "../components/Modal";
import { categories, summary } from "../constants/index";

const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [isExpenseView, setIsExpenseView] = useState(false);

  const [addIncome, setaddIncome] = useState(false);

  const [isIncomeView, setIsIncomeView] = useState(false);


  const toggleModal = (category, isExpenseView = false, addIncome=false, isIncomeView=false) => {
    setIsExpenseView(isExpenseView);
    setaddIncome(addIncome);
    setIsIncomeView(isIncomeView);
    setModalOpen(!isModalOpen);
    setSelectedCategory(category);
  };

  return (
    <>
      <section className="mx-auto max-w-screen-3xl bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-4 flex flex-1 justify-center text-3xl font-bold text-emerald-500">
          Welcome Back, Eric
        </div>

        <div className="mx-4 my-5 flex flex-1 justify-center text-3xl font-bold">
          Summary
        </div>

        <div className="flex flex-1 items-center justify-between gap-7">
          {summary.map((item) => (
            <div
              key={item.title}
              className="flex w-1/4 flex-col items-center justify-center gap-2 rounded-md bg-slate-200 p-4 text-lg font-bold shadow-xl min-h-[17vh]"
            >
              <div key={item.iconName} className="flex items-center gap-2">
                {item.iconName === "TrendingUp" && (
                  <TrendingUp className="text-green-600 font-bold" />
                )}
                {item.iconName === "TrendingDown" && (
                  <TrendingDown className="text-red-600 font-bold" />
                )}
                {item.iconName === "Scale" && (
                  <Scale className="text-teal-600 font-bold" />
                )}
                <div className="text-xl">{item.title}</div>
              </div>
              <div className="text-center text-xl">{item.amount}</div>
              {
                item.title == "Income" && (
                  <div className="flex flex-1 items-center justify-between gap-24">
                  <div
                      className="text-blue-500 cursor-pointer hover:text-blue-700 "
                      onClick={() => toggleModal(null,false,true,false)}
                    >
                      Add Income
                    </div>
                    <div
                      className="text-gray-500 hover:text-gray-700 cursor-pointer"
                      onClick={() => toggleModal(null,false,false,true)}
                    >
                      View Income
                    </div>
                  </div>

                )
              }
            </div>
          ))}

          <div className="group cursor-pointer relative flex w-1/4 flex-col items-center justify-center gap-2 rounded-md bg-gradient-to-r from-yellow-200 to-yellow-500 p-4 text-lg font-bold shadow-lg shadow-yellow-500 min-h-[17vh]">
            <div className="flex items-center gap-2">
              <PiggyBank className="text-pink-500 font-bold" />
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
          <div className=" flex flex-1 justify-center text-3xl font-bold">
            Categories
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3 mx-10">
          {categories.map((category) => (
            <div
              key={category.title}
              className="my-10 max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg"
            >
              {/* <!-- Card Content --> */}
              <div className="flex items-end justify-between bg-gray-50 p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h2>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  {category.progress}%
                </span>
              </div>
              {/* <!-- Progress Bar --> */}
              <div className="relative">
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className={`h-2.5 w-[72%] rounded-full ${
                      category.progress < 50
                        ? "bg-green-400"
                        : category.progress >= 50 && category.progress < 70
                        ? "bg-yellow-400"
                        : "bg-red-400"
                    }`}
                  ></div>
                  {/* ${Number(category.progress)} */}
                </div>
              </div>
              {/* <!-- Card Footer --> */}
              <div className="flex flex-1 items-center justify-between">
              <div
                  className="bg-gray-100 p-4 text-blue-500 cursor-pointer hover:text-blue-700 "
                  onClick={() => toggleModal(category.title,false,false,false)}
                >
                  Add Expense
                </div>
                <div
                  className="bg-gray-100 p-4 text-gray-500 hover:text-gray-700 cursor-pointer"
                  onClick={() => toggleModal(category.title, true, false, false)}
                >
                  View Expenses
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-1 justify-center text-3xl font-bold">
          Goal Progress...
        </div>

        <div className="flex flex-1 justify-center items-center mx-10">
          {/* <!-- Laptop --> */}
          <div className="my-10 max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            <div>
              <img src="https://shorturl.at/ctM27" alt="" className="" />
            </div>
            {/* <!-- Card Content --> */}
            <div className="flex items-end justify-between bg-slate-100 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 text-amber-700 hover:text-amber-800"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="text-sm font-medium text-blue-700 dark:text-white">
                20%
              </span>
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
        <Modal
          selectedCategory={selectedCategory}
          onClose={toggleModal}
          isExpenseView={isExpenseView} addIncome={addIncome} isIncomeView={isIncomeView}
        />
      )}
    </>
  );
};

export default Dashboard;
