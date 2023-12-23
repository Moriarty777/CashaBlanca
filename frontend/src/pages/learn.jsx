import { useState } from 'react';
import {questions,facts} from '../constants/index'
import Icon from '../components/Icon'
import ReactPlayer from 'react-player/youtube';


const Learn = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerSelect = (selectedAnswer) => {
    if (submitted) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    setUserAnswers([...userAnswers, { questionId: questions[currentQuestion].id, isCorrect, selectedAnswer }]);
    if (isCorrect) setScore(score + 1);
    setSubmitted(true);

    console.log(userAnswers)
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([]);
    setSubmitted(false);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(0);
    setSubmitted(false);
  };

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

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  

  //Calculator
  const [amount, setAmount] = useState('');
  const [years, setYears] = useState('');
  const [rate, setRate] = useState('');
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateInterest = () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      alert('Invalid amount');
      return;
    }

    if (!years || isNaN(Number(years)) || Number(years) <= 0) {
      alert('Invalid years');
      return;
    }

    if (!rate || isNaN(Number(rate)) || Number(rate) < 0) {
      alert('Invalid interest rate');
      return;
    }

    const interestRate = Number(rate) / 100;
    const totalInterest = Number(amount) * Math.pow((1 + interestRate), Number(years)) - Number(amount);
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
      Discover the essentials of personal finance with our Learn page. From budgeting basics to investment insights, we've got you covered. Dive into quizzes, explore interactive tools, and stay updated with interesting financial facts. Empower yourself for a secure financial future.
      </p>
    </section>

    <hr />

      {/* Categories of Financial Knowledge */}
      <section className="mb-10 mt-8">
        <h2 className="text-4xl font-bold mb-4 text-center">Categories of Financial Knowledge</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Budgeting Card */}
            
          <div className="flex items-center justify-center bg-slate-100">
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl shadow-blue-400 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] bg-gradient-to-r from-[#64b5f6] to-[#1976d2]">
              <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center">
              <div className='text-2xl font-bold text-white'>
              Budgeting
              </div>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/30 px-7 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <ol className='text-lg font-semibold'>
                    <li>
                    Basics of creating a budget
                    </li>
                    <br />
                    <li>
                    Tips for effective budgeting                      
                    </li>
                    <br />
                    <li>
                    Common budgeting mistakes and how to avoid them
                    </li>
                  </ol>
                  <br />
                  <button className="mt-2 rounded-md bg-[#1976d2] px-2 py-1 text-sm hover:bg-blue-300 " onClick={toggleModal}>Learn More</button>
                </div>
              </div>
            </div>
          </div>
          </div>


          {/* Saving Card */}
          <div className="flex items-center justify-center bg-slate-100">
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl shadow-green-600 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"style={{ background: 'linear-gradient(to right, #81c784 , #2e7d32)' }}>
              <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center">
              <div className='text-2xl font-bold text-white'>
              Saving
              </div>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/30 px-7 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <ol className='text-lg font-semibold'>
                    <li>
                    Importance of saving.
                    </li>
                    <br />
                    <li>
                    Different types of savings accounts.                     
                    </li>
                    <br />
                    <li>
                    Tips for building an emergency fund.
                    </li>
                  </ol>
                  <br />
                  <button className="mt-2 rounded-md bg-[#2e7d32] px-2 py-1 text-sm hover:bg-green-400">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          </div>


          {/* Investing Card */}
          <div className="flex items-center justify-center bg-slate-100">
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl shadow-orange-400 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"style={{ background: 'linear-gradient(to right, #ffcc80, #ef6c00)' }}>
              <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center">
              <div className='text-2xl font-bold text-white'>
              Investing
              </div>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/30 px-7 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <ol className='text-lg font-semibold'>
                    <li>
                    Introduction to investing.
                    </li>
                    <br />
                    <li>
                    Types of investments (stocks, bonds, mutual funds, etc.).                      
                    </li>
                    <br />
                    <li>
                    Risk and return in investing.
                    </li>
                  </ol>
                  <br />
                  <button className="mt-2 rounded-md bg-[#ef6c00] px-2 py-1 text-sm hover:bg-orange-300">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          </div>


          {/* Credit and Debt Card */}
          <div className="flex items-center justify-center bg-slate-100">
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl shadow-indigo-400 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"style={{ background: 'linear-gradient(to right, #9575cd, #512da8)' }}>
              <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center">
              <div className='text-2xl font-bold text-white'>
              Credit & Debit Card
              </div>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/30 px-7 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <ol className='text-lg font-semibold'>
                    <li>
                    Understanding credit scores.
                    </li>
                    <br />
                    <li>
                    Managing and reducing debt.                     
                    </li>
                    <br />
                    <li>
                    Credit card tips.
                    </li>
                  </ol>
                  <br />
                  <button className="mt-2 rounded-md bg-[#512da8] px-2 py-1 text-sm hover:bg-indigo-300">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>
      </section>

      <hr />

      {/* Interactive Learning Elements */}
      <section className="mb-8 mt-10">
        <h2 className="text-4xl text-center font-bold mb-4">Interactive Learning Elements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Quizzes Card */}
          <div>
            {/* Your Card component goes here */}
          </div>

          {/* Calculators Card */}
          <div>
          <div className="flex flex-col bg-white rounded-lg shadow-md p-4 w-full space-y-4">
  <h1 className="text-xl font-bold text-gray-800">Financial Calculator</h1>
  <div className="flex items-center space-x-2">
    <div className="flex items-center">
      <label htmlFor="amount" className="text-sm font-medium text-gray-700 pr-2">Initial Amount:</label>
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
      <label htmlFor="years" className="text-sm font-medium text-gray-700 pr-2">Number of Years:</label>
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
      <label htmlFor="rate" className="text-sm font-medium text-gray-700 pr-2">Interest Rate:</label>
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
          <div>
            {/* Your Card component goes here */}
          </div>
        </div>
      </section>
<hr />
      {/* Did You Know Section */}
      <section>
      <h2 className="text-4xl text-center font-bold mb-4">Did You Know Section</h2>
        {/* Your Did You Know component goes here */}
        <div className="mt-10 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-7 rounded-xl shadow-lg w-96">
          {currentFactIndex < totalFacts ? (
            <div>
              <h2 className="text-xl text-center font-semibold mb-4">Fact {currentFactIndex + 1}</h2>
              <p className="text-lg mb-4">{facts[currentFactIndex].text}</p>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">All Facts Completed!</h2>
            </div>
          )}

          <div className="flex justify-between">
            <button
              onClick={showPrevFact}
              style={{ visibility: currentFactIndex === 0 ? 'hidden' : 'visible' }}
              className='bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-start hover:bg-blue-600'
            >
              <Icon name="ArrowLeft" size={20} color="white" />
            </button>

            <button
              onClick={showNextFact}
              style={{ visibility: currentFactIndex === totalFacts - 1 ? 'hidden' : 'visible' }}
              className='bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-end hover:bg-blue-600'
            >
              <Icon name="ArrowRight" size={20} color="white" />
            </button>
          </div>

          </div>
          </div>


      </section>
    </div>
    

    {/* modal logic */}

    {isModalOpen && (
  <div>
    {/* OverlLay */}
    <div
      onClick={toggleModal}
      className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-50"></div>

    <div
    tabIndex="-1"
    aria-hidden="true"
    className="fixed z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full overflow-y-auto overflow-x-hidden">

    <div className="relative p-4 w-full max-w-2xl max-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {/* Modal content */}
      <div className="relative rounded-lg shadow dark:bg-gray-700"style={{ background: 'linear-gradient(to right, #64b5f6, #1976d2)' }}>
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h1 className="text-2xl font-semibold text-white dark:text-white justify-center ml-[50px]">
          Budgeting
          </h1>
          <button
            type="button"
            onClick={toggleModal}
            className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
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



<div className="flex flex-col p-4 text-white">
  <div className='shadow-xl'>

<ReactPlayer
                url="https://www.youtube.com/embed/ZrsWh7Bo97A"
                controls
                width="100%"
              />

  </div>
  <h2 className="mt-6 text-xl font-semibold ml-4">More Info</h2>
  <ol className="ml-7 mt-4 mb-2 list-disc">
  <li>
      <a href="https://www.nerdwallet.com/article/finance/how-to-budget" rel="noreferrer" target="_blank" className='hover:text-blue-200'>
        {/* <img src="article-icon.svg" alt="Article" className="mr-2" /> */}
        Learn more about budgeting basics
      </a>
    </li>
    <br />
    <li>
      <a href="https://n26.com/en-eu/blog/budgeting-tips" rel="noreferrer" target="_blank" className='hover:text-blue-200'>
        {/* <img src="video-icon.svg" alt="Video" className="mr-2" /> */}
        Tips for effective budgeting
      </a>
    </li>
  </ol>
</div>





        </div>
      </div>
    </div>

  </div>
  )}




    </>

    // Quiz
    // <div className="min-h-screen flex items-center justify-center bg-gray-100">
    //   <div className="bg-white p-8 rounded-lg shadow-md w-96">
    //     {currentQuestion < questions.length ? (
    //       <div>
    //         <h2 className="text-xl font-semibold mb-4">Question {currentQuestion + 1}</h2>
    //         <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
    //         <ul className="space-y-2">
    //           {questions[currentQuestion].options.map((option, index) => (
    //             <li
    //               key={index}
    //               onClick={() => handleAnswerSelect(option)}
    //               className={`cursor-pointer p-2 rounded-md ${
    //                 submitted && option === questions[currentQuestion].correctAnswer
    //                   ? 'bg-green-500'
    //                   : submitted && userAnswers[0].selectedAnswer === option
    //                   ? 'bg-red-500'
    //                   : ''}
    //                 hover:bg-blue-200`}
                  
    //             >
    //               {option}
    //             </li>
    //           ))}
    //         </ul>
    //         {submitted && (
    //           <div>
    //             <p className="mt-4">
    //               Your answer is {userAnswers[0].isCorrect ? 'correct' : 'incorrect'}.
    //             </p>
    //             <button
    //               onClick={nextQuestion}
    //               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    //             >
    //               Next Question
    //             </button>
    //           </div>
    //         )}
    //       </div>
    //     ) : (
    //       <div className="text-center">
    //         <h2 className="text-xl font-semibold mb-4">Quiz Completed!</h2>
    //         <p className="text-lg mb-4">Your Score: {score}</p>
    //         <button
    //           onClick={restartQuiz}
    //           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    //         >
    //           Restart Quiz
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Learn;
