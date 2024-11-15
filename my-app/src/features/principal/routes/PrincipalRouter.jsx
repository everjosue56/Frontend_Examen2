import React from 'react'
import Navbar from '../components/Nav'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import HomePage from '../pages/HomePage'
import CatalogoCuentas from '../pages/CatalogoCuenta'
import CrearPartidaContable from '../pages/CrearPartida'
import PartidasContables from '../pages/VerPartidas'
import VerLogs from '../pages/Logs'
import AgregarCuenta from '../pages/AgregarCuenta'
import Logs from '../pages/Logs'
 
 
export const PrincipalRouter = () => {
  return (
    <div>
         <Navbar/>
         <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/catalogo" element={<CatalogoCuentas/>} />
         <Route path="/partida-contable" element={<CrearPartidaContable/>} />
         <Route path='/logs' element={<Logs/>} />
         <Route path='/ver-partidas' element={<PartidasContables/>} />
         <Route path='/agregar-cuenta' element={<AgregarCuenta/>} />
         </Routes>     
         <Footer/>
    </div>
  )
}
