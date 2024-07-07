import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate,
  } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import CartPage from './Pages/CartPage';  
import CheckoutPage from './Pages/CheckoutPage';
import ProductPage from './Pages/ProductPage';
const navigate = useNavigate()
const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
      errorElement:<><div className='w-full h-full flex justify-center items-center'><button onClick={navigate}>Return to main page</button></div></>
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/signup",
      element: <SignupPage/>,
    },
    {
      path: "/cart",
      element: <CartPage/>,
    },
    {
      path: "/checkout",
      element: <CheckoutPage/>,
    },
    {
      path: "/product/:id",
      element: <ProductPage/>,
    },
  ]);
function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router