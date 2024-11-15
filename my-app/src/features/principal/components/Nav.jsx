import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../security/store/useAuthStore';

const Navbar = () => {
  const logout = useAuthStore((state) => state.logout);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const handleLogout = () => {
    logout();
  }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/*  titulo de pagina */}
        <h1 className="text-xl font-bold">Sistema De Partidas Contables</h1>

        {/* Links */}
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Página Principal
          </Link>
          {/* <Link to="/security/login" className="hover:text-gray-400">
            Iniciar Sesión
          </Link> */}
            {isAuthenticated? (
            //ver cerrar sesion
            <button  className="my-1 text-white hover:text-unah-yellow md:mx-4 md:my-0"   
            onClick={handleLogout}
           >
                Salir
            </button>
          ):(
            // ver iniciar sesion
            <Link
            to="/security/login"
            className="my-1 text-white hover:text-unah-yellow md:mx-4 md:my-0"
          >
            Iniciar sesion
          </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;