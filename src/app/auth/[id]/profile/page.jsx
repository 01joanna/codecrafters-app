//Profile.jsx
'use client'
import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../../../contexts/AuthContext';
import { getUserProfile } from '../../../../services/RestApi';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { updateUserProfile } from '@/services/RestApi';

export default function Profile() {
    const { getUserData, getAuthToken } = useAuthContext();
    const userId = getUserData();
    const authToken = getAuthToken();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        image_path: null,
        id: userId
    });

    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userProfileData = await getUserProfile(userId, authToken);
                
                setUserProfile(userProfileData.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch user profile data');
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [userId, authToken]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleFileChange = (e) => {
        setFormData({ ...formData, image_path: e.target.files[0] }); 
    }

    const handleUpdate = async (e) => {
        e.preventDefault();

        // Crear un objeto de datos JSON
        const jsonData = {
            name: formData.name,
            password: formData.password,
            password_confirmation: formData.password_confirmation,
        };

        // Agregar el correo electrónico si no está vacío
        if (formData.email !== '') {
            jsonData.email = formData.email;
        }

        // Agregar la imagen si está presente
        if (formData.image_path) {
            jsonData.image = formData.image_path;
        }

        try {
            const response = await updateUserProfile(userId, jsonData, authToken, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }




    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!userProfile) {
        return <p>No user profile data available</p>;
    }

    return (
        <main className="h-full flex flex-col items-center border-2 ">
            <h1 className="text-[60px] my-8">Your profile</h1>
            <div className='w-full border-5 flex lg:flex-row md:flex-col gap-4 m-8 md:items-center'>
            <section id='prf' className="flex flex-col gap-4 w-[50%] h-[450px] border border-lightmayonnaise rounded-xl items-center ml-10 justify-center py-10">
                <div className='flex gap-12 m-5 items-center justify-center'>
                <div id='prf-image' className='items-center justify-center'>
                    <Image
                    src={userProfile.image_url}
                    alt={userProfile.name}
                    width={200}
                    height={200}
                    className='rounded-full border border-yellow items-center p-3'
                    />

                </div>
                <div id='prf-content' className="flex flex-col gap-5">
                    <div id='prf-name' className=''>
                    <h3 className='text-[10px] uppercase'>Your name</h3>
                        <h1 className="text-4xl uppercase">{userProfile.name}</h1> 
                    </div>
                    <div id='prf-email'>
                    <h3 className='text-[10px] uppercase'>Your email</h3>
                        <p className="text-sm">{userProfile.email}</p>
                    </div>
                    <div id="prf-id">
                    <h3 className='text-[10px] uppercase'>Your ID</h3>
                        <p>{userProfile.id}</p>
                    </div>
                </div>
                </div>
                <div id="prf-events">
                        <Button 
                        text={"Browse all your events"}/>
                    </div>
            </section>
            <aside className="w-[40%] h-[450px] border border-lightmayonnaise items-center justify-center flex flex-col rounded-xl gap-6">
                <h2 className='font-light text-md'>Edit your profile</h2>
                <div className='flex flex-col gap-3'>
                    <form onSubmit={handleUpdate} action="" className="flex flex-col gap-2 justify-center">
                        <div id="prf-edit-name">
                            <label htmlFor="name" className='font-light uppercase text-xs'>Name:</label><br/>
                            <input 
                            type="text" 
                            name="name" 
                            id="name"
                            placeholder="New name"
                            value={formData.name} onChange={handleChange}/>
                        </div>
                        <div id="prf-edit-email">
                        <label htmlFor="email" className='font-light uppercase text-xs'>email</label><br/>
                            <input 
                            type="text" 
                            name="email" 
                            id="email"
                            placeholder="New email"
                            value={formData.email} onChange={handleChange}/>
                        </div>
                        <div id="prf-edit-password">
                        <label htmlFor="password" className='font-light uppercase text-xs'>Password</label><br/>
                            <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="New password"
                            value={formData.password} onChange={handleChange}/>
                            <input 
                            type="password" 
                            name="password_confirmation" 
                            id="password_confirmation"
                            placeholder="New password confirmation"
                            value={formData.password_confirmation} onChange={handleChange}/>
                        </div>
                        <div id="prf-edit-image">
                        <label htmlFor="image" className='font-light uppercase text-xs'>Image</label><br/>
                            <input 
                            type="file" 
                            name="image_path" 
                            id="image"
                            placeholder="New image"
                            onChange={handleFileChange}
                            />
                        </div>
                        <div id="prf-edit-submit" className='text-xs flex items-center justify-center pt-3'>
                            <Button 
                            text={"Update profile"}
                            className="text-xs items-center"/>
                        </div>
                    </form>
                </div>
                
            </aside>
            </div>
        </main>
        
    );
}


{/* <main>
        <div>
            <h1>User Profile</h1>
            <p>Name: {userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
            <p>Image: <Image src={`http://127.0.0.1:8000/storage/${userProfile.image_path}`} alt={userProfile.name} width={100} height={100} /></p>
        </div>
        </main> */}