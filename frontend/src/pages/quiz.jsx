import { questions, facts } from "../constants/index";

const [currentQuestion, setCurrentQuestion] = useState(0);
const [userAnswers, setUserAnswers] = useState([]);
const [score, setScore] = useState(0);
const [submitted, setSubmitted] = useState(false);

const handleAnswerSelect = (selectedAnswer) => {
  if (submitted) return;

  const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
  setUserAnswers([
    ...userAnswers,
    { questionId: questions[currentQuestion].id, isCorrect, selectedAnswer },
  ]);
  if (isCorrect) setScore(score + 1);
  setSubmitted(true);

  console.log(userAnswers);
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
