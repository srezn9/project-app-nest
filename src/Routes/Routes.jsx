import React from "react";
import {
  createBrowserRouter,
} from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";
import AppDetails from "../components/pages/AppDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import OfferDetails from "../components/pages/Offers/OfferDetails";


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
        },
        {
          
          path: "/app/:id",
          loader: async ({ params }) => {
            const res = await fetch('/apps.json');
            const apps = await res.json();
            return apps.find(app => app.id === params.id);
          },
          element: <AppDetails></AppDetails>,
        },
        {
          loader: ()=>fetch('/apps.json'),
          path: "/offers",
          element: <OfferDetails></OfferDetails>
        }
      ]
    },
    {
        path: "/auth/login",
        element: <div>Auth</div>,
      },
      {
        path: "/auth/register",
        element: <div>apps</div>,
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
  ]);