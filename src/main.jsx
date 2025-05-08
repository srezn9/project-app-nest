import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router";
import { router } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Provider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> 
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
)
