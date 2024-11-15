
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parConApi } from '../../../config/parConApi';
import { Pagination } from '../../../shared/components';

const CatalogoCuentas = () => {
  const [cuentas, setCuentas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Funcion para obtener las cuentas con paginacion
  const fetchCuentas = async (page) => {
    try {
      const response = await parConApi.get(`/accounts?page=${page}`);
      setCuentas(response.data.items || []);  
      setTotalPages(response.data.totalPages || 1); // Total de  paginas
    } catch (error) {
      console.error('Error al obtener las cuentas:', error);
    }
  };

  useEffect(() => {
    fetchCuentas(currentPage);
  }, [currentPage]);

  //   botones de paginación
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-md">
        <ul className="flex space-x-8 text-white">
          <li><Link to="/catalogo" className="hover:text-gray-300">Catálogo de Cuentas</Link></li>
          <li><Link to="/partida-contable" className="hover:text-gray-300">Partida Contable</Link></li>
          <li><Link to="/logs" className="hover:text-gray-300">Logs</Link></li>
          <li><Link to="/ver-partidas" className="hover:text-gray-300">Ver partidas contables</Link></li>
        </ul>
      </nav>

      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 py-8">Catálogo de Cuentas</h1>
      </div>

      {/* Boton de Agregar Cuenta */}
      <Link to="/agregar-cuenta" className="mb-4 inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-800">
        Agregar Nueva Cuenta
      </Link>

      {/* Tabla de Catalogo de Cuentas */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white border-collapse shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Código</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Nombre</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Tipo de Cuenta</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Permitir Movimiento</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cuentas.map((cuenta) => (
              <tr key={cuenta.accountNumber} className="border-b">
                <td className="px-6 py-4 text-sm text-gray-800">{cuenta.accountNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{cuenta.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{cuenta.typeAccount}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{cuenta.allowMovement ? 'Sí' : 'No'}</td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  <Link to={`/editar-cuenta/${cuenta.accountNumber}`} className="text-blue-500 hover:text-blue-700">
                    Editar
                  </Link>
                </td>
              </tr> 
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6">
        
      </div>
      {/* Componente de Paginación */}
      <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          setCurrentPage={handleCurrentPage}
        />
    </div>
  );
};

export default CatalogoCuentas;
