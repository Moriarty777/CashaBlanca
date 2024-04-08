import { useState, useEffect } from "react";
import Modal from "../components/Modal";

const GoalCard = ({ goal }) => {
  const { name, target_amount, target_weeks } = goal;
  const progress = 50; // Hardcoded progress value for demonstration

  return (
    goal != null && (
      <div className="my-10 max-w-sm overflow-hidden rounded-xl bg-gray-100 shadow-lg">
        <div>
          <img
            src="https://shorturl.at/hzIY0"
            alt="Goals"
            className="w-full h-56 object-fill"
          />
        </div>
        <div className="flex items-end justify-between bg-slate-100 p-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            {progress}%
          </span>
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
              <p className="text-sm">
                - Save approximately $
                {(target_amount / target_weeks / 7).toFixed(2)} per day.
              </p>
            </div>
          </div>
          <div className="font-bold text-md cursor-default">Contribute</div>
        </div>
      </div>
    )
  );
};

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

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

  // useEffect to fetch goals data when component mounts or when a new goal is added
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(e, "Handle Change Goals");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData, "Goals FormData");
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response as needed
        console.log("New goal added:", data);
        // Refetch goals data to update the UI
        fetchData();
        setIsModalOpen(false);
        setFormData({});
      })
      .catch((error) => {
        console.error("Error adding new goal:", error);
      });
  };

  return (
    <>
      <div className="mb-4 flex flex-1 items-center justify-between">
        <div className="mx-auto my-5 flex flex-1 justify-center text-3xl font-bold">
          Your Goals...
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mr-6 rounded-xl bg-blue-400 px-4 py-2 text-white shadow-lg hover:bg-blue-700"
        >
          Add Goals
        </button>
      </div>

      <div className="grid gap-10 md:grid-cols-3 mx-[10%]">
        {goals != null &&
          goals.map((goal) => <GoalCard key={goal.id} goal={goal} />)}
      </div>

      {/* Modal for adding a new goal */}
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          selectedCategory={null}
          modalType="addGoal"
          handleSubmit={handleSubmit}
          handleDelete={null}
          handleEdit={null}
          handleChange={handleChange}
          fetchedData={null}
          formData={formData}
          editItemId={null}
        />
      )}
    </>
  );
};

export default Goals;
