/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { request } from '../services/requests';
import {AiOutlineLoading} from "react-icons/ai"
import {MdDoNotDisturb} from "react-icons/md"
import {VscLoading} from "react-icons/vsc"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import checkIfLoggedIn from './Middleware/checkLoggedIn';
import sendSMSNotification from './Middleware/sendSms';
import CheckChallengeCount from './Middleware/hasTwoAccepted';
import useChallengeCount from "./Middleware/hasTwoAccepted"
import {BsSkipForward} from "react-icons/bs"
import MoreButton from './moreButton';


function ChallengesList({ challenges, onAcceptChallenge, status,list }) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState(null);
  const accepterId = JSON.parse(localStorage.getItem('user'))?._id; 
  const [isLoading, setIsLoading] = useState(true);
  const hasTwoAcceptedChallenges = useChallengeCount(accepterId);
  const [dataFetched, setDataFetched] = useState(false); // New state to track data fetching status
  const navigate = useNavigate();
  const [confirmationLoading, setConfirmationLoading] = useState(false); //false


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setDataFetched(true); // Set dataFetched to true after the data is fetched
    }, 3000);
  }, []);

  setTimeout(() => setIsLoading(false), 4000);
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
        setConfirmationLoading(true); 
        const selectedChallenge = challenges[selectedChallengeIndex];
        if (!accepterId) {
          alert("You need to be logged in to accept challenges.");
        }
  
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const cost = parseFloat(selectedChallenge.challengeAmount);
  
        // Check if the user has sufficient funds before accepting the challenge
        const response = await request.get(`/api/users?userId=${userId}`);
        const dataa = response.data;
        if (((challenges[selectedChallengeIndex]).challengeAmount) <= dataa[0].accountCredit) {
          selectedChallenge.accepterId = accepterId;
          
          onAcceptChallenge(selectedChallenge);
          await request.post('/api/users/purchase-coins', {
            userId,
            amount: cost,
          });
  
          const { data } = await request.put(`/api/challenges/${selectedChallenge._id}`, selectedChallenge);
          const challenger = await request.get(`/api/users?userId=${selectedChallenge.challengerId}`)
          sendSMSNotification(challenger.data[0].number, 455379, [{ name: "NAME", value: challenger.data[0].username }])
          handleHideBackdrop();
          setIsLoading(false);
          setConfirmationLoading(false);
          navigate('/')
        } else {
          alert('Not enough credit. Please charge your account.');
          navigate('/charge');
        }
      } catch (error) {
        console.error('Error updating challenge:', error);
      }
    }
  };
  
  const handleConfirmationNo = () => {
    handleHideBackdrop();
  };

  const formatTime = (utcTimestamp) => {
    const utcDate = new Date(utcTimestamp);
    const hours = utcDate.getUTCHours().toString().padStart(2, '0');
    const minutes = utcDate.getUTCMinutes().toString().padStart(2, '0');
    const month = (utcDate.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = utcDate.getUTCDate().toString().padStart(2, '0');
    return `${hours}:${minutes}-${month}/${day}`;
  };
  
  return (
    <div className="bg-pattern text-gray-200 absolute w-full top-14 fade-out duration-2000 pt-4 pb-4 rounded-md ">
    <h2 className="text-2xl font-semibold mb-4">{list ==="accepted" ? "چالش های پذیرفته شده" : list=== "myChallenges"? "چالش های من": "چالش ها"}</h2>
    <ul className="flex flex-col gap-5 justify-center w-11/12 pl-9">
      {isLoading === true ? (
        <AiOutlineLoading className="loading absolute left-1/2 mt-10 text-blue-400 animate-spin " />
      ) : (
        challenges?.map((challenge, index) => (
          <li key={index} className="flex flex-col fade-out bg-opacity-50 bg-gray-500 w-full rounded-xl border-gray-600 shadow-2xl p-4 challenge-card">
            <div className="challengeData flex flex-col gap-4 align-middle justify-center">
              <div className="avatar-wrapper flex flex-row justify-between">
                <img alt="avatar" src={challenge.avatar} className="avatar mr-0 rounded-2xl w-24 h-28" />
                <div className='toptop flex flex-col text-right'>
                {challenge.consoleType === 'ps5' && <img alt="consoleType" className='conoleType w-28  h-8 mb-2 mt-4 ' src='/images/systems/ps5.png'></img>}
                {challenge.consoleType === 'ps4' && <img alt="consoleType" className='conoleType w-28  h-8 mb-2 mt-4 ' src='/images/systems/ps4.png'></img>}
                {challenge.consoleType === 'xbox' && <img alt="consoleType" className='conoleType w-28  h-8 mb-2 mt-4' src='/images/systems/Xbox.png'></img >}
                {challenge.consoleType === 'pc' &&  <img alt="consoleType" className='conoleType w-24 h-auto ' src='/images/systems/pc.png'></img >}
                <div className="challengeAmount align font-light text-lg mt-3 mr-2 animate-pulse">﷼ {challenge.challengeAmount}</div>
            </div>  
            </div>
          <div className='gamename flex flex-row justify-between '>
            <div className='gamee pt-2 text-gray-400'>بازی :</div>
              <div className="gameName flex flex-row text-left text-3xl font-light">{challenge.gameName}</div>
              </div>
              <div className='lastRow flex flex-row justify-between'>
              {challenge.accepterId === "" ? formatTime(challenge.createdAt): ( <div className="infoBtnWrapper justify-start lg:w-24 ">
                  {list === "accepted" || list === "myChallenges" ? (
                    <Link to={`/challenge-detail/${challenge._id}`}>
                      <button className="infoBtn flex flex-row text-right gap-1"><MoreButton className="more" />بیشتر</button>{status}
                    </Link>
                  ) : status === true ? (formatTime(challenge.createdAt)) : null}
              </div>)}
            {challenge.challengerId !== accepterId && status === true ? (
              <button className={`addBtn border-1 bg-green-600 bg-opacity-60 mb-0 rounded-md ${hasTwoAcceptedChallenges ? "disabled-button" : ""} px-4 py-2`} disabled={hasTwoAcceptedChallenges} onClick={() => handleChallengeConfirmation(index)}>
                {hasTwoAcceptedChallenges ? <MdDoNotDisturb className='notDisturb text-xl'/> : "Accept"}
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
            ایا مطمعنید که این چالش را قبول میکنید؟
          </p>
          <div className="flex justify-between">
            <button
              className="ml-6 bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleConfirmationYes}
            >
              {confirmationLoading ? <AiOutlineLoading className="loading mx-2 text-white animate-spin " /> : "بله"}
            </button>
            <button
              className="mr-6 bg-red-500 hover:bg-red-600 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={handleConfirmationNo}
            >
              خیر
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
  );  
}

export default ChallengesList;
