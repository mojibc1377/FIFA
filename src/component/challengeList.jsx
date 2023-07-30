/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { TiTickOutline } from 'react-icons/ti';
import { request } from '../services/requests';
import {AiOutlineLoading} from "react-icons/ai"
import {VscLoading} from "react-icons/vsc"
import { Navigate } from 'react-router-dom';
import checkIfLoggedIn from './Middleware/checkLoggedIn';
import sendSMSNotification from './Middleware/sendSms';


function ChallengesList({ challenges, onAcceptChallenge, status,list }) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState(null);
  const accepterId = JSON.parse(localStorage.getItem('user'))?._id; 
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 2000);
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
        const selectedChallenge = challenges[selectedChallengeIndex];
        if (!accepterId) {
          alert("You need to be logged in to accept challenges.");
        }
        selectedChallenge.accepterId = accepterId;
        onAcceptChallenge(selectedChallenge);
        console.log(selectedChallenge)

        const { data } = await request.put(`/api/challenges/${selectedChallenge._id}`, selectedChallenge);
        const challenger = await request.get(`/api/users?userId=${selectedChallenge.challengerId}`)
        sendSMSNotification(challenger.data[0].number ,455379, [{name : "NAME" , value : challenger.data[0].username }] )
        handleHideBackdrop();
        setIsLoading(false);

      } catch (error) {
        console.error('Error updating challenge:', error);
      }
    }
  };

  const handleConfirmationNo = () => {
    handleHideBackdrop();
  };

  if (!checkIfLoggedIn()) {
    alert("please login first")
    return <Navigate to="/login" replace={true} />;
  }


  return (
    <div className="text-gray-200 absolute w-full top-14 fade-out duration-2000 pt-4 pb-4 rounded-md ">
    <h2 className="text-2xl font-semibold mb-4">{list ==="accepted" ? "Accepted challenges" : "Challenges List"}</h2>
    <ul className="flex flex-col gap-5 justify-center w-11/12 pl-9">
      {isLoading === true ? (
        <AiOutlineLoading className="loading absolute left-1/2 mt-10 text-blue-400 animate-spin " />
      ) : (
        challenges?.map((challenge, index) => (
          <li key={index} className="border-1 flex flex-col bg-opacity-20 bg-gray-500 backdrop-blur-lg rounded-xl border-gray-600 shadow-2xl p-4 challenge-card">
            <div className="challengeData flex flex-col gap-4 align-middle justify-center">
              <div className="avatar-wrapper flex flex-row justify-between">
                <img alt="avatar" src={challenge.avatar} className="avatar mr-0 rounded-full w-24" />
                {challenge.consoleType === 'ps5' && <img alt="consoleType" className='conoleType w-26 h-14 pr-2 pl-4 mt-3' src='/images/systems/ps5.png'></img>}
                {challenge.consoleType === 'ps4' && <img alt="consoleType" className='conoleType w-28 h-auto pl-2 mr-1' src='/images/systems/ps4.png'></img>}
                {challenge.consoleType === 'xbox' && <img alt="consoleType" className='conoleType w-28 pl-2' src='/images/systems/Xbox.png'></img >}
                {challenge.consoleType === 'pc' &&  <img alt="consoleType" className='conoleType w-28 pl-3 pr-3' src='/images/systems/pc.png'></img >}
              </div>
          
              <div className="gameName text-left text-3xl font-light">{challenge.gameName}</div>
              <div className='lastRow flex flex-row justify-between'>
              <div className="challengeAmount align mt-3 animate-pulse">${challenge.challengeAmount}</div>
            {challenge.challengerId !== accepterId && status === true ? (
              <button className="addBtn border-1 bg-green-600 bg-opacity-60 mb-0 rounded-md px-4 py-2" onClick={() => handleChallengeConfirmation(index)}>
                Accept
              </button>
            ) : (
              <button className="addBtn" onClick={() => alert("waiting to be accepted")}>
                <VscLoading className="w-10 animate-spin text-2xl text-green-600 font" />
              </button>
            )}
            </div>
          </div>

          </li>
        ))
      )}
    </ul>
  
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
