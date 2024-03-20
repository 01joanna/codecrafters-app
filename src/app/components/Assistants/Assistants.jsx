import React from "react";
import {Avatar, AvatarGroup} from "@nextui-org/react";

export default function Assistants() {
    return (
        <div className="text-xs flex gap-4 items-center">
    <AvatarGroup isBordered max={3} total={10}>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </AvatarGroup>
        <p className="w-64">Arleny Medina, Johanna Cuevas and others are subscribed to this event</p>
        </div>
    )
}