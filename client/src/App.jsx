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
  SingleProduct,
} from './pages';


import { action as registerAction } from "./pages/Register"
import { action as loginAction } from "./pages/Login"
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { action as addProductAction } from './pages/AddProduct';
import { loader as allProductsLoader } from './pages/AllProducts';

import { action as editProductAction } from './pages/EditProduct';
import { loader as editProductLoader } from './pages/EditProduct';

import { loader as singleProductLoader } from './pages/SingleProduct';

import { action as profileAction } from './pages/Profile';

import { action as deleteProductAction } from './pages/DeleteProduct';




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
            action:addProductAction,
          },
          {
            path:"stats",
            element: <Stats/>,
          },
          {
            path:"allProducts",
            element: <AllProducts/>,
            loader: allProductsLoader,
          },
          {
            path:"profile",
            element: <Profile/>,
            action:profileAction,
          },
          // {
          //   path:"admin",
          //   element: <Admin/>,
          // },
          {
            path:"editProduct/:id",
            element: <EditProduct/>,
            loader:editProductLoader,
            action:editProductAction,
          },
          {
            path:"singleProduct/:id",
            element: <SingleProduct/>,
            loader:singleProductLoader,
          },
          { path: 'deleteProduct/:id', action: deleteProductAction },
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