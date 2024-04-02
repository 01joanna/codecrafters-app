'use client'
import Button from '../../../components/Button/Button';
import { useRouter } from 'next/navigation';
import { deleteEvent } from '../../../../services/RestApi';
import { useAuthContext } from '@/contexts/AuthContext';

export default function Page( { event }) {
    const router = useRouter();
    const { getAuthToken } = useAuthContext();
    const authToken = getAuthToken();



    const handleDelete = async () => {
        try {
            await deleteEvent(event.id, authToken);
            router.push('/events');
            alert('Event deleted successfully');
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    }
    return (
        <main className='bg-white text-black flex flex-col gap-10 pb-20'>
            <h1>Are you sure you want to delete this event?</h1>
            <div className='flex justify-evenly'>
                <Button onClick={handleDelete} text='Yes, delete event' />
                <Button onClick={() => router.push(`/events/${event.id}`)} text='No, go back' />
            </div>
        </main>
    )
}