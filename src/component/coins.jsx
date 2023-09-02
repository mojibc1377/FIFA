/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function Coins(){
    const [isActive, setIsActive] = React.useState(false);

  const resolvedPath = useResolvedPath();

  // Check if the "kharid" link is active
  const isKharidActive = useMatch('/coins/buy');

  // Check if the "furush" link is active
  const isFurushActive = useMatch('/coins/sell');

  return (
    <div className="coinss flex fade-out flex-row items-right gap-20 mx-10 lg:mx-96 xl:mx-96 md:mx-64 pt-20">
      <Link to="/coins/buy">
        <div
          className={`coin-buttons border-solid border-1 rounded-md backdrop-blur-sm py-1 px-4 text-2xl border-blue-400 ${
            isKharidActive || isActive ? 'bg-gray-500 border-blue-500 bg-opacity-70' : 'hover:bg-blue-500 hover:bg-opacity-70 hover:border-white'
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          خرید
        </div>
      </Link>
      <Link to="/coins/sell">
        <div
          className={`coin-buttons border-solid border-1 rounded-md py-1 px-4  backdrop-blur-sm text-2xl border-blue-400 ${
            isFurushActive ? 'bg-gray-500 border-blue-500 bg-opacity-70' : 'hover:bg-blue-500 hover:bg-opacity-70 hover:border-white'
          }`}
        >
          فروش
        </div>
      </Link>
    </div>
  );
}

export default Coins;