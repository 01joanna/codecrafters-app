'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/Button/Button";
import { register } from "../../services/RestApi";

export default function RegisterPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        image_path: null,
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await register(formData);
    
            if (typeof window !== 'undefined') {
                localStorage.setItem('authToken', response.data.token);
            }
    
            setSuccess(true);
            setError(null);
            alert('Registration successful. Remember your credentials to login.');
            router.push("/login");
        } catch (error) {
            setSuccess(false);
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("Registration failed. Please try again.");
            }
        }
    };

    return (
        <main className="flex flex-col gap-3 items-center p-20">
            <div id="logo" className="items-baseline">
                <h1 className="">./m</h1>
            </div>
            <div id="signup-form" className="shadow-xl">
                <form method="POST" onSubmit={handleSubmit} className="flex flex-col items-center px-8">
                    <legend className="font-light md:text-xl lg:text-3xl my-8">
                        Create a new account
                    </legend>

                    <div>
                        <label htmlFor="name" id="register-label">NAME:</label>
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

                    <div>
                        <label htmlFor="email" id="register-label">EMAIL:</label>
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

                    <div>
                        <label htmlFor="password"id="register-label">PASSWORD:</label>
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

                    <div>
                        <label htmlFor="password_confirmation" id="register-label">
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
                    </div><br />

                    <label htmlFor="image" id="register-label">IMAGE:</label>
                    <input
                        type="file"
                        id="image_path"
                        name="image_path"
                        onChange={handleFileChange}
                        placeholder="Upload"
                    />
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
