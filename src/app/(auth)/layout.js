"use client"
import React from 'react';
import "../globals.css";
import Footer from '../components/Footer/Footer.jsx';


export default function CustomLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
};
