import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CrearPartidaContable = () => {
  // Estado para la fecha, descripcion
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [lineas, setLineas] = useState([
    { cuenta: '', tipo: 'Débito', monto: '' },
  ]);

  // agregar partida
  const agregarLinea = () => {
    setLineas([...lineas, { cuenta: '', tipo: 'Débito', monto: '' }]);
  };

  // editar
  const actualizarLinea = (index, campo, valor) => {
    const nuevasLineas = [...lineas];
    nuevasLineas[index][campo] = valor;
    setLineas(nuevasLineas);
  };

  return (
    <div className=" ">
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

      <div className='p-12 max-w-4xl mx-auto'> 
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Crear Partida Contable</h1>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows="3"
            placeholder="Descripción de la partida contable"
            required
          />
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Líneas de Partida</h2>
          {lineas.map((linea, index) => (
            <div key={index} className="flex items-center space-x-4 mb-4">
              <input
                type="text"
                placeholder="Cuenta"
                value={linea.cuenta}
                onChange={(e) => actualizarLinea(index, 'cuenta', e.target.value)}
                className="flex-1 border border-gray-300 rounded-md p-2"
                required
              />

              <select
                value={linea.tipo}
                onChange={(e) => actualizarLinea(index, 'tipo', e.target.value)}
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="Débito">Débito</option>
                <option value="Crédito">Crédito</option>
              </select>

              <input
                type="number"
                placeholder="Monto"
                value={linea.monto}
                onChange={(e) => actualizarLinea(index, 'monto', e.target.value)}
                className="border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          ))}

          <button
            type="button"
            onClick={agregarLinea}
            className="text-blue-500 hover:text-blue-700 mt-2"
          >
            + Agregar Línea
          </button>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Guardar Partida Contable
          </button>
        </div>
      </form>
      </div>
      <div className=''></div>
    </div>
  );
};

export default CrearPartidaContable;
