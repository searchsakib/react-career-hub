import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Applied from './components/Applied/Applied';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
// import Jobs from './components/Jobs/Jobs';
import Root from './components/Root/Root';
import Statistics from './components/Statistics/Statistics';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      // {
      //   path: '/jobs',
      //   element: <Jobs></Jobs>,
      // },
      {
        path: '/applied',
        element: <Applied></Applied>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
