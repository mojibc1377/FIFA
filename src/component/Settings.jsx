import React, { useState } from 'react';
import { request } from '../services/requests';
import AvatarSelector from './avatarSelector';
import {useNavigate } from 'react-router-dom';

function Settings() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [number, setNumber] = useState('');
  const [psnId, setPsnId] = useState('');
  const [ avatar ,setAvatar] = useState('')
  const user = JSON.parse(localStorage.getItem("user")) 
  const navigate = useNavigate();

  const name= user.name
  const credit = user.accountCredit
  const userId = user._id  

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
    setNumber(event.target.value);
  };

  const handlePsnIdChange = (event) => {
    setPsnId(event.target.value);
  };
  
  const handleAvatarSelect = (avatarLink) =>{
    setAvatar(avatarLink)
  }


  const handleSubmit = (event) => {

    const dataToUpdate = {
      name,
      username : (username.trim() || JSON.parse(localStorage.getItem('user'))?.username),
      password : (newPassword.trim() || JSON.parse(localStorage.getItem('user'))?.password),
      number : (number.trim() || JSON.parse(localStorage.getItem('user'))?.number),
      psnId :(psnId.trim() || JSON.parse(localStorage.getItem('user'))?.psnId),
      credit,
      avatar : (avatar || JSON.parse(localStorage.getItem('user'))?.avatar)
    };
    // name: String,
    // username: String,
    // password: String,
    // number: String,
    // psnId: String,
    // accountCredit: String, // schema

    try {
      request.put(`/api/settings/users/${userId}`, dataToUpdate);
      localStorage.clear()
      alert("please login with your new information")
      navigate("/login")
      
    } catch (error) {
      console.error('Error updating account information:', error);
      alert('An error occurred while updating account information');
    }
  
    
  };

  return (
    <div className="bg-gray-700 backdrop-blur-sm bg-opacity-5 xl:mx-64 mx-10 pt-20 min-h-full mb-5 sliding-div text-gray-100 p-8 rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">تنظیمات حساب</h2>
      <div className="flex flex-col items-center"> 
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">
            نام کاربری
          </label>
          <input
  type="text"
  id="username"
  value={username}
  defaultValue={JSON.parse(localStorage.getItem('user'))?.username}
  placeholder={JSON.parse(localStorage.getItem('user'))?.username}
  onChange={handleUsernameChange}
  className="w-full px-3 py-2 rounded-md bg-gray-600 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            رمز فعلی
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
            رمز جدید
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            defaultValue={password}
            onChange={handleNewPasswordChange}
            placeholder="Enter your new password"
            className="w-full px-3 py-2 rounded-md bg-gray-600 text-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-1">
            موبایل
          </label>
          <input
            type="number"
            id="phoneNumber"
            value={number}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
            defaultValue={JSON.parse(localStorage.getItem('user'))?.number}
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
            defaultValue={JSON.parse(localStorage.getItem('user'))?.psnId}
            className="w-full px-3 py-2 rounded-md bg-gray-600 text-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
      <AvatarSelector onAvatarSelect={handleAvatarSelect} />
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            ذخیره اطلاعات
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Settings;
