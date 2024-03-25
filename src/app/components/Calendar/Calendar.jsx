import { Calendar } from '@rewind-ui/core';

export default function Calendar() {
    return (
    <Calendar value={new Date()} dayFormat="EEEEEE" radius="lg" shadow="lg" size="xs" verticalBorders={false} />
    )
    
}