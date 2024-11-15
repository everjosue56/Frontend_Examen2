import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import parConApi from '../../../config/parConApi';

const Logs = () => {
  const [logs, setLogs] = useState([]); 
  const [loading, setLoading] = useState(true); 

  // Funcion para obtener los logs desde el backend
  const fetchLogs = async () => {
    try {
      const response = await parConApi.get('/logs');  
      setLogs(response.data);  
      setLoading(false);  
    } catch (error) {
      console.error('Error al obtener los logs:', error);
      setLoading(false);  
    }
  };

   
  useEffect(() => {
    fetchLogs();
  }, []);

   
  if (loading) {
    return <div>Loading...</div>;
  }

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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Registros de Logs</h1>

        <div className="overflow-x-auto py-2">
          <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Usuario</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Id de Partida</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Descripción</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">{log.userId}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{log.journalEntryId}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{log.description}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{new Date(log.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="py-24"></div>
    </div>
  );
};

export default Logs;
