import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';
// axios.defaults.headers.post['Content-Type'] = 'application/json'; // para que reconozca que va a entrar y salir información de tipo json
// axios.defaults.headers.post['Accept'] = 'application/json';

const axiosInstance = () => {
    axios.create({
        baseURL: API_URL, //url base de la api
        timeout: 5000, //si la peticion tarda más de 5sec, se cancela
        headers: { //  cabeceras que se van a enviar en cada petición, para que el servidor sepa que tipo de información se está enviando
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
} // exportar la instancia de axios para poder usarla en otros archivos

// creacion de un fetch de tipo GET
export const fetchData = async () => {
    try {
        const response = await axiosInstance.get('/api/register');
        return response.data;
    } catch (error) {
        console.error('Error displaying data, retry', error);
        throw error;
    }
}

// creacion de un fetch de tipo POST
export const postData = async (data) => {
    try {
        const response = await axiosInstance.post('/api/register', data);
        return response.data;
    } catch (error) {
        console.error('Error sending data, retry', error);
        throw error;
    }
}

export default axiosInstance;