import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

     
  return (
   
    <div className=" bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-md">
        <ul className="flex space-x-8 text-white">
          <li>
            <Link to="/catalogo" className="hover:text-gray-300">Catálogo de Cuentas</Link>
          </li>
          
          <li>
            <Link to="/partida-contable" className="hover:text-gray-300">Partida Contable</Link>
          </li>
          <li>
            <Link to="/logs" className="hover:text-gray-300">Logs</Link>
          </li>
          <li>
            <Link to="/ver-partidas" className="hover:text-gray-300">Ver partidas contables</Link>
          </li>
        </ul>
      </nav>
       <div className='mt-44'>
        <div className='mb-12'>
                 {/*  Contentido */}
      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Bienvenido al Sistema de Contabilidad</h1>
        <p className="text-lg text-gray-600 mb-6">Selecciona una opción del menú para comenzar.</p>
      </div>
        </div>
        </div>
       
      </div>
     
     
  );
};

export default HomePage;
