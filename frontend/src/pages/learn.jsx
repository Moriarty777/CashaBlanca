import { useState } from "react";
import Icon from "../components/Icon";
import ReactPlayer from "react-player/youtube";
import {
  facts,
  financialKnowledgeCategories,
  categoryData,
} from "../constants/index";

const CategoryCard = ({
  title,
  content,
  gradient,
  shadowColor,
  buttonColor,
  toggleModal,
}) => {
  return (
    <div className="flex items-center justify-center bg-slate-100">
      <div className="group h-96 w-80 [perspective:1000px]">
        <div
          className={`relative h-full w-full rounded-xl shadow-xl ${shadowColor} transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] bg-gradient-to-r ${gradient}`}
        >
          <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center">
            <div className="text-2xl font-bold text-white">{title}</div>
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/30 px-7 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <ol className="text-lg font-semibold">
                {content.map((item) => (
                  <>
                    <li key={item}>{item}</li>
                    <br />
                  </>
                ))}
              </ol>
              <br />
              <button
                className={`mt-2 rounded-md bg-${buttonColor} px-2 py-1 text-sm hover:bg-gray-400`}
                onClick={() => toggleModal(title)}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Learn = () => {
  // facts
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const totalFacts = facts.length;

  const showNextFact = () => {
    if (currentFactIndex < totalFacts - 1) {
      setCurrentFactIndex(currentFactIndex + 1);
    }
  };

  const showPrevFact = () => {
    if (currentFactIndex > 0) {
      setCurrentFactIndex(currentFactIndex - 1);
    }
  };

  //modal logic
  const [isModalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState("");

  const toggleModal = (category) => {
    setModalOpen(!isModalOpen);
    setCategory(category);
  };

  const selectedCategoryData = categoryData[category];

  //Calculator
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState("");
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateInterest = () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      alert("Invalid amount");
      return;
    }

    if (!years || isNaN(Number(years)) || Number(years) <= 0) {
      alert("Invalid years");
      return;
    }

    if (!rate || isNaN(Number(rate)) || Number(rate) < 0) {
      alert("Invalid interest rate");
      return;
    }

    const interestRate = Number(rate) / 100;
    const totalInterest =
      Number(amount) * Math.pow(1 + interestRate, Number(years)) -
      Number(amount);
    const calculatedTotalAmount = Number(amount) + totalInterest;

    setTotalAmount(calculatedTotalAmount);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        {/* Introduction Section */}
        <section className="mb-8 text-center text-black bg-blue-100 p-8 rounded-lg shadow-lg shadow-blue-400">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Learn Page</h1>
          <p className="text-lg">
            Discover the essentials of personal finance with our Learn page.
            From budgeting basics to investment insights, we&aposve got you
            covered. Dive into quizzes, explore interactive tools, and stay
            updated with interesting financial facts. Empower yourself for a
            secure financial future.
          </p>
        </section>

        <hr />

        {/* Categories of Financial Knowledge */}
        <section className="mb-10 mt-8">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Categories of Financial Knowledge
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {financialKnowledgeCategories.map((category) => (
              <CategoryCard
                key={category.title}
                {...category}
                toggleModal={toggleModal}
              />
            ))}
          </div>
        </section>

        <hr />

        {/* Interactive Learning Elements */}
        <section className="mb-8 mt-10">
          <h2 className="text-4xl text-center font-bold mb-4">
            Interactive Learning Elements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Quizzes Card */}
            <div>{/* Your Card component goes here */}</div>

            {/* Calculators Card */}
            <div>
              <div className="flex flex-col bg-white rounded-lg shadow-md p-4 w-full space-y-4">
                <h1 className="text-xl font-bold text-gray-800">
                  Financial Calculator
                </h1>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <label
                      htmlFor="amount"
                      className="text-sm font-medium text-gray-700 pr-2"
                    >
                      Initial Amount:
                    </label>
                    <div className="flex-grow">
                      <input
                        type="number"
                        id="amount"
                        className="bg-gray-100 rounded-sm px-2 py-1 w-full focus:outline-none h-8"
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <label
                      htmlFor="years"
                      className="text-sm font-medium text-gray-700 pr-2"
                    >
                      Number of Years:
                    </label>
                    <div className="flex-grow">
                      <input
                        type="number"
                        id="years"
                        className="bg-gray-100 rounded-sm px-2 py-1 w-full focus:outline-none h-8"
                        onChange={(e) => setYears(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <label
                      htmlFor="rate"
                      className="text-sm font-medium text-gray-700 pr-2"
                    >
                      Interest Rate:
                    </label>
                    <div className="flex-grow">
                      <input
                        type="number"
                        id="rate"
                        className="bg-gray-100 rounded-sm px-2 py-1 w-full focus:outline-none h-8"
                        onChange={(e) => setRate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={calculateInterest}
                  className="bg-blue-500 text-white font-medium rounded-sm px-4 py-2 hover:bg-blue-600"
                >
                  Calculate Total Amount
                </button>
                {totalAmount && (
                  <p className="text-md  font-bold text-gray-700">
                    Total amount after {years} years: ${totalAmount.toFixed(2)}
                  </p>
                )}
              </div>
            </div>

            {/* Interactive Infographics Card */}
            <div>{/* Your Card component goes here */}</div>
          </div>
        </section>
        <hr />
        {/* Did You Know Section */}
        <section>
          <h2 className="text-4xl text-center font-bold mb-4">
            Did You Know Section
          </h2>
          {/* Your Did You Know component goes here */}
          <div className="mt-10 flex items-center justify-center bg-gray-100">
            <div className="bg-white p-7 rounded-xl shadow-lg w-96">
              {currentFactIndex < totalFacts ? (
                <div>
                  <h2 className="text-xl text-center font-semibold mb-4">
                    Fact {currentFactIndex + 1}
                  </h2>
                  <p className="text-lg mb-4">{facts[currentFactIndex].text}</p>
                </div>
              ) : (
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-4">
                    All Facts Completed!
                  </h2>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={showPrevFact}
                  style={{
                    visibility: currentFactIndex === 0 ? "hidden" : "visible",
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-start hover:bg-blue-600"
                >
                  <Icon name="ArrowLeft" size={20} color="white" />
                </button>

                <button
                  onClick={showNextFact}
                  style={{
                    visibility:
                      currentFactIndex === totalFacts - 1
                        ? "hidden"
                        : "visible",
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-end hover:bg-blue-600"
                >
                  <Icon name="ArrowRight" size={20} color="white" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* modal logic */}
      {isModalOpen && selectedCategoryData && (
        <div>
          {/* OverlLay */}
          <div
            onClick={toggleModal}
            className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-50"
          ></div>

          <div
            tabIndex="-1"
            aria-hidden="true"
            className="fixed z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full overflow-y-auto overflow-x-hidden"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Modal content */}
              <div
                className={`relative rounded-lg shadow dark:bg-gray-700 bg-gradient-to-r ${selectedCategoryData.gradient}`}
              >
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h1 className="text-2xl font-semibold text-white dark:text-white justify-center ml-[50px]">
                    {selectedCategoryData.title}
                  </h1>
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
                {/* Modal body */}

                <div className="flex flex-col p-4 text-white">
                  <div className="shadow-xl">
                    <ReactPlayer
                      url={selectedCategoryData.url}
                      controls
                      width="100%"
                    />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold ml-4">More Info</h2>
                  <ol className="ml-7 mt-4 mb-2 list-disc">
                    {selectedCategoryData.href &&
                      Object.entries(selectedCategoryData.href).map(
                        ([text, link]) => (
                          <>
                            <li key={text}>
                              <a
                                href={link}
                                rel="noreferrer"
                                target="_blank"
                                className="hover:text-blue-200"
                              >
                                {text}
                              </a>
                            </li>
                            <br />
                          </>
                        )
                      )}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Learn;
