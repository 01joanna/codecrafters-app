"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,

} from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext({
    login: (authTokens) => { },
    logout: () => { },
    getAuthToken: () => null,
    
});

export default function AuthContextProvider({ children }) {
    

    const login = useCallback(function (authTokens) {
        Cookies.set("authTokens", authTokens);
        
    }, []);
    

    const logout = useCallback(function () {

        Cookies.remove("authTokens");
        
    }, []);

    const getAuthToken = useCallback(() => {
        const authTokens = Cookies.get("authTokens");
        return authTokens ? authTokens : null;
    }, []);

    const value = useMemo(
        () => ({
            
            login,
            logout,
            getAuthToken,
        }),
        [ login, logout, getAuthToken]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
    return useContext(AuthContext);
}