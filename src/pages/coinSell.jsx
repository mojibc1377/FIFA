import * as React from 'react';
import Coins from '../component/coins';
import {Navigate } from 'react-router-dom';


function FurushCoin(){
    return(
        <>
              <Coins/>
{localStorage.getItem("isLoggedIn") ? 
(
        <ul className='coin-buy flex fade-out flex-col justify-evenly gap-10 pr-3 mt-5'>
            <li className='flex flex-row-reverse'>
                <p className='firstLine font-medium'>: میزان کوین قابل فروش </p>
                <input className='mizan text-white font-extralight text-right lg:w-48 lg:px-4 px-2 w-40 mr-2 rounded-md bg-gray-700' type="number" placeholder='مقدار به اعداد انگلیسی'></input>
            </li>
            <li className='flex flex-row-reverse'>
                <p className='font-medium'>: آیدی PSN</p>
                <input className='id font-extralight text-white text-left px-2 w-40 mr-2 rounded-md bg-gray-700' placeholder="@psnId"></input>
            </li>
            <li className='flex flex-row-reverse'>
                <p className='font-medium'> : قیمت سفارش </p>
                <p className='coin-buy-price px-2'>$00.00</p>
            </li>
        </ul>
):(
<Navigate to="/login" replace={true} />
)}
        </>
    )
}

export default FurushCoin;