import * as React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function Coins(){
    const [isActive, setIsActive] = React.useState(false);

  // Get the resolved path for the current location
  // eslint-disable-next-line no-unused-vars
  const resolvedPath = useResolvedPath();

  // Check if the "kharid" link is active
  const isKharidActive = useMatch('/guz');

  // Check if the "furush" link is active
  const isFurushActive = useMatch('/chos');

  return (
    <div className="coinss flex fade-out flex-row justify-center gap-20 pt-16">
      <Link to="/coins/buy">
        <div
          className={`coin-buttons border-solid border-1 rounded-md py-1 px-4 text-2xl border-blue-400 ${
            isKharidActive || isActive ? 'bg-gray-500 border-blue-500' : 'hover:bg-blue-500 hover:bg-opacity-50 hover:border-white'
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          خرید
        </div>
      </Link>
      <Link to="/coins/sell">
        <div
          className={`coin-buttons border-solid border-1 rounded-md py-1 px-4 text-2xl border-blue-400 ${
            isFurushActive ? 'bg-gray-500 border-blue-500' : 'hover:bg-blue-500 hover:bg-opacity-50 hover:border-white'
          }`}
        >
          فروش
        </div>
      </Link>
    </div>
  );
}

export default Coins;