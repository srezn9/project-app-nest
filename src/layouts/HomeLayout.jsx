import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import AppSlider from '../components/pages/AppSlider';

const HomeLayout = () => {
    const location = useLocation();

    
    const showSlider = location.pathname === "/";
    return (
        <div className=''>
            <header  className='max-w-11/12 mx-auto'>
                <Navbar></Navbar>
                {showSlider && <AppSlider />}
            </header>
            <main className='max-w-11/12 mx-auto my-20'>
                <Outlet></Outlet>
            </main>
            <footer className='mt-16'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;