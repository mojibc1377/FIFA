import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { request } from '../services/requests';
import moment from "moment"

//avatar pas bede

function ChallengeForm() {
  const [gameName, setGameName] = useState('');
  const [consoleType, setConsoleType] = useState('');
  const [challengeAmount, setChallengeAmount] = useState('');
  const challengerName = (JSON.parse(localStorage.getItem('user')).name)
  const challengerId = (JSON.parse(localStorage.getItem('user'))._id)
  const avatar = JSON.parse(localStorage.getItem('user')).avatar


  const handleGameNameChange = (event) => {
    setGameName(event.target.value);
  };

  const handleConsoleTypeChange = (event) => {
    setConsoleType(event.target.value);
  };

  const handleChallengeAmountChange = (event) => {
    const value = event.target.value.replace(/\D/, '');
    setChallengeAmount(value);
  };
  
  const navigate = useNavigate();

  const HandleSubmit = (event) => {
    const timestamp = moment().toISOString(); // Generate the timestamp using moment

    const challengeData = {
      challengerName,
      gameName,
      consoleType,
      challengeAmount,
      challengerId,
      accepterId : '',
      avatar : avatar,
      createdAt : timestamp
    };

    // challengerName:'AshkanLifkoohi',
    //     gameName:'EA FC 24',
    //     consoleType : "PS4",
    //     challengeAmount : "10000", schema 

    try {

      request.post('/api/challenges/new/post', challengeData);
      console.log('New challenge created:', challengeData);
      alert('Your challenge is posted in challenges');
      navigate('/');

    } catch (error) {

      console.error('Error creating a challenge:', error);
      alert('An error occurred while posting the challenge');
      navigate('/panel');

    }
  };

  return (
    <div className=" absolute inset-0 h-max my-auto mx-5 lg:bg-opacity-0 lg:w-1/2 lg:mx-0 lg:left-1/4 bg-gray-700 text-gray-100 p-8 px-10 rounded-md shadow-2xl ">
      <h2 className="animate-pulse text-2xl font-semibold text-gray-300 mb-4">Create a New Challenge</h2>
      <form onSubmit={HandleSubmit}>
        <div className=" fade-out mb-4">
          <label htmlFor="challengerName" className=" fade-out block mb-1 font-extrabold text-2xl text-blue-500">
            {localStorage.getItem("loggedInUser")}
          </label>
          <label htmlFor="gameName" className=" fade-out block mb-1">
            Game:
          </label>
          <select
            id="gameName"
            value={gameName}
            onChange={handleGameNameChange}
            required
            className=" fade-out w-full px-3 py-2 rounded-md bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">SELECT GAME</option>
            <option value="FIFA 23">FIFA 23</option>
            <option value="EA FC 24">EA FC 24</option>
          </select>
        </div>
        <div className="fade-out mb-4">
          <label htmlFor="consoleType" className=" fade-out block mb-1">
            Console Type:
          </label>
          <select
            id="consoleType"
            value={consoleType}
            onChange={handleConsoleTypeChange}
            required
            className=" fade-out w-full px-3 py-2 rounded-md bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">PLATFORM</option>
            <option value="ps5">PS5</option>
            <option value="ps4">PS4</option>
            <option value="xbox">Xbox</option>
            <option value="pc">PC</option>
            
          </select>
        </div>
        <div className=" fade-out mb-4">
          <label htmlFor="challengeAmount" className=" fade-out block mb-1">
            Challenge Amount:
          </label>
          <input
            type="number"
            id="challengeAmount"
            value={challengeAmount}
            onChange={handleChallengeAmountChange}
            placeholder="MONEY AMOUNT"
            required
            max={50000} 
            step={1} // Set the step value to 1 (only accept integer values) or min value
            className=" fade-out w-full px-3 py-2 rounded-md bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>
        <div>
          <button
            type="submit"
            className=" fade-out bg-blue-500 hover:bg-blue-600 border-1 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Post Challenge
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChallengeForm;
