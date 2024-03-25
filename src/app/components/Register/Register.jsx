"use client"
import Button from "../Button/Button";
import restapi from "@/services/RestApi";
import axios from "axios";
import { useState } from "react";

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        image: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Formulario enviado');

        try {
            const response = await restapi().register(formData);
            if (response.ok) {
                alert('Usuario creado');
                const data = await response.json();
                const token = data.token;

                // Almacenar el token en el Local Storage
                localStorage.setItem('token', token);
            } else {
                alert('Error al crear el usuario');
            }
        } catch (error) {
            console.error('errores', error);
        }
    };

    return (
        <div className=" bg-white text-black flex flex-col gap-3 items-center p-20">
                <div id="logo" className="items-baseline">
                    <h1 className="">./m</h1>
                </div>
                <div id="signup-form" className="shadow-xl">
                    <form action="/register" method="post" className="flex flex-col items-center px-8" onSubmit={handleSubmit}>
                        <legend className="font-light md:text-xl lg:text-4xl my-8">Create a new account</legend>

                        <div id="form-images-button" className="flex flex-col items-center">
                            <div id="form-fillables" className="flex lg:flex-row md:flex-col gap-8 mb-7">
                            <div id="signup-part-1">
                                <div>
                                    <label id="signup-label" for="name">NAME:</label><br/>
                                    <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Your name"
                                    value={formData.name} 
                                    onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label id="signup-label" for="email">EMAIL:</label><br/>
                                    <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Your email" 
                                    value={formData.email}
                                    onChange={handleChange}/>
                                </div>
                            </div>

                            <div id="signup-part-2">
                                <div>
                                    <label id="signup-label" for="password">PASSWORD:</label><br/>
                                    <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    placeholder="Your password"
                                    value={formData.password}
                                    onChange={handleChange} 
                                    />
                                </div>

                                <div>
                                    <label id="signup-label" for="password_confirmation">PASSWORD CONFIRMATION</label><br/>
                                    <input 
                                    type="password" 
                                    id="password_confirmation" 
                                    name="password_confirmation" 
                                    placeholder="Your password again"
                                    value={formData.password_confirmation}
                                    onChange={handleChange}/>
                                </div>
                            </div>
                            </div>
                                    <label id="signup-label" for="image" className="-mb-4">IMAGE</label><br/>
                                    <input 
                                    type="file" 
                                    id="image" 
                                    name="image" 
                                    placeholder="Upload"
                                    value={formData.image}
                                    onChange={handleChange}/>
                        <div id="submit-login" className="flex flex-col gap-2 my-10">
                            <Button type="submit" text="Sign up" classname="px-20"/>
                            <p className="text-xs font-light">Already a member? <a href="/login" className="text-blue">Log in</a></p>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}