import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

 

const PartidasContables = () => {
 
const partidas = [
    {
      id: 1,
      date: '2024-11-12',
      description: 'Descripción de la partida 1',
      userId: 'Usuario1',
      isActive: true,
    },
    {
      id: 2,
      date: '2024-11-13',
      description: 'Descripción de la partida 2',
      userId: 'Usuario2',
      isActive: false,
    },
  ];
  return (
     
    <div className="">

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

      <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Partidas Contables</h1>

      <div className="overflow-x-auto py-2">
        <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Fecha</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Descripción</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Usuario</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Activo</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {partidas.map((partida) => (
              <tr key={partida.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-800">{partida.date}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{partida.description}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{partida.userId}</td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {partida.isActive ? 'Sí' : 'No'}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  <Link to={`/editar-partida/${partida.id}`} className="text-blue-500 hover:text-blue-700">
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      <div className='py-24'></div>
    </div>
  );
};
 

export default PartidasContables;
