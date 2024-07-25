import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Navbar from './Navbar';

const Home = () => {
    const homestate= useContext(AuthContext);


  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-teal-50">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome Back! {homestate.username}</h1>
      <p className="text-lg text-gray-700 mb-6">
        We're glad to see you again.
      </p>
      
    </div>
  </div>
  </>
  )
}

export default Home