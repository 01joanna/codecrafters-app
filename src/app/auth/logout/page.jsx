'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logoutApi } from "../../../services/RestApi";
import { useAuthContext } from "../../../contexts/AuthContext";
// import { usePush } from "next/navigation";

export default function Logout() {
    const router = useRouter();
    const { getAuthToken, logout } = useAuthContext();
    const authToken = getAuthToken();

    useEffect(() => {
            logoutApi(authToken)
                .then((res) => {
                    console.log(res)
                    logout();
                    router.push("/");
                })
                .catch((error) => {
                    logout();
                    console.error("Error al cerrar sesión:", error);
                    router.push("/");
                });

    });


    return null;
}
