 
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Loading } from '../../../shared/components';
import { useFormik } from "formik"
import { useAuthStore } from '../store/useAuthStore';
import { loginInitValues, loginValidationSchema } from '../forms';

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   console.log('Username:', username);
  //   console.log('Password:', password);

  //};

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);
  const message = useAuthStore((state) => state.message);


  //const login = useAuthStore();

  useEffect(() => {
      if(isAuthenticated){
       navigate("/");
      }
  }, [isAuthenticated]);

 const formik = useFormik({
   initialValues: loginInitValues,
   validationSchema: loginValidationSchema,
   validateOnChange: true,
   onSubmit: async(formValues) => {
    // console.log(formValues);
    setLoading(true);
    await login(formValues);
    setLoading(false);  
   }
 });


 if(loading)
  {
     return <Loading/>;
  } 

  return (
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md my-12 bg-gray-200 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar sesión</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-800">
            Correo electronico 
          </label>
          <input
            type="text"
            id="email"
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-transparent"
            placeholder="Ingresa tu correo electronico"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-800">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-transparent"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
         
        <button
  type="submit"
  className="block mx-auto w-2/3 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-200 text-center"
>
  Iniciar sesión
</button>
 
       
      </form>
    </div>
  );
};

export default Login;
