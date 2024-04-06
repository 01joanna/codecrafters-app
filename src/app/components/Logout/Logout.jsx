'use client'
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { logoutApi } from "../../../services/RestApi";
import { useAuthContext } from "../../../contexts/AuthContext";

export default function Page() {
    const router = useRouter();
    const { getAuthToken, logout } = useAuthContext();
    const authToken = getAuthToken();

    useEffect(() => { 

        console.log('authToken', authToken)
        logoutApi(authToken)
            .then(() => {
                logout();
                // Redirigir al usuario a la página principal
                router.push("/");
            })
            .catch((error) => {
                console.error("Error al cerrar sesión:", error);
                // Manejar el error si es necesario
            });
    });

    return null; // No renderizamos nada en este componente
}