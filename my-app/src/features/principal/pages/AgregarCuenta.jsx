import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import parConApi from '../../../config/parConApi';

const AgregarCuenta = () => {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipoCuenta, setTipoCuenta] = useState(''); // Nuevo campo
  const [allowMovement, setAllowMovement] = useState(false); // Nuevo campo
  const navigate = useNavigate();

  const handleAgregarCuenta = async (e) => {
    e.preventDefault();

    const newAccount = {
      accountNumber: codigo,
      name: nombre,
      typeAccount: tipoCuenta,
      allowMovement: allowMovement,
      parentAccountId: null, 
        };

        try {
          const response = await parConApi.post('/accounts', newAccount);
          console.log('Cuenta creada con éxito', response.data);
          // Redirigir o mostrar un mensaje de exito
        } catch (error) {
          console.error('Error al crear la cuenta', error);
        }
      
  };

  return (
    <div className="">
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

      <div className="p-1 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-2">Agregar Nueva Cuenta</h2>

        <form onSubmit={handleAgregarCuenta} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div>
            <label className="block text-gray-800">Código</label>
            <input
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800">Descripción</label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800">Tipo de Cuenta</label>
            <select
    value={tipoCuenta}
    onChange={(e) => setTipoCuenta(e.target.value)}
    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
    required
  >
    <option value="Ahorros">Ahorros</option>
    <option value="Corriente">Corriente</option>
    <option value="Inversiones">Inversiones</option>
    <option value="Activo">Activo</option>
    <option value="Pasivo">Pasivo</option>
    <option value="Capital">Capital</option>
    <option value="Ingresos">Ingresos</option>
    <option value="Gastos">Gastos</option>
  </select>
          </div>
          <div>
            <label className="block text-gray-800">Permitir Movimiento</label>
            <input
              type="checkbox"
              checked={allowMovement}
              onChange={(e) => setAllowMovement(e.target.checked)}
              className="w-4 h-4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgregarCuenta;
