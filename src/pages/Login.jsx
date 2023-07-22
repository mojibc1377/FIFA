import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Users from '../data/users'; // Import the Users data

function Login(onLogin) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const foundUser = Users.find((user) => user.username === username && user.password === password);

    if (foundUser) {
      // User found, set isLoggedIn to true and navigate to home page
      // You can use local storage or a state management library for a persistent login state
      localStorage.setItem('isLoggedIn', true); // Storing the login status in localStorage (not the best solution, but for simplicity)
      localStorage.setItem('loggedInUser' , (username,username))
      console.log(localStorage.getItem("loggedInUser"))
      navigate('/');
    } else {
      // User not found, show alert and navigate to signup page
      alert('User not found ,Try Again');
      // navigate('/signup');
    }
  };

  return (
    <div className="flex flex-col fade-out items-center ">
      <form className="flex flex-col gap-4 mt-20" onSubmit={handleSubmit}>
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
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm">
        Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
