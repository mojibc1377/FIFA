import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Users from '../data/users'; // Import the Users data

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [psnId, setPsnId] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePsnIdChange = (event) => {
    setPsnId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the username already exists in the Users array
    const isUsernameTaken = Users.some((user) => user.username === username);

    if (isUsernameTaken) {
      alert('Username is already taken. Please choose a different one.');
      return;
    }

    // Create a new user object and add it to the Users array (for demonstration purposes only)
    const newUser = {
      id: Users.length + 1, // Generate a unique ID (replace this with a more robust approach in a real app)
      name: name,
      username: username,
      password: password,
      number: phoneNumber,
      psnId: psnId,
      accountCredit: '0',
    };

    Users.push(newUser); // Add the new user to the Users array (for demonstration purposes only)

    // You might want to save the Users array to a backend or database in a real app

    alert('Signup successful. Please log in with your new account.');
    navigate('/login');
  };

  return (
    <div className="flex flex-col fade-out items-center">
      <form className="flex flex-col gap-4 mt-20" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="rounded-md border bg-slate-600 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="rounded-md border bg-slate-600 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="rounded-md border bg-slate-600 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          required
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="rounded-md border bg-slate-600 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Phone Number"
          required
        />
        <input
          type="text"
          value={psnId}
          onChange={handlePsnIdChange}
          className="rounded-md border bg-slate-600 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="PSN ID"
          required
        />
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
