//Restapi.jsx
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

// axios.defaults.headers.common["X-CSRF-Token"] = true;




export const register = async (formData) => {
    const response = await axios.post('http://127.0.0.1:8000/api/register', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response;
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

    export const getUserProfile = async (id) => {
        try {
            const response = await axios.get(`/user/${id}`); 
            return response.data;
            console.log("response", response.data);
        } catch (error) {
            throw error; 
        }
    };


export const updateUserProfile = async (userId, formData, token) => {
    try {
        const response = await axios.put(`/user/${userId}/profile`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


// export const updateUserProfile = async (id, profileData) => {
//     try {
//         const formData = new FormData();
//         formData.append('name', profileData.name);
//         formData.append('email', profileData.email);
//         formData.append('password', profileData.password);
//         formData.append('password_confirmation', profileData.password_confirmation);
//         formData.append('image', profileData.image); // Asegúrate de que profileData.image contenga el archivo de imagen

//         const response = await axios.put(`/user/${id}/profile`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//             transformRequest: (data, headers) => {
//                 return formData;
//             },
//         });
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };


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
    export const createEvent = async (eventData, authToken) => {
    try {
        const response = await axios.post("/events/create", eventData, {
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "multipart/form-data"
            }
        
        });
        console.log("response", response);
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const updateEvent = async (id, eventData, authToken) => {
    try {
        console.log("id", id)
        const response = await axios.put(`/events/${id}/edit`, eventData, {
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "multipart/form-data"
            }
        });
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

