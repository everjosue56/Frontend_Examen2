import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-44 md:flex md:justify-between">
        {/*  Descripcion */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Partidas Contables</h2>
          <p className="mt-2 text-gray-400">Un sitio web en el que puedes hacer tus partidas contables.</p>
        </div>
 

        {/* sobre nosotros  */}
        <div>
          <h3 className="font-semibold text-2xl">Desarrolladores</h3>
          <ul className="flex mt-auto space-x-4">
            <li><a   className="hover:text-gray-300">Carlos Pineda</a></li>
            <li><a   className="hover:text-gray-300">Ever Garcia</a></li>
             
          </ul>
        </div>
      </div>

      {/* Derechos de Autor */}
      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()}Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;