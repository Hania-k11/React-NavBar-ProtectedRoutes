import React from 'react'
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
    <App />
    </AuthProvider>
  </React.StrictMode>,
)
