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
import About from './pages/About'
import Contact from './pages/Contact';  
import Page from './pages/Page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error />
  },
  {
    path: '/despre-noi',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/teme-fse+',
    element: <Page />
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
