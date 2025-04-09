import React, { useEffect, useState } from "react";

// Feedback component for gettin ratings from the users
const FeedBack = () => {
  // This state manages whether the feedback modal is open or closed
  const [openModal, setOpenModal] = useState(false);

  // This state holds the selected artings from the user
  const [chosenRating, setChosenRating] = useState(null);

  // when the component mounts the saved rating is loaded
  useEffect(() => {
    const savedToLocalStorage = localStorage.getItem("ratings-for-feedback"); 
    if (savedToLocalStorage) {
      setChosenRating(Number(savedToLocalStorage)); // Set the saved rating if it exists
    }
  }, []);

  // This function controls when the user selects a rating
  const controlSelectedRating = (value) => {
    setChosenRating(value); // updating the chosen rating in the state
    localStorage.setItem("ratings-for-feedback", value); // saving rating in the local storage
  };

  // This function controls submit action
  const controlSubmit = () => {
    if (chosenRating !== null) {
      // Show an window alert with the rating selected
      window.alert(`Thanks for submitting rating: ${chosenRating}`);
      // Closing the modal after submission
      setOpenModal(false);
    }
  };

  // Function to control closing the modal manually
  const controlCloseModal = () => {
    setOpenModal(false);
  };

  // Function to control closing the modal by clicking outside the content (on overlay)
  const controlOverlay = (event) => {
    if (event.target.id === "overlay") {
      controlCloseModal();
    }
  };

  return (
    <div className="min-h-screen flex items-center bg-violet-100 p-4">
      {/* Button to open the feedback modal */}
      <button
        className="bg-violet-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-violet-700 transition"
        onClick={() => setOpenModal(true)}
      >
        Give your feedback
      </button>

      {/* Feedback modal */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60"
          id="overlay"
          onClick={controlOverlay} // Closing the modal on overlay click
        >
          {/* Modal content box */}
          <div
            onClick={(e) => e.stopPropagation()} // Prevent the modal close when clicking inside the box
            className="bg-[#2e2e2f] text-white p-6 md:p-8 rounded-xl w-full max-w-lg relative shadow-lg"
          >
            {/* Close button */}
            <button
              onClick={controlCloseModal}
              className="absolute top-4 right-4 text-lg hover:text-red-400 transition"
            >
              &times;
            </button>

            {/* Feedback question */}
            <h4 className="text-lg text-center font-semibold">
              How likely are you to recommend{" "}
              <span className="text-violet-400">Frontend</span> to someone you
              know?
            </h4>

            {/* Rating options from 1 to 10 */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {[...Array(10)].map((_, i) => {
                const value = i + 1; // Rating value (1 through 10)
                return (
                  <button
                    key={value}
                    onClick={() => controlSelectedRating(value)} // Select rating on click
                    className={`w-10 h-10 rounded-lg font-semibold transition ${
                      chosenRating === value
                        ? "bg-violet-600 text-white" // Highlight selected rating
                        : "bg-[#2e2e44] text-white hover:bg-violet-500" // Default button style
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
            </div>

            {/* Rating scale description */}
            <div className="flex justify-between text-xs text-gray-400 px-2 mb-6">
              <span>Not likely at all</span>
              <span>Extremely likely</span>
            </div>

            {/* Modal action buttons */}
            <div className="flex justify-center gap-4">
              {/* Cancel button */}
              <button
                onClick={controlCloseModal}
                className="border border-gray-600 px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
              >
                Cancel
              </button>
              {/* Submit button */}
              <button
                onClick={controlSubmit}
                className="bg-violet-600 px-6 py-2 text-sm text-white rounded-full hover:bg-violet-700 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedBack;
