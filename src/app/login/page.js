"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuthContext } from "../../contexts/AuthContext";
import Login from "../components/Login/Login";

export default function Page() {
    return (
        <main className="flex flex-col gap-3 items-center p-20">
            <Login />
        </main>
    );
}
