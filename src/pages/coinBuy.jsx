/* eslint-disable no-unused-vars */
import * as React from 'react';
import Coins from '../component/coins';
import {Navigate } from 'react-router-dom';
import { request } from '../services/requests';
import { useEffect } from 'react';


function KharidCoin() {
    const [mizan, setMizan] = React.useState('');
    const [psnId, setPsnId] = React.useState((JSON.parse(localStorage.getItem("user"))).psnId);
    const requestType = "buy"
    const [cost, setCost] = React.useState(0);

    useEffect(() => {
        // Calculate the cost whenever the mizan value changes
        if (mizan) {
          const calculatedCost = parseFloat(mizan) * 0.8;
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
          requestType : requestType
        });
  
        alert("your request submmited succ")  
  
      } catch (error) {

        console.error('Error:', error);
      }
    };
  
    return (
      <>
        <Coins />
        {localStorage.getItem("isLoggedIn") ? (
          <form onSubmit={handleSubmit}>
            <ul className='coin-buy flex fade-out flex-col justify-evenly gap-10 pr-3 mt-5'>
              <li className='flex flex-row-reverse'>
                <p className='firstLine font-medium'>: میزان کوین درخواستی </p>
                <input
                  className='mizan font-extralight text-white text-right px-2 w-40 mr-2 rounded-md bg-gray-700'
                  type="number"
                  required
                  placeholder='مقدار به اعداد انگلیسی'
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
              <li className='flex flex-row-reverse'>
                <p className='font-medium'> : قیمت سفارش </p>
                <p className='coin-buy-price px-2'>${cost.toFixed()}</p>
              </li>
              <div className='bottun container w-full flex justify-end'>
              <button type="submit"
               onClick={handleSubmit}
               className='submit justify-start text-blue-200 px-4 py-2 border-1 w-32 rounded-md hover:bg-blue-500 ml-2'>Submit</button>
            </div>
            </ul>
          </form>
        ) : (
          <Navigate to="/login" replace={true} />
        )}
      </>
    );
  }
  
  export default KharidCoin;
  