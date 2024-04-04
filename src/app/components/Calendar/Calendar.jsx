import { Calendar as RewindCalendar } from '@rewind-ui/core';

export default function Calendar() {
    return (
        <RewindCalendar value={new Date()} dayFormat="EEEEEE" radius="lg" shadow="lg" size="xs" verticalBorders={false} />
    );
}