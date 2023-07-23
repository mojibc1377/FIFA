import React, { useState } from 'react';

function Settings() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [psnId, setPsnId] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePsnIdChange = (event) => {
    setPsnId(event.target.value);
  };

  const handleSubmit = (event) => {

    // Implement logic to update the user's account settings in the backend
   
    console.log('Updated Username:', username);
    console.log('Updated Password:', newPassword);
    console.log('Old Password:', password);
    console.log('Phone Number:', phoneNumber);
    console.log('PSN ID:', psnId);

    
   alert('data has been changed successfully')
  };

  return (
    <div className="bg-gray-700 absolute w-full top-14 sliding-div text-gray-100 p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your new username"
            required
            className="w-full px-3 py-2 rounded-md bg-gray-600 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Current Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your current password"
            required
            className="w-full px-3 py-2 rounded-md bg-gray-600 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block mb-1">
            New Password:
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
            placeholder="Enter your new password"
            required
            className="w-full px-3 py-2 rounded-md bg-gray-600 text-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-1">
            Phone Number:
          </label>
          <input
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
            required
            className="w-full px-3 py-2 rounded-md bg-gray-600 text-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="psnId" className="block mb-1">
            PSN ID:
          </label>
          <input
            type="text"
            id="psnId"
            value={psnId}
            onChange={handlePsnIdChange}
            placeholder="Enter your PSN ID"
            required
            className="w-full px-3 py-2 rounded-md bg-gray-600 text-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
