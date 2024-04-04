'use client'
import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../../../contexts/AuthContext';
import { getUserProfile } from '../../../../services/RestApi';
import Image from 'next/image';
import { user } from '@nextui-org/react';
import Button from '@/app/components/Button/Button';

export default function Profile() {
    const { getUserData, getAuthToken } = useAuthContext();
    const userData = getUserData();
    const authToken = getAuthToken();

    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userProfileData = await getUserProfile(userData, authToken);
                const info = userProfileData.data;
                console.log(userProfileData.data.image_path, "estoy aqui")
                console.log(info.image_url)
                setUserProfile(info);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch user profile data');
                setLoading(false);
            }
        };


        fetchUserProfile();
    }, [userData, authToken]);

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
            <section id='prf' className="flex flex-col gap-4 border border-lightmayonnaise rounded-xl w-[50%] m-5 items-center justify-center py-10">
                <div className='flex gap-12 m-5 items-center justify-center'>
                <div id='prf-image' className='items-center justify-center'>
                    <Image
                    src={`http://127.0.0.1:8000/storage/${userProfile.image_path}`}
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