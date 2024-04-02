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
        Cookies.set("image", JSON.stringify(user.image));
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

    const getUserImage = useCallback(() => {
        const userImage = Cookies.get("image");
        return userImage;
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
            getUserImage,
            isUserAuthenticated,
        }),
        [login, logout, getAuthToken, getUserData, isUserAuthenticated, getUserImage]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
    return useContext(AuthContext);
}


// export const AuthContext = createContext({
//     login: (authTokens, user) => {},
//     logout: () => {},
//     getAuthToken: () => null,
//     getUserData: () => null,
//     isUserAuthenticated: () => false,
// });

// export default function AuthContextProvider({ children }) {
//     const [currentUser, setCurrentUser] = useState(null);

//     const login = useCallback((authTokens, user) => {
//         Cookies.set("authTokens", authTokens);
//         Cookies.set("user", JSON.stringify(user));
//         setCurrentUser(user);
//     }, []);

//     const logout = useCallback(() => {
//         Cookies.remove("authTokens");
//         Cookies.remove("user");
//         setCurrentUser(null);
//     }, []);

//     const getAuthToken = useCallback(() => {
//         return Cookies.get("authTokens");
//     }, []);

//     const getUserData = useCallback(() => {
//         const userData = Cookies.get("user");
//         return userData ? JSON.parse(userData) : null;
//     }, []); 


//     const isUserAuthenticated = useCallback(() => {
//         return !!getAuthToken();
//     }, [getAuthToken]);

//     const value = useMemo(
//         () => ({
//             login,
//             logout,
//             getAuthToken,
//             getUserData,
//             isUserAuthenticated,
//         }),
//         [login, logout, getAuthToken, getUserData, isUserAuthenticated]
//     );

//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuthContext() {
//     return useContext(AuthContext);
// }