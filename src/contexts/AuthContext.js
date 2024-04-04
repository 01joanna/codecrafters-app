"use client"
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext({
    login: (authTokens, user) => {},
    logout: () => {},
    getAuthToken: () => null,
    getUserData: () => null,
    isUserAuthenticated: () => false,
});

export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    const login = useCallback((authTokens, user) => {
        Cookies.set("authTokens", authTokens);
        Cookies.set("userId", JSON.stringify(user.id));
        Cookies.set("name", JSON.stringify(user.name));
        Cookies.set("email", JSON.stringify(user.email));
        Cookies.set("image", JSON.stringify(user.image_path));
        setCurrentUser(user);
    }, []);

    const logout = useCallback(() => {
        Cookies.remove("authTokens");
        Cookies.remove("user");
        Cookies.remove("userId");
        Cookies.remove("name");
        Cookies.remove("email");
        Cookies.remove("image");
        
        setCurrentUser(null);
    }, []);

    const getAuthToken = useCallback(() => {
        return Cookies.get("authTokens");
    }, []);

    const getUserData = useCallback(() => {
        const userData = Cookies.get("userId");
        return userData ;
    }, []); 

    const getUserInfo = useCallback(() => {
        const name = Cookies.get("name");
        const email = Cookies.get("email");
        let image = Cookies.get("image");
        // if (image) {
        //     image = image.replace(/"/g, '').replace(/^(?!\/)/, '/');
        // }
        return { name, email, image };
    }, []);


    const isUserAuthenticated = useCallback(() => {
        return !!getAuthToken();
    }, [getAuthToken]);

    const value = useMemo(
        () => ({
            login,
            logout,
            getAuthToken,
            getUserData,
            isUserAuthenticated,
            getUserInfo
        }),
        [login, logout, getAuthToken, getUserData, isUserAuthenticated, getUserInfo]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
    return useContext(AuthContext);
}
