export const navLinks = [
  {
    href: "dashboard",
    label: "Dashboard",
    iconName: "Gauge",
    iconColor: "#10b981",
    iconSize: 24,
  },
  {
    href: "goals",
    label: "Goals",
    iconName: "Goal",
    iconColor: "#f97316",
    iconSize: 24,
  },
  {
    href: "learn",
    label: "Learn",
    iconName: "BookOpenText",
    iconColor: "#22c55e",
    iconSize: 24,
  },
];

export const categories = [
  { title: "Grocery" },
  { title: "Bills & Utilities" },
  { title: "Other" },
];

export const summary = [
  { title: "Income", iconName: "TrendingUp" },
  { title: "Expense", iconName: "TrendingDown" },
  { title: "Balance", iconName: "Scale" },
];

export const imageOptions = [
  { id: 1, url: "src/assets/images/goal_1.jpeg" },
  { id: 2, url: "src/assets/images/goal_2.jpeg" },
  { id: 3, url: "src/assets/images/goal_3.jpeg" },
  { id: 4, url: "src/assets/images/goal_4.jpeg" },
];

export const financialKnowledgeCategories = [
  {
    title: "Budgeting",
    content: [
      "Basics of creating a budget",
      "Tips for effective budgeting",
      "Common budgeting mistakes and how to avoid them",
    ],
    gradient: "from-[#64b5f6] to-[#1976d2]",
    shadowColor: "shadow-blue-400",
    buttonColor: "[#1976d2]",
  },
  {
    title: "Saving",
    content: [
      "Importance of saving.",
      "Different types of savings accounts.",
      "Tips for building an emergency fund.",
    ],
    gradient: "from-[#81c784] to-[#2e7d32]",
    shadowColor: "shadow-green-600",
    buttonColor: "[#2e7d32]",
  },
  {
    title: "Investing",
    content: [
      "Introduction to investing.",
      "Types of investments (stocks, bonds, mutual funds,etc.).",
      "Risk and return in investing.",
    ],
    gradient: "from-[#ffcc80] to-[#ef6c00]",
    shadowColor: "shadow-orange-400",
    buttonColor: "[#ef6c00]",
  },
  {
    title: "Budgeting",
    content: [
      "Understanding credit scores.",
      "Managing and reducing debt.",
      "Credit card tips.",
    ],
    gradient: "from-[#9575cd] to-[#512da8]",
    shadowColor: "shadow-indigo-400",
    buttonColor: "[#512da8]",
  },
];

// export const categoryData = {
//   budgeting: {
//     title: "Budgeting",
//     content: [
//       <>
//         <p>
//           Budgeting is the process of creating a plan for how you will spend
//           your money. It helps you track your income and expenses, and make sure
//           you&aposre not spending more than you earn.
//         </p>

//         <ol>
//           <li>
//             <a
//               href="https://www.nerdwallet.com/article/finance/how-to-budget"
//               rel="noreferrer"
//               target="_blank"
//               className="hover:text-blue-200"
//             >
//               Learn more about budgeting basics
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://n26.com/en-eu/blog/budgeting-tips"
//               rel="noreferrer"
//               target="_blank"
//               className="hover:text-blue-200"
//             >
//               Tips for effective budgeting
//             </a>
//           </li>
//         </ol>
//       </>,
//     ],
//     gradient: "from-[#64b5f6] to-[#1976d2]", // Gradient for budgeting
//   },
//   saving: {
//     // ... data for saving category
//   },
//   // ... data for other categories
// };

export const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "What is the capital of India?",
    options: ["Berlin", "Delhi", "Paris", "Rome"],
    correctAnswer: "Delhi",
  },
  {
    id: 3,
    question: "What is the capital of Vatican?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Rome",
  },
];

export const facts = [
  {
    id: 1,
    title: "Compound Interest",
    text: "Did you know that compound interest can make your money grow exponentially? The earlier you start investing, the more you benefit from compounding.",
  },
  {
    id: 2,
    title: "Credit Scores",
    text: "Your credit score affects your ability to borrow money and the interest rates you'll pay. A higher credit score can save you thousands on loans.",
  },
  {
    id: 3,
    title: "Emergency Fund",
    text: "Having an emergency fund equal to 3-6 months of living expenses can provide a financial safety net during unexpected events.",
  },
  {
    id: 4,
    title: "Budgeting",
    text: "Creating a budget helps you understand where your money goes and allows you to plan for your financial goals.",
  },
  {
    id: 5,
    title: "Diversification",
    text: "Diversifying your investments can help manage risk. Don't put all your eggs in one basket!",
  },
  {
    id: 6,
    title: "Real Estate",
    text: "Real estate can be a good investment. Historically, property values tend to increase over time.",
  },
  {
    id: 7,
    title: "Retirement Savings",
    text: "Saving for retirement is crucial. Start early, contribute consistently, and take advantage of employer-sponsored plans.",
  },
  {
    id: 8,
    title: "Stock Market",
    text: "The stock market has historically provided higher returns compared to other investment options over the long term.",
  },
  {
    id: 9,
    title: "Inflation",
    text: "Inflation erodes the purchasing power of money over time. Investing helps your money grow and combat the effects of inflation.",
  },
  {
    id: 10,
    title: "Tax-Advantaged Accounts",
    text: "Utilize tax-advantaged accounts like IRAs and 401(k)s to maximize your savings and reduce your tax liability.",
  },
];
