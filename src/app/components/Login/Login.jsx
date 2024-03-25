"use client"
import Button from "../Button/Button"
import axios from 'axios';
import { useState } from 'react';


export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            // Manejar la respuesta del servidor (por ejemplo, guardar el token)
            console.log('Solicitud de login exitosa:', response.data);
        } catch (error) {
            console.error('Error al enviar la solicitud de login:', error);
        }
    };

    
    return (
        <div className="bg-white text-black flex flex-col gap-3 items-center p-20">
                <div id="logo" className="items-baseline">
                    <h1 className="">./m</h1>
                </div>
                <div id="signup-form" className="shadow-xl">
                    <form 
                    action="/login" 
                    method="post" 
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center px-20">
                        <legend className="font-light text-4xl my-8">Sign in</legend>

                        <div id="form-images-button" className="flex flex-col items-center">
                            <div id="form-fillables" className="">
                            <div className="flex flex-col gap-2">
                                <div>
                                <label id="signup-label" for="email">EMAIL:</label><br/>
                                    <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    />
                                </div>
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
                            </div>
                        </div>
                        
                        <div id="submit-login" className="flex flex-col gap-2 my-10">
                            <Button type="submit" text="Sign in" classname="px-20"/>
                            <p className="text-xs font-light">Not a member yet? <a href="/signup" className="text-blue">Sign up</a></p>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}