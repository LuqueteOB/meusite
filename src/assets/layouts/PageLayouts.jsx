import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './PageLayout.css';


const PageLayout = () => (
    <>
    <Header/>
    <div className="page-layout">
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
   </>
);

export default PageLayout;