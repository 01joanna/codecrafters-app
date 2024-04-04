import React, { useState, useEffect } from "react";
import { Avatar, AvatarGroup, user } from "@nextui-org/react";
import { getRegisteredUsersForEvent } from "@/services/RestApi";
import { useAuthContext } from "@/contexts/AuthContext";


const Assistants = ({ event, count, className }) => {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const { getAuthToken } = useAuthContext();
    const authToken = getAuthToken();
    const eventId = event.id;   


    useEffect(() => {
        const fetchRegisteredUsers = async () => {
            try {
                const users = await getRegisteredUsersForEvent(eventId, authToken);
                setRegisteredUsers(users.data.data);
            } catch (error) {
                console.error("Error fetching registered users:", error);
            }
        };
        fetchRegisteredUsers();
    }, [eventId]);

    const defaultAssistant = "text-xs flex gap-4 items-center";
    return (
        <div className={`${className} ${defaultAssistant}`}>
            {registeredUsers.length > 0 ? (
                <AvatarGroup isBordered max={count} total={registeredUsers.length}>
                    {registeredUsers.map((user) => (
                        <Avatar key={user.id} src={user.image_url} />
                    ))}
                </AvatarGroup>
            ) : (
                <p>No one is signed up to this event</p>
            )}
            {registeredUsers.length > 0 && (
                <p className="w-64">
                    {registeredUsers.map((user) => user.name).join(", ")} and others are
                    subscribed to this event
                </p>
            )}
        </div>
    );
};

export default Assistants;
