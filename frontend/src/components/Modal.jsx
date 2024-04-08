import { Plus, XSquare, Pencil, Trash2 } from "lucide-react";

const Modal = ({
  onClose,
  selectedCategory,
  modalType,
  handleSubmit,
  handleDelete,
  handleEdit,
  handleChange,
  fetchedData,
  formData,
  editItemId,
}) => {
  // Check if fetchedData is an array and not empty
  const isDataValid = fetchedData
    ? {
        expenses:
          Array.isArray(fetchedData.expenses) &&
          fetchedData.expenses.length > 0,
        income:
          Array.isArray(fetchedData.income) && fetchedData.income.length > 0,
      }
    : null;

  // console.log(modalType, "Modal Type");

  const imageOptions = [
    { id: 1, url: "src/assets/images/goal_1.jpeg" },
    { id: 2, url: "src/assets/images/goal_2.jpeg" },
    { id: 3, url: "src/assets/images/goal_3.jpeg" },
    { id: 4, url: "src/assets/images/goal_4.jpeg" },
  ];

  return (
    <>
      <div>
        {/* OverlLay */}
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-50"></div>

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
                  {modalType === "viewExpense"
                    ? selectedCategory
                      ? `Expense Details - ${selectedCategory}`
                      : "Expense Details"
                    : modalType === "viewIncome"
                    ? "Income Details"
                    : modalType === "addIncome"
                    ? "Add Income"
                    : modalType === "addGoal"
                    ? "Add Goal"
                    : `Add Expense - ${selectedCategory}`}{" "}
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

              {/* View Expense */}
              {modalType === "viewExpense" ? (
                isDataValid.expenses ? (
                  // Your logic when expenses are valid
                  <div className="p-4 md:p-5">
                    {fetchedData.expenses.map((item) => (
                      <div key={item.id} className="mb-4">
                        <ul className="list-none p-0 m-0">
                          <li className="flex justify-between items-center">
                            <div className="text-lg font-semibold">
                              {editItemId === item.id ? (
                                <input
                                  type="text"
                                  name="name"
                                  value={formData.name || ""}
                                  onChange={handleChange}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Type product name"
                                  required
                                />
                              ) : (
                                item.name
                              )}
                            </div>
                            <div className="flex gap-2 items-center">
                              <div className="text-gray-600 mr-4">
                                {editItemId === item.id ? (
                                  <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount || ""}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="$200"
                                    required
                                  />
                                ) : (
                                  `${item.amount} $`
                                )}
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
                    {editItemId && (
                      <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleSubmit}
                      >
                        Done
                      </button>
                    )}
                  </div>
                ) : (
                  // Message when no expenses are found
                  <div className="p-4 md:p-5">
                    <p>No expenses found.</p>
                  </div>
                )
              ) : null}

              {/* Add Expense Modal */}
              {modalType === "addExpense" && (
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
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="amount"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        name="amount"
                        id="amount"
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
                  >
                    <Plus className="text-white font-semibold" />
                    Add Expense
                  </button>
                </form>
              )}

              {/* View Income */}
              {modalType === "viewIncome" ? (
                isDataValid.income ? (
                  <div className="p-4 md:p-5">
                    {fetchedData.income.map((item) => (
                      <div key={item.id} className="mb-4">
                        <ul className="list-none p-0 m-0">
                          <li className="flex justify-between items-center">
                            <div className="text-lg font-semibold">
                              {editItemId === item.id ? (
                                <input
                                  type="text"
                                  name="source"
                                  value={formData.source || ""}
                                  onChange={handleChange}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Type product name"
                                  required
                                />
                              ) : (
                                item.source
                              )}
                            </div>
                            <div className="flex gap-2 items-center">
                              <div className="text-gray-600 mr-4">
                                {editItemId === item.id ? (
                                  <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount || ""}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="$200"
                                    required
                                  />
                                ) : (
                                  `${item.amount} $`
                                )}
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
                    {editItemId && (
                      <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleSubmit}
                      >
                        Done
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="p-4 md:p-5">
                    <p>No Income found.</p>
                  </div>
                )
              ) : null}

              {/* Add Income */}
              {modalType === "addIncome" && (
                // Add Expense
                <form onSubmit={handleSubmit} className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="source"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Source
                      </label>
                      <input
                        type="text"
                        name="source"
                        id="source"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="amount"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="$200"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    <Plus className="text-white font-semibold" />
                    Add Income
                  </button>
                </form>
              )}

              {/* Add Goals */}
              {modalType === "addGoal" && (
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
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter goal name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="targetAmount"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Target Amount
                      </label>
                      <input
                        type="number"
                        name="target_amount"
                        id="target_amount"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter target amount"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="targetWeeks"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Target Weeks
                      </label>
                      <input
                        type="number"
                        name="target_weeks"
                        id="target_weeks"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter target weeks"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Select Image
                    </label>
                    <div className="grid grid-cols-4 gap-4">
                      {/* Render image tiles from imageOptions and handle selection */}
                      {imageOptions.map((image) => (
                        <div
                          key={image.id}
                          onClick={() =>
                            handleChange({
                              target: {
                                name: "selectedImageId",
                                value: image.id,
                              },
                            })
                          }
                          className="cursor-pointer"
                        >
                          <img
                            src={image.url}
                            alt=""
                            className={`w-full h-auto rounded-lg ${
                              formData.selectedImageId === image.id
                                ? "border-4 border-blue-700"
                                : ""
                            }`}
                            width={100}
                            height={100}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <br />
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    <Plus className="text-white font-semibold" />
                    Add Goal
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
