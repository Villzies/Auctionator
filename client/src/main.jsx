import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/Signup.jsx';
import App from './app.jsx'
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
          index: true,
          element: <Signup />
        }
      ],
    },
  ]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
