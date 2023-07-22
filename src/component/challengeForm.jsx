// ChallengeForm.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function ChallengeForm() {
  const [gameName, setGameName] = useState('');
  const [consoleType, setConsoleType] = useState('');
  const [challengeAmount, setChallengeAmount] = useState('');

  const handleGameNameChange = (event) => {
    setGameName(event.target.value);
  };

  const handleConsoleTypeChange = (event) => {
    setConsoleType(event.target.value);
  };



  const handleChallengeAmountChange = (event) => {
    // Ensure that the input only accepts numeric values
    const value = event.target.value.replace(/\D/, '');
    setChallengeAmount(value);
  };

  const handleSubmit = (event) => {
    
    //implement logic to send the formdata to backend API for storage

    
    console.log('Game Name:', gameName);
    console.log('Console Type:', consoleType);
    console.log('Challenge Amount:', challengeAmount);

    <Navigate to='/' />
    alert("your challenge is posted in mosabeqat")

  };

  return (
    <div className=" bg-gray-700 text-gray-100 p-8 px-10 mx-4 rounded-md shadow-xl ">
      <h2 className="animate-pulse text-2xl font-semibold text-gray-300 mb-4">Create a New Challenge</h2>
      <form onSubmit={handleSubmit}>
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
        <div className=" fade-out mb-4">
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
            max={50000} // Set the maximum value
            step={1} // Set the step value to 1 (only accept integer values)
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
