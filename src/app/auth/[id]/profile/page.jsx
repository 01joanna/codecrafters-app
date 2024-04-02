'use client'
import { useState, useEffect, useCallback } from 'react';
import React from 'react';
import Image from 'next/image';
import Button from '../../../components/Button/Button';
import { getUserProfile, updateUserProfile, deleteUserProfile } from "../../../../services/RestApi"
import { useAuthContext } from "../../../../contexts/AuthContext";
import { useRouter } from 'next/navigation';

const ProfilePage = () => {

    const router = useRouter();
    const { getUserData, getAuthToken } = useAuthContext();
    const userData = getUserData();
    const authToken = getAuthToken();
    const [formData, setFormData] = useState({
        
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        image: null,
    });

    useEffect(() => {
        if (userData) {
            setFormData({
                name: userData.name,
                email: userData.email,
                password: '',
                password_confirmation: '',
                image: null,
            });
        }
    }
    , [userData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            image: file,
        }));
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const userId = userData;
        const response = await updateUserProfile(userId, formData, authToken);
        if (response) {
            alert("Profile updated successfully");
            console.log("Datos modificados", response);
        }
    }


    return (
        <main>
            <div className='flex flex-col lg:justify-around lg:h-full md:h-[1100px]'>
                {userData && (
                    <div className="flex lg:flex-row md:flex-col md:gap-10 lg:gap-20 justify-center items-center lg:my-10 md:my-0 md:mt-10">
                        <h1>Your profile</h1>
                        <Button text="Check all your events" />
                    </div>
                )}
                <div className='flex lg:flex-row md:flex-col md:gap-10 lg:gap-32 md:items-center justify-center h-[500px] md:pt-[27rem] lg:pt-0'>
                    <section id="profile-picture" className='flex flex-col gap-3 items-center'>
                        {userData?.image ? (
                            <Image
                                src={userData.image} // Utiliza el operador de encadenamiento opcional
                                alt="Profile picture"
                                width={200}
                                height={200}
                                className='rounded-full border-2 border-red-500'
                            />
                        ) : (
                            <div className="rounded-full border-2 border-red-500 w-32 h-32 flex items-center justify-center">No Image</div>
                        )}
                        <h3 className="font-bold text-lg">Your current profile picture</h3>
                        <div className='flex flex-col gap-2 text-center'>
                            <p className='text-[9px]'> Dont like it? Change it</p>
                            <input type="file" id="image" name="image" className='text-xs' onChange={handleFileChange} />
                        </div>
                    </section>
                    <aside id="profile-details" className='flex flex-col gap-10'>
                        <h2>Your details</h2>
                        <form onSubmit={handleUpdate} className='flex flex-col gap-7 text-[11px]'>
                            <div>
                                <label htmlFor="name" id='profile-form-label'>CHANGE NAME:</label><br />
                                <input type="text" id="name" name="name" placeholder='New name' value={formData.name} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" id='profile-form-label'>CHANGE EMAIL:</label><br />
                                <input type="email" id="email" name="email" placeholder="New email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="password" id='profile-form-label'>CHANGE PASSWORD:</label><br />
                                <input type="password" id="password" name="password" placeholder="New password" value={formData.password} onChange={handleChange} /><br />
                                <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Confirm password" value={formData.password_confirmation} onChange={handleChange} />
                            </div>
                            <button type="submit" className='text-sm bg-yellow py-2 px-12 mt-5 rounded-lg'>Save changes</button>
                        </form>
                    </aside>
                </div>
            </div>
        </main>
    );
}

export default ProfilePage;
