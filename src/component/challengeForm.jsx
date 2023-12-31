/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { request } from '../services/requests';
import moment from "moment"
import {AiOutlineLoading} from "react-icons/ai"
import checkIfLoggedIn from './Middleware/checkLoggedIn';



function ChallengeForm() {
  const [gameName, setGameName] = useState('');
  const [consoleType, setConsoleType] = useState('');
  const [challengeAmount, setChallengeAmount] = useState('');
  const challengerName = (JSON.parse(localStorage.getItem('user'))?.name)
  const challengerId = (JSON.parse(localStorage.getItem('user'))?._id)
  const avatar = JSON.parse(localStorage.getItem('user'))?.avatar
  const navigate = useNavigate();
  const [confirmationLoading, setConfirmationLoading] = useState(false); // test



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
  

  const HandleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setConfirmationLoading(true); 

    const timestamp = moment().toISOString();
  
    const challengeData = {
      challengerName,
      gameName,
      consoleType,
      challengeAmount,
      challengerId,
      accepterId: '',
      winner: [],
      avatar: avatar,
      createdAt: timestamp
    };
  
    const userId = challengerId;
    const cost = parseFloat(challengeAmount);
  
    try {
      const response = await request.get(`/api/users?userId=${userId}`);
      const data = response.data;
  
      if (cost <= parseFloat(data[0].accountCredit)) {

        await request.post('/api/challenges/new/post', challengeData);
        await request.post('/api/users/purchase-coins', {
          userId: challengerId,
          amount: cost,

        });
        const login = async()=>{
          const response = await request.post('/api/login', {
            username: JSON.parse(localStorage.getItem('user'))?.username,
            password: JSON.parse(localStorage.getItem('user'))?.password
          });
        
          const { token, user } = response?.data;
          localStorage.setItem('token', token || "");
          localStorage.setItem('user', JSON.stringify(user) || "");
        }
        if (checkIfLoggedIn){ 
          login();
          const user = JSON.parse(localStorage.getItem('user') );
           if (user && (user.accountCredit !== Number(data[0].accountCredit) - cost)){
            window.location.reload()
           }
          }
          navigate('/')
        alert('Your challenge is posted in challenges');
        setConfirmationLoading(false); 
        navigate('/')
      } else {
        alert('Not enough credit. Please charge your account.');
        navigate('/charge');
      }

    } catch (error) {
      console.error('Error creating a challenge:', error);
      alert('An error occurred while posting the challenge');
    }
  };
  
  return (
    <div className='flex flex-row justify-center pt-20'>
    <div className=" h-max my-auto sliding-div bg-opacity-60 backdrop-blur-sm  bg-gray-700 text-gray-100 py-10 px-5 lg:px-24 rounded-md shadow-2xl ">
      <h2 className="animate-pulse text-2xl font-semibold text-gray-300 mb-4">ایجاد چالش جدید</h2>
      <form onSubmit={HandleSubmit}>
        <div className=" fade-out mb-4">
          <label htmlFor="challengerName" className=" fade-out block mb-1 font-extrabold text-2xl text-blue-500">
          {JSON.parse(localStorage.getItem('user')).name}          
          </label>
          <label htmlFor="gameName" className=" fade-out block mb-1">
            بازی
          </label>
          <select
            id="gameName"
            value={gameName}
            onChange={handleGameNameChange}
            required
            className=" fade-out w-full text-center px-3 py-2 rounded-md bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">انتخاب بازی</option>
            <option value="FIFA 23">FIFA 23</option>
            <option value="EA FC 24">EA FC 24</option>
          </select>
        </div>
        <div className="fade-out mb-4">
          <label htmlFor="consoleType" className=" fade-out block mb-1">
            کنسول
          </label>
          <select
            id="consoleType"
            value={consoleType}
            onChange={handleConsoleTypeChange}
            required
            className=" fade-out w-full text-center px-3 py-2 rounded-md bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">پلتفرم</option>
            <option value="ps5">PS5</option>
            <option value="ps4">PS4</option>
            <option value="xbox">Xbox</option>
            <option value="pc">PC</option>
            
          </select>
        </div>
        <div className=" fade-out mb-4">
          <label htmlFor="challengeAmount" className=" fade-out block mb-1">
            مقدار چالش
          </label>
          <input
            type="number"
            id="challengeAmount"
            value={challengeAmount}
            onChange={handleChallengeAmountChange}
            placeholder="مقدار چالش به ریال"
            required
            max={2500000} 
            step={1} // Set the step value to 1 (only accept integer values) or min value
            className=" fade-out w-full text-center px-3 py-2 text-white rounded-md bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>
        <div>
          <button
            type="submit"
            className=" fade-out bg-blue-500 hover:bg-blue-600 border-1 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={confirmationLoading}
>
            {confirmationLoading ? <AiOutlineLoading className="loading mx-3 text-white animate-spin " /> : "ثبت چالش"}
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default ChallengeForm;
