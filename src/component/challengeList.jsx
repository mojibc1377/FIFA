// ChallengesList.js
import React, { useState } from 'react';
import { TiTickOutline } from 'react-icons/ti';


function ChallengesList({ challenges, onAcceptChallenge }) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState(null);

  const handleShowBackdrop = (index) => {
    setSelectedChallengeIndex(index);
    setShowBackdrop(true);
  };

  const handleHideBackdrop = () => {
    setSelectedChallengeIndex(null);
    setShowBackdrop(false);
  };

  const handleChallengeConfirmation = (index) => {
    handleShowBackdrop(index);
  };

  const handleConfirmationYes = () => {
    if (selectedChallengeIndex !== null) {
      // Get the selected challenge
      const selectedChallenge = challenges[selectedChallengeIndex];

      // Call the onAcceptChallenge function from the parent component to accept the selected challenge
      onAcceptChallenge(selectedChallenge);

      // Hide the backdrop
      handleHideBackdrop();
    }
  };

  const handleConfirmationNo = () => {
    handleHideBackdrop();
  };

  return (
    <div className="text-gray-200 absolute w-full top-14 fade-out pt-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Challenges List</h2>
      <ul className="space-y-10">
        {challenges.map((challenge, index) => (
          <li
            key={index}
            className="border-b flex align-middle justify-between flex-row pl-10 fade-out border-gray-600 pb-2"
          >
            <div className="challengeData text-left">
              <p>
                <span className="challengelist font-bold">
                  {challenge.challengerName}
                </span>
              </p>
              <p>
                <span className="challengelist font-bold">
                  {challenge.gameName}
                </span>
              </p>
              <p>
                <span className="challengelist font-bold">
                  {challenge.consoleType}
                </span>
              </p>
              <p className="akhari mb-4">
                <span className="challengelist font-bold">
                  ${challenge.challengeAmount}
                </span>
              </p>
            </div>
            <button
              className="addBtn pr-10"
              onClick={() => handleChallengeConfirmation(index)}
            >
              <TiTickOutline className="w-10 mb-4 cursor-pointer text-2xl hover:text-4xl text-green-600 font" />
            </button>
          </li>
        ))}
      </ul>

      {/* Backdrop */}
      {showBackdrop && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 px-10">
          <div className="bg-gray-700 p-6 rounded-md shadow-md">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to confirm this challenge?
            </p>
            <div className="flex justify-between">
              <button
                className="ml-6 bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={handleConfirmationYes}
              >
                Yes
              </button>
              <button
                className="mr-6 bg-red-500 hover:bg-red-600 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={handleConfirmationNo}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChallengesList;
