import React, { useState, useEffect } from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { getRegisteredUsersForEvent } from "@/services/RestApi";
import { useAuthContext } from "@/contexts/AuthContext";


const Assistants = ({ event, className }) => {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const { getAuthToken } = useAuthContext();
    const authToken = getAuthToken();
    const eventId = event.id;   

    useEffect(() => {
        const fetchRegisteredUsers = async () => {
            try {
                const users = await getRegisteredUsersForEvent(eventId, authToken);
                setRegisteredUsers(users.data.data);
                console.log("Registered users:", users.data.data);
            } catch (error) {
                console.error("Error fetching registered users:", error);
            }
        };
        fetchRegisteredUsers();
    }, [eventId]);


    const defaultAssistant = "text-xs flex gap-4 items-center";

    return (
        <div className={`${className} ${defaultAssistant}`}>
            { registeredUsers.length === 0 && (<p> No one is signed up to this event</p> )}
            { registeredUsers.length === 1 && 
            (
            <>
            <Avatar src={registeredUsers[0].image_url} />
            <p> {registeredUsers[0].name} is subscribed to this event</p> 
            </>
            )}
            { registeredUsers.length === 2 && ( 
                <> <Avatar src={registeredUsers[0].image_url} /> 
                <Avatar src={registeredUsers[1].image_url} />
            <p>{registeredUsers[0].name} and {registeredUsers[1].name} are suscribed to this event </p> 
            </>
            )}
                {registeredUsers.length > 2 && ( 
                    <> 
                    <Avatar src={registeredUsers[0].image_url} />
                    <Avatar src={registeredUsers[1].image_url} />
                    <p>
                        {registeredUsers[0].name}, {registeredUsers[1].name} 
                        {" and "}
                        {registeredUsers.length - 2} 
                        {" others are subscribed to this event"}
                    </p>
                    </>
                )}
        </div>
    );
}

    

export default Assistants;

  {/* {registeredUsers.length === 0 ? (
                <p>No one is signed up to this event</p>
            ) : (
                <div>
                    <AvatarGroup isBordered max={Math.min(count, registeredUsers.length)} total={registeredUsers.length}>
                        {registeredUsers.slice(0, count).map((user, index) => (
                            <Avatar key={index} src={user.image_url} />
                        ))}
                    </AvatarGroup>
                    <p className="w-64">
                        {registeredUsers.slice(0, count).map((user, index) => (
                            <span key={index}>
                                {user.name}
                                {index !== Math.min(count - 1, registeredUsers.length - 1) && ", "}
                            </span>
                        ))}
                        {registeredUsers.length > count && (
                            <span>
                                +{registeredUsers.length - count} others are subscribed
                            </span>
                        )}
                        {" are subscribed to this event"}
                    </p>
                </div>
            )} */}