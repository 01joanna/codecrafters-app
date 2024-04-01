'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logoutApi } from "../../../services/RestApi";
import { useAuthContext } from "../../../contexts/AuthContext";
// import { usePush } from "next/navigation";

export default function Logout() {
    const router = useRouter();
    const { getAuthToken, logout } = useAuthContext();
    // const push = usePush(); // Usa el método push memorizado

    useEffect(() => {
        const authToken = getAuthToken();

        logout();
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
            router.push("/");
        }
    }, [getAuthToken, logout, router, router.push]);


    return null;
}
