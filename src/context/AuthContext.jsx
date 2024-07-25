// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  const [attempted, setAttempted] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setAttempted(false);
  };

  

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, username, setUsername, password, setPassword, attempted, setAttempted, logout  }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
