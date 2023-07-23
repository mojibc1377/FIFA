// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const navigate = useNavigate();

  const handleCreateChallenge = () => {
    navigate('/mosabeqat/new');
  };
  const handleSettings = () => {
    navigate('/settings');
  };

  return (
    <div className="bg-gray-700 text-gray-100 pt-20 p-8 rounded-md shadow-md">
      <div>
        <button
          type="submit"
          onClick={handleCreateChallenge}
          className="bg-blue-500 border-1 hover:bg-blue-600 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Post Challenge
        </button>
        <button
          type="button"
          onClick={handleSettings}
          className="ml-4 bg-green-500 border-1 hover:bg-green-600 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Account Settings
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
