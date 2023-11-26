import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';
import App from './app'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
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
        },{
          path: '/about',
          element: <About />
        }, {
          path: '/contact',
          element: <Contact />
        }
      ],
    },
  ]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
