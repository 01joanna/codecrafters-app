'use client'
import React, { useState } from "react";
import Button from "../components/Button/Button";
import axios from "axios";
import { register } from "../../services/RestApi"; // Assuming register function is exported from RestApi module

export default function Page() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        image: null,
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', { withCredentials: true });
        await register(formData);
        setSuccess(true);
        setError(null);
        } catch (error) {
        setSuccess(false);
        setError("Registration failed. Please try again.");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    return (
        <main className="flex flex-col gap-3 items-center p-20">
        <div id="logo" className="items-baseline">
            <h1 className="">./m</h1>
        </div>
        <div id="signup-form" className="shadow-xl">
            <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center px-8"
            >
            <legend className="font-light md:text-xl lg:text-4xl my-8">
                Create a new account
            </legend>

            {/* Form fields */}
            {/* Name */}
            <div>
                <label htmlFor="name">NAME:</label>
                <br />
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email">EMAIL:</label>
                <br />
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                />
            </div>

            {/* Password */}
            <div>
                <label htmlFor="password">PASSWORD:</label>
                <br />
                <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Your password"
                />
            </div>

            {/* Password Confirmation */}
            <div>
                <label htmlFor="password_confirmation">
                PASSWORD CONFIRMATION:
                </label>
                <br />
                <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                placeholder="Your password again"
                />
            </div>

            {/* Image Selection */}
            <label htmlFor="image">IMAGE:</label>
            <br />
            <input
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
                placeholder="Upload"
            />

            {/* Registration Button */}
            <div id="submit-login" className="flex flex-col gap-2 my-10">
                <Button type="submit" text="Sign up" classname="px-20" />
                <p className="text-xs font-light">
                Already a member?{" "}
                <a href="/login" className="text-blue">
                    Log in
                </a>
                </p>
            </div>

            {/* Error or Success Messages */}
            {error && <p className="text-red">{error}</p>}
            {success && (
                <p className="text-green">User registered successfully!</p>
            )}
            </form>
        </div>
        </main>
    );
}
