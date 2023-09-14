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


import { action as registerAction } from "./pages/Register"
import { action as loginAction } from "./pages/Login"
import { loader as dashboardLoader } from './pages/DashboardLayout';


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
        action: loginAction,
      },
      {
        path: "register",
        element: <Register/>,
        action: registerAction,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout/>,
        loader:dashboardLoader,
        children: [
          {
            index:true,
            element:<AddProduct/>,
          },
          {
            path:"stats",
            element: <Stats/>,
          },
          {
            path:"allProducts",
            element: <AllProducts/>,
          },
          {
            path:"profile",
            element: <Profile/>,
          },
          {
            path:"admin",
            element: <Admin/>,
          },
          {
            path:"editProduct",
            element: <EditProduct/>,
          },
        ]
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