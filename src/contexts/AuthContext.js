"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,

} from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext({
    login: (authTokens, userData) => { },
    logout: () => { },
    getAuthToken: () => null,
    getUserData: () => null,
    
});

export default function AuthContextProvider({ children }) {
    

    const login = useCallback(function (authTokens, userData) {
        Cookies.set("authTokens", authTokens);
        Cookies.set("userData", userData);
    }, []);
    

    const logout = useCallback(function () {

        Cookies.remove("authTokens");
        Cookies.remove("userData"); 
        
    }, []);

    const getAuthToken = useCallback(() => {
        const authTokens = Cookies.get("authTokens");
        return authTokens ? authTokens : null;
    }, []);

    const getUserData = useCallback(() => {
        const userData = Cookies.get("userData");
        return userData ? JSON.parse(userData) : null; // Devuelve los datos del usuario como objeto JSON
    }, []);

    const value = useMemo(
        () => ({
            
            login,
            logout,
            getAuthToken,
            getUserData
        }),
        [ login, logout, getAuthToken, getUserData]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
    return useContext(AuthContext);
}