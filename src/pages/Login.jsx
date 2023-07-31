import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { request } from '../services/requests';

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
  const [Users , setUsers] = React.useState([])
  React.useEffect(()=>{
    const fetchProducts = async() =>{
      const {data} = await request.get('/api/users');
      setUsers(data)
      console.log("users are fetched")
    }
    fetchProducts();
  },[])
  const handleSubmit = (event) => {
    event.preventDefault();
    const foundUser = Users.find((user) => user.username === username && user.password === password);
    if (foundUser) {
      
      localStorage.setItem('isLoggedIn', true); 
      localStorage.setItem('loggedInUser' , (foundUser.username))
      localStorage.setItem("user", JSON.stringify(foundUser));
    
      navigate('/');
    } else {
      alert('User not found ,Try Again');
    }
  };

  return (
    <div className="flex flex-col fade-out h-full items-center ">
      <form className="flex flex-col gap-4 mt-20" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="rounded-md border  bg-gray-500 bg-opacity-20 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="rounded-md border bg-opacity-20 bg-gray-500 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
