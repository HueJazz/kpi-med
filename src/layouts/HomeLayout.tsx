import React from 'react';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';

const FAQ: React.FC = () => {
  return (
    <div>
        <ScrollTop />
        <Header />
        <Subheader />
        <Outlet />
        <Footer />
    </div>
  );
}

export default FAQ;