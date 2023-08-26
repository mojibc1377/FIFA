/* eslint-disable no-unused-vars */
import * as React from 'react';
import Coins from '../component/coins';
import { Navigate } from 'react-router-dom';
import { request } from "../services/requests";
import { useEffect } from 'react';
import checkIfLoggedIn from '../component/Middleware/checkLoggedIn';
import sendSMSNotification from '../component/Middleware/sendSms';
import {AiOutlineLoading} from "react-icons/ai"


function FurushCoin() {
  const [mizan, setMizan] = React.useState('');
  const user = (JSON.parse(localStorage?.getItem('user')))
  const requestType = "sell";
  const [cost, setCost] = React.useState(0);
  const [accountCredit, setAccountCredit] = React.useState(0);
  const [isLoading , setIsLoading] = React.useState(false)
  useEffect(() => {
    // Calculate the cost whenever the mizan value changes
    if (mizan) {
      const calculatedCost = parseFloat(mizan) * 0.6;
      setCost(calculatedCost);
    } else {
      setCost(0);
    }
  }, [mizan]);

  useEffect(() => {
    // Fetch user's account credit
    const fetchAccountCredit = async () => {
      try {
        const { data } = await request.get(`/api/users?userId=${(JSON.parse(localStorage.getItem('user'))._id)}`);
        setAccountCredit(data[0].accountCredit);
      } catch (error) {
        console.error('Error fetching account credit:', error);
      }
    };

    fetchAccountCredit();
  }, []);

  const handlePurchase = async () => {
    try {
      setIsLoading(true)
      // const response = await request.post('/api/users/sell-coins', {
      //   userId: JSON.parse(localStorage.getItem('user'))._id,
      //   amount: parseFloat(mizan),
      // });
      request.post('/api/coins', {
        mizan: parseFloat(mizan),
        psnId: user.psnId, 
        requestType: requestType, 
      });
      // Update the account credit after successful purchase
      // setAccountCredit(response.data.accountCredit);
      sendSMSNotification(user.number ,455379, [{name : "NAME" , value : user.username }] )
      //kharide coin sms 


      // Reset the input field
      setMizan('');
      setCost(0);
      setIsLoading(false)

      alert('Coins purchased successfully!');
    } catch (error) {
      console.error('Error purchasing coins:', error);
      alert('An error occurred while purchasing coins. Please try again later.');
    }
  };
  
  return (
    <>
      <Coins />
      {checkIfLoggedIn() ? (
        <div className="flex flex-col items-center gap-10 fade-out pt-20">
        <h2 className="text-3xl font-light mb-8">فروش کوین</h2>
        <div className="flex lg:flex-row flex-col gap-20">
          <input
            className="rounded-md border bg-slate-600 bg-opacity-10 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            value={mizan}
            onChange={(e) => setMizan(e.target.value)}
            placeholder="Enter the amount of coins to purchase"
            required
          />
          <p className="text-gray-300">قیمت: {cost.toFixed()}</p>
        </div>
        <p className="text-gray-300">شارژ حساب کاربری: ${Number(accountCredit).toFixed()}</p>
        <button
          onClick={handlePurchase}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
          disabled = {isLoading}
          >
            {isLoading ? <AiOutlineLoading className=' animate-spin'/> : 'ثبت سفارش'}
          </button>
        
      </div>
      ) : (
        alert("please login first"),
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
}

export default FurushCoin;
