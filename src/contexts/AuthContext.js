"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,

} from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext({
    login: (authTokens, user) => { },
    logout: () => { },
    getAuthToken: () => null,
    getUserData: () => null,
    
});

export default function AuthContextProvider({ children }) {
    

    const login = useCallback(function (authTokens, user) {
        Cookies.set("authTokens", authTokens);
        Cookies.set("user", user);
    }, []);
    

    const logout = useCallback(function () {

        Cookies.remove("authTokens");
        Cookies.remove("user"); 
        
    }, []);

    const getAuthToken = useCallback(() => {
        const authTokens = Cookies.get("authTokens");
        return authTokens ? authTokens : null;
    }, []);

    const getUserData = useCallback(() => {
        const user = Cookies.get("user");
        return user ? JSON.parse(user) : null;
    }
    , []);

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