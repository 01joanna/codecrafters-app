'use client'
import Button from '../../../components/Button/Button';
import Image from 'next/image';
import { useAuthContext } from '../../../../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { updateUserProfile } from '../../../../services/RestApi';


export default function Page() {

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

    console.log("userData", userData);
    console.log(formData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0].name });
    };

    const handleUpdate = async () => {
        try {
            await updateUserProfile(userData, formData, authToken);
            console.log("User profile updated successfully.");
            
        } catch (error) {
            console.error("Failed to update user profile.");
        }
    }


    return (
        <main className='flex flex-col gap-10 pb-20 pl-10'>
                                <form method="post" className='flex flex-col gap-7 text-[11px]'>
                        <div>
                            <label htmlFor="name" id='profile-form-label'>Name</label><br/>
                            <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder='New name'
                            value={formData.name}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" id='profile-form-label'>Email</label><br/>
                            <input 
                            type="text"
                            id="email"
                            name="email"
                            placeholder='New email'
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" id='profile-form-label'>New password</label><br/>
                            <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder='New password'
                            value={formData.password}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password_confirmation" id='profile-form-label'>Password confirmation</label><br/>
                            <input 
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            placeholder='New password confirmation'
                            value={formData.password_confirmation}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="image" id='profile-form-label'>New image</label><br/>
                            <input 
                            type="file" 
                            id="image" 
                            name="image" 
                            // value={formData.image}
                            onChange={handleFileChange} />
                        </div>

                        <div className="flex gap-4 mb-20">
                        <button 
                        onClick={handleUpdate}
                        type="submit" 
                        className='text-sm bg-yellow py-2 px-12 mt-5 rounded-lg'>Save changes</button>
                        <button className='text-sm bg-yellow py-2 px-12 mt-5 rounded-lg'>Go Back</button>
                        </div>
                    </form>
        </main>
    )
}