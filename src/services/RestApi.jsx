import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export const restapi = () => {
    //servicio para consumir un endpoint

    const baseUrl = "http://127.0.0.1:8000/";
    const getAll = async () => {
        const response = await axios.get(baseUrl);
        return response;
    }

    return {
        getAll
    }
} 