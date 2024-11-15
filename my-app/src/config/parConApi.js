import axios from "axios";
import { useAuthStore } from "../features/security/store/useAuthStore";

const API_URL = 'https://localhost:7170/api';
axios.defaults.baseURL = API_URL

// const setAuthToken = () => 
//     {
//         const auth = getAuth();

//         if(auth){
//             axios.defaults.headers.common["Authorization"] = `Bearer ${auth.token}`;
//         }else{
//           delete  axios.defaults.headers.common['Authorization'];
//         }
//     }


    
//     const getAuth = () => 
//         {
//              const isToken = localStorage.getItem('token');
//              const isRefreshToken = localStorage.getItem('refreshToken');

//              if(isToken && isRefreshToken){
//                 return {token:isToken, refreshToken: isRefreshToken};
//              }

//              return null; 
//         }

//         setAuthToken();
        
       
//         let refreshingTokenPromise = null;
const parConApi = axios.create({
        baseURL: API_URL,
        headers: {
              "Content-Type": "application/json"
        }
});


// parConApi.interceptors.request.use((config) => {
//     const token = useAuthStore().token 
//     if(token){
//         config.headers["Authentication"] = `Bearer${token}`;
//     }
//     return config;
//     }, (error) => {
//         return Promise.reject(error);
//     });

export {
    parConApi,
    API_URL
}

export default parConApi;