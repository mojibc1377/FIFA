/* eslint-disable no-unused-vars */
import * as React from 'react';
import Coins from '../component/coins';
import { Navigate } from 'react-router-dom';
import { request } from "../services/requests";
import { useEffect } from 'react';
import checkIfLoggedIn from '../component/Middleware/checkLoggedIn';

function FurushCoin() {
  const [mizan, setMizan] = React.useState('');
  const [psnId, setPsnId] = React.useState('');
  const requestType = "sell";
  const [cost, setCost] = React.useState(0);

  useEffect(() => {
    // Calculate the cost whenever the mizan value changes
    if (mizan) {
      const calculatedCost = parseFloat(mizan) * 0.6;
      setCost(calculatedCost);
    } else {
      setCost(0);
    }
  }, [mizan]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await request.post('/api/coins', {
        mizan: mizan,
        psnId: psnId,
        requestType: requestType
      });
      alert("your request submitted succ");
    } catch (error) {
      // Handle error if the API call fails
      alert("error");
      console.error('Error:', error);
    }
  };

  // Get the user data from localStorage if the user is logged in
  React.useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      const userData = JSON.parse(localStorage.getItem("user"));
      setPsnId(userData?.psnId || "");
    }
  }, []);

  return (
    <>
      <Coins />
      {checkIfLoggedIn() ? (
        <form onSubmit={handleSubmit}>
          <ul className='coin-buy flex fade-out flex-col justify-evenly gap-10 pr-3 mt-5'>
            <li className='flex flex-row-reverse'>
              <p className='firstLine font-medium'>: میزان کوین قابل فروش </p>
              <input
                className='mizan text-white font-extralight text-right lg:w-48 lg:px-4 px-2 w-40 mr-2 rounded-md bg-gray-700'
                type="number"
                placeholder='مقدار به اعداد انگلیسی'
                required
                value={mizan}
                onChange={(e) => setMizan(e.target.value)}
              />
            </li>
            <li className='flex flex-row-reverse'>
              <p className='font-medium'>: آیدی PSN</p>
              <input
                className='id font-extralight text-white text-left px-2 w-40 mr-2 rounded-md bg-gray-700'
                placeholder={(JSON.parse(localStorage.getItem("user"))).psnId}
                defaultValue={(JSON.parse(localStorage.getItem("user"))).psnId}
                value={psnId}
                onChange={(e) => setPsnId(e.target.value)}
              />
            </li>
            <li className='flex flex-row-reverse items-center'>
              <p className='font-medium'> : قیمت سفارش </p>
              <p className='coin-buy-price px-2'>${cost.toFixed()}</p>
            </li>
            <div className='bottun container w-full flex justify-end'>
              <button
                type="submit"
                onClick={handleSubmit}
                className='submit justify-start text-blue-200 px-4 py-2 border-1 w-32 rounded-md hover:bg-blue-500 ml-2'>Submit</button>
            </div>
          </ul>
        </form>
      ) : (
        alert("please login first"),
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
}

export default FurushCoin;
