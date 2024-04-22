import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import App from './App.jsx';
import Wrapper from './layouts/Wrapper.jsx';
import { Home } from './pages';
import Contact from './pages/Contact.jsx';

import './sass/index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
