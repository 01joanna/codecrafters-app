'use client'
import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../../../contexts/AuthContext';
import { getUserProfile } from '../../../../services/RestApi';
import Image from 'next/image';
import { user } from '@nextui-org/react';

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
        <main>
        <div>
            <h1>User Profile</h1>
            <p>Name: {userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
            <p>Image: <Image src={`http://127.0.0.1:8000/storage/${userProfile.image_path}`} alt={userProfile.name} width={100} height={100} /></p>
        </div>
        </main>
    );
}