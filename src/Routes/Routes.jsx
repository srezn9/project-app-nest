import React from "react";
import {
  createBrowserRouter,
} from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";
import AppDetails from "../components/pages/AppDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import OfferDetails from "../components/pages/Offers/OfferDetails";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/pages/Profile";
import Loader from "../components/Loader";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          index:true,
          loader: ()=>fetch('/apps.json'),
          path: "/",
          element: <Home></Home>,
          hydrateFallbackElement:<Loader></Loader>,
        },
        {
          
          path: "/app/:id",
          loader: async ({ params }) => {
            const res = await fetch('/apps.json');
            const apps = await res.json();
            return apps.find(app => app.id === params.id);
          },
          element: (
            <PrivateRoute>
              <AppDetails></AppDetails>
            </PrivateRoute>
          ),
          hydrateFallbackElement:<Loader></Loader>,
        },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <Profile></Profile>
            </PrivateRoute>
          ),
        },
        {
          loader: ()=>fetch('/apps.json'),
          path: "/offers",
          element: <OfferDetails></OfferDetails>,
          hydrateFallbackElement:<Loader></Loader>,
        },
        {
          path: "/login",
          element: <Login></Login>,
          
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        
        
      ]
    },
    
      
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
  ]);