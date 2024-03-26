"use client"
import Head from 'next/head'
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {NextUIProvider} from "@nextui-org/react";
import { AuthContextProvider } from "../../../context/authContext"

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Moge!",
//   description: "Generated by create next app",
// };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NextUIProvider>
        <AuthContextProvider>
        <Header />
          {children}
        <Footer />
        </AuthContextProvider>
        </NextUIProvider>

      </body>
    </html>
  );
}
