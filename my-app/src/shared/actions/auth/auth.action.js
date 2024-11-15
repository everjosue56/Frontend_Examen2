import {parConApi} from '../../../config/parConApi'

export const loginAsync = async (form) => {
    try {
        const {data} = await parConApi.post('/auth/login', form);
            
        return data;
    } catch (error) {
        console.error(error);
        return error?.response?.data;
    }
}