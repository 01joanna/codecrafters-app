"use client"

import { useAuthContext } from "../../contexts/AuthContext" 

export default function Layout({ children }) {

    return (
        <div>
                    {children}
            </div>
    )
}