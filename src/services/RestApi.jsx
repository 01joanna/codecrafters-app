//Restapi.jsx
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

// axios.defaults.headers.common["X-CSRF-Token"] = true;

// export const getCSRFToken = async () => {
//     try {
//         const response = await axios.get("sanctum/csrf-cookie");
//         console.log("CSRF cookie configurada correctamente", response);
//         return response.data;
//     } catch (error) {
//         console.error("Error al configurar la cookie CSRF:", error);
//         throw error;
//     }
// };

const postWithCSRF = async (url, data) => {
    try {
        // Obtener el token CSRF
        const csrfToken = await getCSRFToken();

        // Realizar la solicitud POST incluyendo el token CSRF en el encabezado
        const response = await axios.post(url, data, {
            headers: {
                "X-CSRF-TOKEN": csrfToken
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

// Función para obtener el token CSRF
const getCSRFToken = async () => {
    try {
        // Realizar una solicitud GET para obtener el token CSRF
        const response = await axios.get("/sanctum/csrf-cookie");
        // Suponiendo que el token CSRF se devuelve como csrf_token en la respuesta
        return response.data.csrf_token;
    } catch (error) {
        console.error("Error al obtener el token CSRF:", error);
        throw error;
    }
};

// // Rutas de autenticación
// export const register = async (userData) => {
//     try {
//         // Realizar la solicitud POST incluyendo el token CSRF
//         const response = await postWithCSRF("/register", userData);
//         return response;
//     } catch (error) {
//         throw error;
//     }
// };

// export const loginApi = async (userData) => {
//     try {
//         // Realizar la solicitud POST incluyendo el token CSRF
//         const response = await postWithCSRF("/login", userData);
//         return response;
//     } catch (error) {
//         throw error;
//     }
// };


// Auth routes
export const register = async (userData) => {
    try {
        const response = await axios.post("/register", userData);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const loginApi = async (userData) => {
    try {
        const response = await axios.post("/login", userData);
        const accessToken = response.data.data.token;
        const user = response.data.data.user;
        return {accessToken, user };
    } catch (error) {
        throw error;
    }
    };

    export const logoutApi = async () => {
    try {
        const response = await axios.get("/logout");
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    // User routes
    export const updateUserProfile = async (id, profileData) => {
    try {
        const response = await axios.put(`/${id}/profile`, profileData);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

export const getUserProfile = async () => {
    try {
        const response = await axios.get("/user/profile");
        return response.data;
    } catch (error) {
        throw error;
    }
};

    export const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`/${id}/delete`);
            return response.data;
        } catch (error) {
            throw error;
        }
    };


    export const getAllEvents = async () => {
    try {
        const response = await axios.get("/events");
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const getUserEvents = async (id) => {
    try {
        const response = await axios.get(`/${id}/events`);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const updateUser = async (id, userData) => {
    try {
        const response = await axios.put(`/${id}/update`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const getSubscribedEvents = async (id) => {
    try {
        const response = await axios.get(`/${id}/subscribed-events`);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const subscribeToEvent = async (eventId) => {
    try {
        const response = await axios.post(`/events/${eventId}/register`);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    // Event routes
    export const createEvent = async (eventData) => {
    try {
        const response = await axios.post("/events/create", eventData);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const updateEvent = async (id, eventData) => {
    try {
        const response = await axios.put(`/events/${id}/edit`, eventData);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const getEventById = async (id) => {
    try {
        const response = await axios.get(`/events/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const deleteEvent = async (id) => {
    try {
        const response = await axios.delete(`/events/${id}/delete`);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const getRegisteredUsersForEvent = async (id) => {
    try {
        const response = await axios.get(`/events/${id}/registered-users`);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    // Sanctum route
    export const getUser = async () => {
    try {
        const response = await axios.get("/user");
        return response.data;
    } catch (error) {
        throw error;
    }
    };

