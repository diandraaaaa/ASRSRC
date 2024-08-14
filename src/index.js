import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Error from './pages/Error';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
