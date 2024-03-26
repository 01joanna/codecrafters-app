// middleware/cors.js

import Cors from 'cors';

// Configurar opciones de CORS
const cors = Cors({
  origin: 'http://localhost:3000/', // Reemplaza esto con tu origen frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
});

// Función de middleware para manejar CORS
export default function handler(req, res, next) {
  return cors(req, res, next);
}
