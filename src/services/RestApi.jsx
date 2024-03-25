import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const restapi = () => ({
<<<<<<< HEAD
  // Auth routes
=======
    // Auth routes
>>>>>>> 62e59da (events in events page renderized)
    register: async (userData) => {
        try {
        const response = await axios.post("/register", userData);
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    login: async (userData) => {
        try {
        const response = await axios.post("/login", userData);
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    logout: async () => {
        try {
        const response = await axios.get("/logout");
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    // User routes
    updateUserProfile: async (id, profileData) => {
        try {
        const response = await axios.put(`/${id}/profile`, profileData);
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    getAllEvents: async () => {
        try {
        const response = await axios.get("/events");
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    getUserEvents: async (id) => {
        try {
        const response = await axios.get(`/${id}/events`);
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    updateUser: async (id, userData) => {
        try {
        const response = await axios.put(`/${id}/update`, userData);
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    getSubscribedEvents: async (id) => {
        try {
        const response = await axios.get(`/${id}/subscribed-events`);
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    subscribeToEvent: async (eventId) => {
        try {
        const response = await axios.post(`/events/${eventId}/register`);
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    // Event routes
    createEvent: async (eventData) => {
        try {
        const response = await axios.post("/events/create", eventData);
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    updateEvent: async (id, eventData) => {
        try {
        const response = await axios.put(`/events/${id}/edit`, eventData);
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    getEventById: async (id) => {
        try {
        const response = await axios.get(`/events/${id}`);
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    deleteEvent: async (id) => {
        try {
        const response = await axios.delete(`/events/${id}/delete`);
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    getRegisteredUsersForEvent: async (id) => {
        try {
        const response = await axios.get(`/events/${id}/registered-users`);
        return response.data;
        } catch (error) {
        throw error;
        }
    },

    // Sanctum route
    getUser: async () => {
        try {
        const response = await axios.get("/user");
        return response.data;
        } catch (error) {
        throw error;
        }
    },
<<<<<<< HEAD

    // //Funcion para filtrar eventos
    // filterEvents: async (name, category) => {
    //     try {
    //     // Obtener todos los eventos
    //     const response = await axios.get("/events");
    //     // Filtrar los eventos por nombre y categoría
    //     const filteredEvents = response.data.filter((event) => {
    //         const nameMatch = event.title.toLowerCase().includes(name.toLowerCase());
    //         const categoryMatch = event.category_id === category || category === "";
    //         return nameMatch && categoryMatch;
    //     });
    //     return filteredEvents;
    //     } catch (error) {
    //     throw error;
    //     }
    // },
});


=======
    });
>>>>>>> 62e59da (events in events page renderized)



    export default restapi;