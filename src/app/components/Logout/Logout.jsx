// 'use client'
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { logoutApi } from "../../../services/RestApi";
// import { useAuthContext } from "../../../contexts/AuthContext";


// export default function Page() {
//     const router = useRouter();
//     const { getAuthToken, logout } = useAuthContext();

//     useEffect(() => {
//         const authToken = getAuthToken(); // Obtener el token de autenticación

//         // Realizar el logout utilizando la función logoutApi
//         logoutApi(authToken)
//             .then(() => {
//                 // Eliminar el token de autenticación del contexto
//                 logout();
//                 // Redirigir al usuario a la página principal
//                 router.push("/");
//             })
//             .catch((error) => {
//                 console.error("Error al cerrar sesión:", error);
//                 // Manejar el error si es necesario
//             });
//     }, []);

//     return null; // No renderizamos nada en este componente
// }