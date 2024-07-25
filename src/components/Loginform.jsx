import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Home from './Home';
import Unauthorized from './Unauthorized';
import ProtectedRoute from './ProtectedRoute';
import Protect from './Protect';

const LoginForm = () => {
    const mystate= useContext(AuthContext);
    console.log("login", mystate);
    console.log("useryyy", mystate.username);


    const handleClick = (e) => {
        e.preventDefault(); 
        console.log('Login button clicked');
        console.log('Username:', mystate.username);
        console.log('autheticated:', mystate.isAuthenticated);
        console.log('attempt',mystate.attempted)

        console.log('Password:', mystate.password);
         
        mystate.setAttempted(true);

     
        if (mystate.username === 'Hania' && mystate.password === '123') {
            mystate.setIsAuthenticated(true);
          
            console.log('Authentication successful');
          } else {
            mystate.setIsAuthenticated(false);
           
            console.log('Authentication failed');
          }
          
       
      };

      if (mystate.attempted) {
        if (mystate.isAuthenticated) {
          return <Home />;
        } else {
          return <Unauthorized />;
        }
      }
    

  return (
    <>
    <ProtectedRoute/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-slate-300">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username " className="block text-gray-700 font-medium mb-2">Username </label>
            <input
              type="text"
              id="username"
              value={mystate.username}
              onChange={(e) => mystate.setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={mystate.password}
              onChange={(e) => mystate.setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            onClick={handleClick}
            
            className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          
        </form>
      </div>
    </div>
    </>
  );
};

export default LoginForm;