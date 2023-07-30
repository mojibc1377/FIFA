/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { request } from '../services/requests';
import checkIfLoggedIn from '../component/Middleware/checkLoggedIn';
import Coins from '../component/coins';
import { Navigate } from 'react-router-dom';


function KharidCoin() {
  const [mizan, setMizan] = useState('');
  const [cost, setCost] = useState(0);
  const requestType = "buy";
  const user = (JSON.parse(localStorage.getItem('user')));

  const [accountCredit, setAccountCredit] = useState(0);

  useEffect(() => {
    // Calculate the cost whenever the mizan value changes
    if (mizan) {
      const calculatedCost = parseFloat(mizan) * 0.8;
      setCost(calculatedCost);
    } else {
      setCost(0);
    }
  }, [mizan]);

  useEffect(() => {
    // Fetch user's account credit
    const fetchAccountCredit = async () => {
      try {
        const { data } = await request.get(`/api/users?userId=${user._id}`);
       
        console.log(data[0])
        setAccountCredit(data[0].accountCredit);
      } catch (error) {
        console.error('Error fetching account credit:', error);
      }
    };

    fetchAccountCredit();
  }, []);

  const handlePurchase = async () => {
    try {
      // const response = await request.post('/api/users/purchase-coins', {
      //   userId: JSON.parse(localStorage.getItem('user'))._id,
      //   amount: parseFloat(mizan),
      // });
      request.post('/api/coins', {
        mizan: parseFloat(mizan),
        psnId: user.psnId, 
        requestType: requestType, 
      });
  alert("subimted")
      // Update the account credit after successful purchase
      // setAccountCredit(response.data.accountCredit);
  
      // Reset the input field
      setMizan('');
      setCost(0);
  
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
        <h2 className="text-3xl font-light mb-8">Buy Coins</h2>
        <div className="flex lg:flex-row flex-col gap-20">
          <input
            className="rounded-md border bg-slate-600 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            value={mizan}
            onChange={(e) => setMizan(e.target.value)}
            placeholder="Enter the amount of coins to purchase"
            required
          />
          <p className="text-gray-300">Cost: ${cost.toFixed()}</p>
        </div>
        <p className="text-gray-300">Account Credit: ${Number(accountCredit).toFixed()}</p>
        <button
          onClick={handlePurchase}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
        >
          Purchase
        </button>
      </div>
      ) : (
        alert("please login first"),
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
}


export default KharidCoin;
