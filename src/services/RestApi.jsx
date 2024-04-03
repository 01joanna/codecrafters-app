//Restapi.jsx
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS";
axios.defaults.headers.post["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
axios.defaults.headers.put["Accept-Encoding"] = "application/json"
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

// axios.defaults.headers.common["X-CSRF-Token"] = true;

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

    // export const getUserProfile = async (id) => {
    //     try {
    //         const response = await axios.get(`/user/${id}`); 
    //         return response.data;
    //         console.log("response", response.data);
    //     } catch (error) {
    //         throw error; 
    //     }
    // };


export const updateUserProfile = async(userId, formData, authToken) => {
    try {
        const response = await axios.post(`/user/${userId}/profile`, formData, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'multipart/form-data',

            },
        });
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

    export const getSubscribedEvents = async (userId, authToken) => {
        try {
            const response = await axios.get(`/${userId}/subscribed-events`, {
                headers: {
                    "Authorization": `Bearer ${authToken}`
                }
            });
            return response.data.data.data;
        } catch (error) {
            throw error;
        }
    };

    export const subscribeToEvent = async (eventId, userId, authToken) => {
        try {
            console.log("event id", eventId)
            console.log("user id", userId)
            console.log("auth token", authToken)
            const response = await axios.post(`/events/${eventId}/register`, { user_id: userId }, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    export const unsubscribeFromEvent = async (eventId, userId, authToken) => {
        try {
            const response = await axios.delete(`/events/${eventId}/unregister`, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }


    export const EventsCreatedByUser = async (userId, authToken) => {
        try {
            const response = await axios.get(`/${userId}/events-by-user`, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            return response.data.data.data;
        } catch (error) {
            throw error;
        }
    }
    

    // Event routes
    export const createEvent = async (eventData, authToken, id) => {
        try {
            const response = await axios.post("/events/create", eventData, {
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

    export const updateEvent = async (id, eventData, authToken) => {
    try {
        const response = await axios.post(`/events/${id}/edit`, eventData, {
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "multipart/form-data",
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

    export const deleteEvent = async (id, authToken) => {
    try {
        const response = await axios.delete(`/events/${id}/delete`, {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
    };

    export const getRegisteredUsersForEvent = async (userData, authToken) => {
    try {
        const response = await axios.get(`/events/${userData}/registered-users`, {
            headers: {
                "Authorization": `Bearer ${authToken}`
                    }
                });
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

