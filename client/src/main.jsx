import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/Signup.jsx';
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NoMatch />,
      children: [
        {
          index: true,
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
