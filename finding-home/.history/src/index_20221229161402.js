import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './context/authContext';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Register from './pages/Register';
imp

const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
);

