import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';


import './styles/index.css'; 

// router setting 
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App element is root
    children: [
      {
        index: true, 
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);