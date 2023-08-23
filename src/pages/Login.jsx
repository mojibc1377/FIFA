import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { request } from '../services/requests';
import { useForm } from 'react-hook-form'; 

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm(); 

  const onSubmit = async (data) => {
    try {
      const response = await request.post('/api/login', {
        username: data.username,
        password: data.password,
      });

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex flex-col bg-pattern fade-out h-max items-center ">
      <form className="flex flex-col gap-4 mt-20" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('username', { required: true })} 
          className="rounded-md border  bg-gray-500 bg-opacity-20 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Username"
        />
        {errors.username && <span className="text-red-500">Username is required</span>}
        
        <input
          type="password"
          {...register('password', { required: true })} 
          className="rounded-md border bg-opacity-20 bg-gray-500 text-gray-300 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
        />
        {errors.password && <span className="text-red-500">Password is required</span>}
        
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
