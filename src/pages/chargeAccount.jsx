/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { REQUEST, REquest, request } from '../services/requests';
import { useNavigate } from 'react-router-dom';
import sendSMSNotification from "../component/Middleware/sendSms"
import Dashboard from './dashbord';



const ChargingPage = () => {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('user'))._id);
    const [amount, setAmount] = useState('');
    const navigate = useNavigate()

    const handleUserIdChange = (e) => {
      setUserId(e.target.value);
    };
  
    const handleAmountChange = (e) => {
      setAmount(e.target.value);
    };
    useEffect(() => {
    }, [amount]);
  
    const body =  JSON.stringify({ userId, amount }) // Pass userId and amount to the backend
  const handleCharge = () => {
    try {
      
      REQUEST.post('/api/users/charge-wallet',body)
            sendSMSNotification(
              JSON.parse(localStorage.getItem('user')).number,
              607499,
              [
                {name : "NAME", value:(JSON.parse(localStorage.getItem('user')).username)} ,
                {name : "CREDIT" , value :amount}
              ]
            );
            
            alert("your account has been charged")

    } catch (error) {
        console.error('Error registering user:', error);
               alert('An error occurred while charging account. Please try again Later.');
    }
}
  return (
    <div className="min-h-screen flex items-center justify-center px-2 bg-gray-700">
      <div className=" bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">

        <h1 className="text-2xl font-bold mb-6">اکانت کاربری خود را شارژ کنید</h1>
        <h3 className='panel text-black'>panel e pardakht vasl nashode (NextPay.js)</h3>
        <h2 className='panel text-black'>ishalla baade demo</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ایدی کاربری
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={userId}
              defaultValue={(JSON.parse(localStorage.getItem('user'))._id)}
              onChange={handleUserIdChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              مقدار
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleCharge}
            >
              شارژ
            </button>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default ChargingPage;