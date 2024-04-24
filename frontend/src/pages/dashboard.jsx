import { useState, useEffect } from "react";
import { PiggyBank, TrendingUp, TrendingDown, Scale } from "lucide-react";
import Modal from "../components/Modal";
import { categories, summary } from "../constants/index";

const SummaryCard = ({ item, onOpenModal, totalIncome, totalExpense }) => {
  // Implement logic and JSX for the summary card based on item props
  const icon = {
    TrendingUp: <TrendingUp className="text-green-600 font-bold" />,
    TrendingDown: <TrendingDown className="text-red-600 font-bold" />,
    Scale: <Scale className="text-teal-600 font-bold" />,
  };

  // console.log(totalIncome, totalExpense, "Summary Card");

  return (
    <div
      key={item.title}
      className="flex w-1/4 flex-col items-center justify-center gap-2 rounded-md bg-slate-200 p-4 text-lg font-bold shadow-xl min-h-[24vh]"
    >
      <div key={item.iconName} className="flex items-center gap-2">
        {icon[item.iconName]}
        <div className="text-xl">{item.title}</div>
      </div>
      <div className="text-center text-xl mt-4">
        {item.title === "Income"
          ? totalIncome
          : item.title === "Expense"
          ? totalExpense
          : String(totalIncome - totalExpense)}
      </div>
      {item.title === "Income" && (
        <div className="flex flex-1 items-center justify-between gap-24">
          <div
            className="text-blue-500 cursor-pointer hover:text-blue-700"
            onClick={() => onOpenModal(null, "addIncome")} // Pass category as null for income
          >
            Add Income
          </div>
          <div
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={() => onOpenModal(null, "viewIncome")} // Pass category as null for income
          >
            View Income
          </div>
        </div>
      )}
      {item.title === "Expense" && (
        <div className="flex flex-1 items-center justify-between gap-24">
          <div
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={() => onOpenModal(null, "viewExpense")} // Pass category as null for expense
          >
            View Expense
          </div>
        </div>
      )}
    </div>
  );
};

const SavingsCard = ({ goals }) => {
  // Implement logic and JSX for the savings card
  const totalAmountSaved = goals.reduce(
    (total, goal) => total + parseFloat(goal.saved_amount),
    0
  );
  console.log(goals, "Saved Amount");

  return (
    <div className="group cursor-pointer relative flex w-1/4 flex-col items-center justify-center gap-2 rounded-md bg-gradient-to-r from-yellow-200 to-yellow-500 p-4 text-lg font-bold shadow-lg shadow-yellow-500 min-h-[24vh]">
      <div className="flex items-center gap-2">
        <PiggyBank className="text-pink-500 font-bold" />
        <div className="text-xl">Savings</div>
      </div>
      <div className="text-center text-white font-bold text-xl">
        {totalAmountSaved}
      </div>
      <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 z-10 px-4 py-2 rounded-md shadow-md text-white bg-gray-800 text-xs font-bold transition-all duration-150 scale-0 group-hover:scale-100">
        {goals === true
          ? goals.map((goal) => (
              <p key={goal.id} className="text-sm">
                {goal.name} - ${goal.saved_amount} Saved
              </p>
            ))
          : "No Savings"}
      </div>
    </div>
  );
};

const CategoryCard = ({
  category,
  onOpenModal,
  fetchedData,
  toggleIsUpdated,
}) => {
  // Calculate total amount spent for the category
  const categoryExpenses =
    Array.isArray(fetchedData) && fetchedData.length > 0
      ? fetchedData.filter((expense) => expense.category === category.title)
      : null;

  const totalAmountSpent =
    Array.isArray(categoryExpenses) && categoryExpenses.length > 0
      ? categoryExpenses.reduce(
          (total, expense) => total + parseFloat(expense.amount),
          0
        )
      : 0;

  // Calculate progress percentage
  const totalBudget = 100; // Assume total budget
  const progress = Math.round((totalAmountSpent / totalBudget) * 100);

  console.log(progress, "Progress Bar", totalAmountSpent);

  // Determine progress color based on progress value
  const getProgressColor = (progress) => {
    if (progress < 50) {
      return "bg-green-400";
    } else if (progress < 70) {
      return "bg-yellow-400";
    } else {
      return "bg-red-400";
    }
  };

  const progressColor = getProgressColor(progress);

  return (
    <div className="my-10 max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
      <div className="flex items-end justify-between bg-gray-50 p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {category.title}
        </h2>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {progress}%
        </span>
      </div>
      {/* Progress Bar */}
      <div className="relative h-2.5 bg-gray-200 dark:bg-gray-700">
        <div
          className={`absolute top-0 left-0 h-full rounded-full ${progressColor}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* Card Footer */}
      <div className="flex items-center justify-between bg-gray-100">
        <div
          className="p-4 text-blue-500 cursor-pointer hover:text-blue-700"
          onClick={() => onOpenModal(category.title, "addExpense")}
        >
          Add Expense
        </div>
        <div
          className="p-4 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={() => {
            onOpenModal(category.title, "viewExpense");
            toggleIsUpdated();
          }}
        >
          View Expenses
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedCategory: "",
    modalType: "", // "addExpense", "addIncome", "viewIncome", "viewExpense", "editIncome","editExpense"
  });

  const [formData, setFormData] = useState({});
  const [fetchedData, setFetchedData] = useState({});
  const [editItemId, setEditItemId] = useState();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);
  const [goals, setGoals] = useState([]);

  const toggleModal = (category, modalType) => {
    setModalState({
      isOpen: !modalState.isOpen,
      selectedCategory: category,
      modalType: modalType,
    });
  };

  // Function to toggle isUpdated state variable
  const toggleIsUpdated = () => {
    setIsUpdated((prevIsUpdated) => !prevIsUpdated);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // FETCH DATA
  // Fetch data when the component mounts
  useEffect(() => {
    const fetchDataOnMount = async () => {
      try {
        const expensesUrl = "http://localhost:3000/expenses";
        const incomeUrl = "http://localhost:3000/income";

        const [expensesResponse, incomeResponse] = await Promise.all([
          fetch(expensesUrl),
          fetch(incomeUrl),
        ]);

        if (expensesResponse.ok && incomeResponse.ok) {
          const [expensesData, incomeData] = await Promise.all([
            expensesResponse.json(),
            incomeResponse.json(),
          ]);
          setFetchedData((prevData) => ({
            ...prevData, // Spread the previous data
            ...expensesData, // Update the expenses data
            ...incomeData, // Update the income data
          }));

          const totalExpenses = expensesData.expenses.reduce(
            (total, expense) => total + parseFloat(expense.amount),
            0
          );
          setTotalExpense(totalExpenses);

          const totalIncome = incomeData.income.reduce(
            (total, income) => total + parseFloat(income.amount),
            0
          );
          setTotalIncome(totalIncome);
        } else {
          console.error(
            "Failed to fetch data:",
            expensesResponse.statusText,
            incomeResponse.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchGoals = async () => {
      try {
        const response = await fetch("http://localhost:3000/goals");
        if (!response.ok) {
          throw new Error("Failed to fetch goals data");
        }
        const data = await response.json();
        setGoals(data.goals);
      } catch (error) {
        console.error("Error fetching goals data:", error);
      }
    };

    fetchDataOnMount();
    fetchGoals();
  }, [isUpdated]);

  // Normal Fetch
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setFetchedData((prevData) => ({
          ...prevData,
          ...data,
        }));
        console.log(fetchedData, "Inside fetchdata");
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // Fetch data when the selected category changes
  useEffect(() => {
    if (
      modalState.modalType === "viewIncome" ||
      modalState.modalType === "viewExpense" ||
      isUpdated
    ) {
      let url;
      if (modalState.modalType === "viewIncome") {
        url = "http://localhost:3000/income"; // URL for fetching income data
      } else if (modalState.modalType === "viewExpense") {
        url = modalState.selectedCategory
          ? `http://localhost:3000/expenses/${modalState.selectedCategory}`
          : "http://localhost:3000/expenses"; // URL for fetching expense data
      }
      fetchData(url);
    }
  }, [modalState.modalType, modalState.selectedCategory]);

  // SUBMIT DATA
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Validate the incoming data
    if (modalState.modalType === "addIncome") {
      if (!formData.source || !formData.amount) {
        console.error(
          "Income data is missing. Source and amount are required."
        );
        return; // Prevent further execution for invalid income data
      }
    } else if (modalState.modalType === "addExpense") {
      if (!formData.amount || !formData.name || !modalState.selectedCategory) {
        console.error(
          "Expense data is missing. Name, amount, and category are required."
        );
        return; // Prevent further execution for invalid expense data
      }
      if (isNaN(parseFloat(formData.amount)) || !isFinite(formData.amount)) {
        console.error("Amount must be a valid number.");
        return; // Prevent further execution if amount is invalid
      }
    }

    try {
      // Prepare the fetch request based on modalType
      let url = "";
      let requestBody = {};
      let method = "";

      console.log(formData, "inside submit", editItemId);

      if (
        modalState.modalType === "addIncome" ||
        modalState.modalType === "addExpense"
      ) {
        url = `http://localhost:3000/${
          modalState.modalType === "addIncome" ? "income" : "expenses"
        }`;

        requestBody =
          modalState.modalType === "addIncome"
            ? JSON.stringify({
                source: formData.source,
                amount: formData.amount,
              })
            : JSON.stringify({
                name: formData.name,
                amount: formData.amount,
                category: modalState.selectedCategory,
              });
        method = "POST";
      } else if (
        modalState.modalType === "viewIncome" ||
        modalState.modalType === "viewExpense"
      ) {
        url = `http://localhost:3000/${
          modalState.modalType === "viewIncome" ? "income" : "expenses"
        }/${editItemId}`;
        requestBody =
          modalState.modalType === "viewExpense"
            ? JSON.stringify({
                name: formData.name,
                amount: formData.amount,
                category: formData.category,
              })
            : JSON.stringify({
                source: formData.source,
                amount: formData.amount,
              });
        method = "PUT";
      }

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: requestBody,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(
          `${modalState.modalType} ${
            method === "POST" ? "added" : "updated"
          } successfully:`,
          data
        );

        // Call toggleIsUpdated to trigger a re-render
        toggleIsUpdated();

        // Close modal and reset formData
        toggleModal("", "");
        setFormData({});
        setEditItemId();
      } else {
        console.error(
          `Failed to ${method === "POST" ? "add" : "update"} ${
            modalState.modalType
          }:`,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error adding", modalState.modalType, ":", error);
    }
  };

  // DELETE DATA
  const handleDelete = async (data) => {
    try {
      const baseUrl = `http://localhost:3000`;
      const endpoint =
        modalState.modalType === "viewIncome" ? "/income" : "/expenses";
      const url = `${baseUrl}${endpoint}/${data.id}`;

      console.log(data, "Handle Delete", modalState.modalType);

      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log(`Item deleted successfully`);

        if (modalState.modalType === "viewIncome") {
          setFetchedData((prevData) => ({
            ...prevData,
            income: prevData.income.filter((item) => item.id !== data.id),
          }));
        } else if (modalState.modalType === "viewExpense") {
          setFetchedData((prevData) => ({
            ...prevData,
            expenses: prevData.expenses.filter((item) => item.id !== data.id),
          }));
        }
        // Call toggleIsUpdated to trigger a re-render
        toggleIsUpdated();
      } else {
        console.error(`Failed to delete ${data.type}:`, response.statusText);
      }
    } catch (error) {
      console.error(`Error deleting ${data.type}:`, error);
    }
  };

  //EDIT DATA
  const handleEdit = (data) => {
    setEditItemId(data.id); // Set the ID of the item being edited

    // Prepare form data based on modal type (editIncome or editExpense)
    let editData = {};
    if (modalState.modalType === "viewIncome") {
      editData = { source: data.source, amount: data.amount };
    } else if (modalState.modalType === "viewExpense") {
      editData = {
        name: data.name,
        amount: data.amount,
        category: data.category,
      };
    }

    setFormData(editData); // Set form data with appropriate fields based on type
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
            <SummaryCard
              key={item.title}
              item={item}
              onOpenModal={toggleModal}
              totalIncome={totalIncome}
              totalExpense={totalExpense}
            />
          ))}
          <SavingsCard goals={goals} />
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
            <CategoryCard
              key={category.title}
              category={category}
              onOpenModal={toggleModal}
              fetchedData={fetchedData.expenses}
              toggleIsUpdated={toggleIsUpdated}
            />
          ))}
        </div>
      </section>
      {/* Pass modal state and toggleModal function to Modal component */}
      {modalState.isOpen && (
        <Modal
          onClose={() => toggleModal("", "")} // Reset modal state on close
          selectedCategory={modalState.selectedCategory}
          modalType={modalState.modalType}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleChange={handleChange}
          fetchedData={fetchedData}
          formData={formData}
          editItemId={editItemId}
        />
      )}
    </>
  );
};

export default Dashboard;
