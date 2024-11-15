import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Login from '../pages/LoginPage';
import Navbar from '../../principal/components/Nav';
import Footer from '../../principal/components/Footer';

export const SecurityRouter = () => {
  return (
    <div>
      <Navbar />
      <div className='py-4'></div>
      <Routes>
        
        <Route path='/login' element={<Login />} />  
        <Route path='/*' element={<Navigate  to={"/security/login"} />} />
      </Routes>
      <div className="py-8"></div>
      <Footer />
    </div>
  );
};

export default SecurityRouter;