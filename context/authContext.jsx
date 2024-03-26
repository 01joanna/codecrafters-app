"use client"

import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext({
    getTokens: null,
    login: () => {},
    logout: () => {},
    isLoggedIn: null,
});

export const AuthProvider = ({ children }) => {
    // const [tokens, setTokens] = useState(null);

    const getTokens = useCallback(() => {
        Cookies.set('tokens', tokens, { expires: 1 });
    }, []); // Add an empty array as the second argument


    const login = useCallback((tokens) => {
        // setTokens(tokens);
        Cookies.set('tokens', tokens, { expires: 1 });
    }, []);

    const logout = useCallback(() => {
        // setTokens(null);
        Cookies.remove('tokens');
    }, []);

    const value = useMemo(() => ({ tokens, login, logout }), [login, logout]);

    return (
    <AuthContext.Provider value={ {tokens, login, logout}}>
        {children}
        </AuthContext.Provider>
    );
}

// Hook para acceder al contexto de autenticación
export const useAuthContext = () => useContext(AuthContext);