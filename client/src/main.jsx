import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import App from './app'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/home',
          element: <Home />
        }, {
          path: '/login',
          element: <Login />
        }, {
          path: '/signup',
          element: <Signup />
        }
      ],
    },
  ]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
