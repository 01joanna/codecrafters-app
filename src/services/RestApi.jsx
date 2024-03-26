// services/RestApi.jsx

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;



const restapi = () => ({
  // Auth routes
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

  // Función para obtener el token de autenticación almacenado
  getAuthToken: () => {
    return localStorage.getItem("token");
  },

  // Función para realizar solicitudes protegidas
  protectedRequest: async (method, url, data) => {
    const token = restapi().getAuthToken(); // Aquí es donde se corrige

    if (!token) {
      // Manejar el caso en el que el token no esté disponible
      throw new Error("No se encontró el token de autenticación");
    }

    try {
      const response = await axios({
        method: method,
        url: url,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
});

export default restapi;
