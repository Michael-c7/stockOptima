import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddProduct,
  Stats,
  AllProducts,
  Profile,
  Admin,
  EditProduct,
} from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children:[
      {
        index:true,
        element: <Landing/>
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout/>,
      },
    ],
  },

]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App