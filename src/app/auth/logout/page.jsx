'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logoutApi } from "../../../services/RestApi";
import { useAuthContext } from "../../../contexts/AuthContext";

export default function Logout() {
    const router = useRouter();
    const { getAuthToken, logout } = useAuthContext();
    const push = usePush(); // Usa el método push memorizado

    useEffect(() => {
        const authToken = getAuthToken();

        logout(); // Limpia el token de autenticación en el cliente
        if (authToken) {
            logoutApi(authToken)
                .then(() => {
                    router.push("/");
                })
                .catch((error) => {
                    console.error("Error al cerrar sesión:", error);
                    router.push("/");
                });
        } else {
            // Si no hay token de autenticación, simplemente redirecciona a la página de inicio
            router.push("/");
        }
    }, [getAuthToken, logout, router, router.push]); // Incluye getAuthToken, logout y router.push en el array de dependencias


    return null; // Puedes devolver cualquier cosa aquí o dejar el componente vacío
}