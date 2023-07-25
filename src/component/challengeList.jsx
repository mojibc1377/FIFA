// ChallengesList.js
import React, { useState } from 'react';
import { TiTickOutline } from 'react-icons/ti';
import { request } from '../services/requests';
import {AiOutlineLoading} from "react-icons/ai"


function ChallengesList({ challenges, onAcceptChallenge,status }) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState(null);
  const accepterId = (JSON.parse(localStorage.getItem('user')))._id
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(()=> setIsLoading(false) , 2000)
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

  const handleConfirmationYes = async () => {
    if (selectedChallengeIndex !== null) {
      try {
        // Get the selected challenge
        const selectedChallenge = challenges[selectedChallengeIndex];
        selectedChallenge.accepterId = accepterId
  
        // Call the onAcceptChallenge function from the parent component to accept the selected challenge
        onAcceptChallenge(selectedChallenge);
        console.log(selectedChallenge)

  
        // Send an HTTP PUT request to update the challenge in the database
        const {data} = await request.put(`/api/challenges/${selectedChallenge._id}`, selectedChallenge);

        console.log(data)
        // Hide the backdrop
        handleHideBackdrop();
        setIsLoading(false)

      } catch (error) {
        console.error('Error updating challenge:', error);
        // Handle error appropriately (e.g., show an error message)
        
      }
    }
  };
  

  const handleConfirmationNo = () => {
    handleHideBackdrop();
  };

  return (
    <div className="text-gray-200 absolute w-full top-14 fade-out pt-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Challenges List</h2>
      <ul className="space-y-10">
        {isLoading === true ? <AiOutlineLoading className='loading absolute left-1/2 mt-10 text-blue-400 animate-spin'/> :challenges?.map((challenge, index) => (
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
          { status === true &&
              <button
                className="addBtn pr-10"
                onClick={() => handleChallengeConfirmation(index)}
              >
                <TiTickOutline className="w-10 mb-4 cursor-pointer text-2xl hover:text-4xl text-green-600 font" />
              </button>
              }
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
