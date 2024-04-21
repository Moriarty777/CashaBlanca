import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { imageOptions } from "../constants/index";
import { Trash2 } from "lucide-react";

const GoalCard = ({ goal, handleDelete, handleEditItem }) => {
  const { name, target_amount, target_weeks, selectedimageid, saved_amount } =
    goal;
  const progress = (saved_amount / target_amount) * 100; // Hardcoded progress value for demonstration

  return (
    goal != null && (
      <div className="my-10 max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
        <div>
          <img
            src={
              selectedimageid === undefined || selectedimageid === null
                ? "https://shorturl.at/hzIY0"
                : imageOptions.find((image) => image.id === selectedimageid).url
            }
            alt="Goals"
            className="w-full h-56 object-fill"
          />
        </div>
        <div className="flex items-end justify-between bg-slate-100 p-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <button
            type="button"
            className="text-red-700 hover:underline"
            onClick={() => handleDelete(goal.id)}
          >
            <Trash2 />
          </button>
        </div>
        <div className="relative">
          <div className="h-2.5 w-full rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-rose-400"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between border-t bg-slate-100 p-5 text-gray-400">
          <div className="group">
            <div className="font-bold text-md cursor-default">View Stats</div>
            <div className="absolute mt-10 mx-12 transform -translate-x-1/2 z-10 px-4 py-2 rounded-md shadow-md text-white bg-gray-800 text-xs font-bold transition-all duration-150 scale-0 group-hover:scale-100">
              <p className="text-sm">
                To achieve your goal in approximately {target_weeks} weeks:
              </p>
              <p className="text-sm">
                - Save approximately $
                {(target_amount / target_weeks).toFixed(2)} per week.
              </p>
              <br />
              <hr />
              <br />
              <p className="text-sm">Total Amount Saved ${saved_amount}</p>
            </div>
          </div>
          <div
            className="font-bold text-md cursor-pointer"
            onClick={() => handleEditItem(goal.id)}
          >
            Contribute
          </div>
        </div>
      </div>
    )
  );
};

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [formData, setFormData] = useState({});
  const [fetchedData, setFetchedData] = useState();
  const [editItemId, setEditItemId] = useState();

  const [modalState, setModalState] = useState({
    isOpen: false,
    modalType: "",
  });

  const toggleModal = (modalType) => {
    setModalState({
      isOpen: !modalState.isOpen,
      modalType: modalType,
    });
  };

  // Function to fetch goals data
  const fetchData = async () => {
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

  const calculateBalance = async () => {
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

        const totalExpenses = expensesData.expenses.reduce(
          (total, expense) => total + parseFloat(expense.amount),
          0
        );

        const totalIncome = incomeData.income.reduce(
          (total, income) => total + parseFloat(income.amount),
          0
        );

        const balance = totalIncome - totalExpenses;

        setFetchedData((prevData) => ({
          ...prevData,
          balance: balance,
          expenses: expensesData.expenses,
        }));
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

  // useEffect to fetch goals data when component mounts or when a new goal is added
  useEffect(() => {
    fetchData();
    calculateBalance();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(goals, "Goals Fetched");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let url = "";
    let requestBody = {};

    if (modalState.modalType === "contribute") {
      requestBody = JSON.stringify({
        name: fetchedData.goal.name,
        amount: formData.saved_amount,
        category: "Savings",
      });
      url = `http://localhost:3000/expenses/`;
    } else {
      requestBody = JSON.stringify(formData);
      url = `http://localhost:3000/goals`;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    });

    if (!response.ok) {
      console.error("Error submitting goal data:", response.statusText);
      // Handle API request errors (optional)
      return;
    }

    const data = await response.json();

    // Handle response based on method
    if (modalState.modalType === "contribute") {
      console.log("Contribution successful:", data);
    } else {
      console.log("New goal added:", data);
    }

    if (modalState.modalType === "contribute") {
      const url = `http://localhost:3000/goals/${editItemId}`;
      const amount =
        parseFloat(formData.saved_amount) +
        parseFloat(fetchedData.goal.saved_amount);
      const requestBody = JSON.stringify({
        saved_amount: amount,
      });

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });

      if (!response.ok) {
        console.error("Error Updating goal data:", response.statusText);
        // Handle API request errors (optional)
        return;
      }
    }

    // Refetch goals data to update the UI
    fetchData();
    toggleModal("");
    setFormData({});
  };

  const handleDelete = async (goalId) => {
    try {
      const response = await fetch(`http://localhost:3000/goals/${goalId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete goal");
      }

      // Now, delete the associated expense
      const name = goals.find((goal) => goal.id === goalId)?.name;

      // Check if fetchedData.expenses exists and is an array
      if (fetchedData.expenses) {
        const expenseIds = Object.values(fetchedData.expenses)
          .filter((expense) => expense.name === name)
          .map((expense) => expense.id);

        console.log(expenseIds, "Delete Expenses");
        expenseIds.forEach(async (id) => {
          try {
            const response = await fetch(
              `http://localhost:3000/expenses/${id}`,
              {
                method: "DELETE",
              }
            );
            if (!response.ok) {
              throw new Error(`Failed to delete expense with ID ${id}`);
            }
            console.log(`Expense with ID ${id} deleted successfully`);
          } catch (error) {
            console.error(error.message);
          }
        });
      } else {
        console.error("fetchedData.expenses is not in the expected format");
      }

      // Update goals state to remove the deleted goal
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
    } catch (error) {
      console.error("Error deleting:", error);
      // Handle errors (e.g., display error message)
    }
  };

  const handleEditItem = (newId) => {
    setEditItemId(newId);
    for (const goal of goals) {
      if (goal.id == newId) {
        setFetchedData((prevData) => ({
          ...prevData,
          goal,
        }));
      }
    }
    toggleModal("contribute");
  };

  return (
    <>
      <div className="mb-4 flex flex-1 items-center justify-between">
        <div className="mx-auto my-5 flex flex-1 justify-center text-3xl font-bold">
          Your Goals...
        </div>

        <button
          onClick={() => toggleModal("addGoal")}
          className="mr-6 rounded-xl bg-blue-400 px-4 py-2 text-white shadow-lg hover:bg-blue-700"
        >
          Add Goals
        </button>
      </div>

      <div className="grid gap-10 md:grid-cols-3 mx-[10%]">
        {goals != null &&
          goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              handleDelete={handleDelete}
              handleEditItem={handleEditItem}
            />
          ))}
      </div>

      {/* Modal for adding a new goal */}
      {modalState.isOpen && (
        <Modal
          onClose={() => toggleModal("")}
          selectedCategory={null}
          modalType={modalState.modalType}
          handleSubmit={handleSubmit}
          handleDelete={null}
          handleEdit={null}
          handleChange={handleChange}
          fetchedData={fetchedData}
          formData={formData}
          editItemId={editItemId}
        />
      )}
    </>
  );
};

export default Goals;
