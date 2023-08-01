import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { request } from '../services/requests';
import AvatarSelector from '../component/avatarSelector';

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [psnId, setPsnId] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const navigate = useNavigate();

  const handleAvatarSelect = (avatarLink) => {
    setSelectedAvatar(avatarLink);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePsnIdChange = (event) => {
    setPsnId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const users = await request.get('/api/users')
      const isUsernameTaken = (users.data).some((user) => user.username === username);
      if (isUsernameTaken) {
          alert('Username is already taken. Please choose a different one.');
          return;
        }
        if (password !== passwordConfirm) {
          alert('passwords doesnt match');
          return;
        }
    } catch (error) {
      console.error('Error registering user:', error);
    }
    const userData = {
      name,
      username,
      password,
      phoneNumber,
      psnId,
      accountCredit: '0',
      avatar: selectedAvatar, 
    };
    try {

      request.post('/api/signup', userData);
      alert('Signup successful. Please log in with your new account.');
      navigate('/login');
    } catch (error) {

      console.error('Error registering user:', error);
      alert('An error occurred while registering user. Please try again Later.');
    }
  };
   

  return (
    <div className="flex flex-col fade-out items-center">
      <form className="flex flex-col gap-4 mt-20" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="rounded-md border bg-slate-600 bg-opacity-40 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="rounded-md border bg-slate-600 bg-opacity-40 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="rounded-md border bg-slate-600 bg-opacity-40 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
          className="rounded-md border bg-slate-600 bg-opacity-40 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Password Again"
          required
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="rounded-md border bg-slate-600 bg-opacity-40 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="09*********"
          required
        />
        <input
          type="text"
          value={psnId}
          onChange={handlePsnIdChange}
          className="rounded-md border bg-slate-600 bg-opacity-40 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="PSN ID"
          required
        />
      <AvatarSelector onAvatarSelect={handleAvatarSelect} />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Signup
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account? <Link to="/login" className="text-blue-500">Log in</Link>
      </p>
    </div>
  );
}

export default Signup;
