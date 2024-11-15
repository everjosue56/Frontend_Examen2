import React from 'react'
import { Route, Routes } from "react-router-dom"
import SecurityRouter from '../features/security/routes/SecurityRouter';
import Login from '../features/security/pages/LoginPage';
import { PrincipalRouter } from '../features/principal/routes/PrincipalRouter';
 


export const AppRouter = () => {
  return (
     <Routes>
                <Route path="/security/*" element={<SecurityRouter />} />
                <Route path='/*' element={<PrincipalRouter/>} />
    </Routes>
  )
}

export default AppRouter;
