import { useState } from "react";
import { Plus, XSquare, Pencil, Trash2 } from "lucide-react";
import { expenseData } from "../constants/index";

const Modal = ({ selectedCategory, onClose, isExpenseView }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
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
    console.log("Form submitted:", formData);
  };

  const handleEdit = (data) => {
    // Implement the logic to handle the edit action
    console.log("Edit expense:", data);
  };

  const handleDelete = (data) => {
    // Implement the logic to handle the delete action
    console.log("Delete expense:", data);
  };

  return (
    <>
      <div>
        {/* OverlLay */}
        <div
          onClick={onClose}
          className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-50"
        ></div>

        <div
          tabIndex="-1"
          aria-hidden="true"
          className="fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
        >
          <div className="relative p-4 w-full max-w-md max-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {isExpenseView
                    ? `Expense Details - ${selectedCategory}`
                    : `Add Expense - ${selectedCategory}`}
                </h3>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <XSquare />
                </button>
              </div>
              {/* Modal body */}
              {isExpenseView ? (
                //View Expense
                <div className="p-4 md:p-5">
                  {expenseData
                    .filter((item) => item.category === selectedCategory)
                    .map((item, index) => (
                      <div key={index} className="mb-4">
                        <ul className="list-none p-0 m-0">
                          <li className="flex justify-between items-center">
                            <div className="text-lg font-semibold">
                              {item.name}
                            </div>
                            <div className="flex gap-2 items-center">
                              <div className="text-gray-600 mr-4">
                                {item.amount}
                              </div>
                              <div className="text-gray-500 mr-4">
                                {new Date(item.date).toLocaleDateString()}
                              </div>
                              <button
                                type="button"
                                className="text-blue-700 hover:underline"
                                onClick={() => handleEdit(item)}
                              >
                                <Pencil />
                              </button>
                              <button
                                type="button"
                                className="text-red-700 hover:underline"
                                onClick={() => handleDelete(item)}
                              >
                                <Trash2 />
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    ))}
                  {/* <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleSubmit}
                  >
                    Done
                  </button> */}
                </div>
              ) : (
                // Add Expense
                <form onSubmit={handleSubmit} className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
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
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
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
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Category
                      </label>
                      <div
                        key={selectedCategory}
                        value={selectedCategory}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        {selectedCategory}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                    onClick={handleSubmit}
                  >
                    <Plus className="text-white font-semibold" />
                    Add Expense
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
