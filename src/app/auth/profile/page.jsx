'use client'
import { useState, useEffect, useCallback } from 'react';
import React from 'react';
import Image from 'next/image';
import Button from '../../components/Button';
import { getUserProfile, updateUserProfile, deleteUserProfile } from "../../../services/RestApi"
import { useAuthContext } from "../../../contexts/AuthContext";
import { useRouter } from 'next/router';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        image: null,
    });
    
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const { isUserAuthenticated } = useAuthContext(); // Accede a la función de autenticación
    const router = useRouter(); // Accede al router de Next.js

    // Memoriza isUserAuthenticated para prevenir re-renderizados innecesarios
    const memoizedIsUserAuthenticated = useCallback(() => {
        return isUserAuthenticated();
    }, [isUserAuthenticated]);

    useEffect(() => {
        if (!memoizedIsUserAuthenticated()) {
            router.push('/login');
            return;
        }

        getUserProfile().then(response => {
            setUserData(response.data);
            setFormData(response.data);
        }).catch(error => {
            setError("Failed to fetch user profile.");
        });
    }, [memoizedIsUserAuthenticated, router]); // Usa memoizedIsUserAuthenticated como dependencia


    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleUpdate = async () => {
        try {
            await updateUserProfile(userData.id, formData);
            setUserData(formData);
            setIsEditing(false);
            setSuccess(true);
        } catch (error) {
            setError("Failed to update user profile.");
        }
    };

    const handleDelete = async () => {
        try {
            await deleteUser(userData.id);
            // Redirect to login or homepage after deletion
        } catch (error) {
            setError("Failed to delete user profile.");
        }
    };

    return (
        <div className='flex flex-col lg:justify-around lg:h-full md:h-[1100px]'>
            {userData && (
                <div className="flex lg:flex-row md:flex-col md:gap-10 lg:gap-20 justify-center items-center lg:my-10 md:my-0 md:mt-10">
                    <h1>Your profile</h1>
                    <Button text="Check all your events" />
                </div>
            )}
            <div className='flex lg:flex-row md:flex-col md:gap-10 lg:gap-32 md:items-center justify-center h-[500px] md:pt-[27rem] lg:pt-0'>
                <section id="profile-picture" className='flex flex-col gap-3 items-center'>
                    <Image
                        src="/public/img/large-image.png"
                        alt="Profile picture"
                        width={200}
                        height={200}
                        className='rounded-full border-2 border-red-500'
                    />
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
    );
}
export default ProfilePage;
