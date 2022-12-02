import { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import * as Calendar from 'expo-calendar';

export default function CalendarLink(props) {
    const [eventID, setEventID] = useState(false); 

    const appointment = props.appointment;

    const addToCalendar = async () => {
        let startDate = new Date(appointment.date);
        startDate.setHours(appointment.time + 12);
        let endDate = new Date(startDate);
        endDate.setHours(endDate.getHours() + 1);

        const event = {
            allDay: false,
            alarms: [],
            title: "Adell's Chocolate Factory Appointment",
            notes: "Join us to make some delicious chocolates together! You have an appointment for " + appointment.people + " " + (appointment.people == 1 ? "person." : "people."),
            startDate: startDate,
            endDate: endDate,
            location: "10 Test St, Provo, UT 84606",
        };

        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
            console.log('Here are all your calendar:');
            const calendar = calendars[0];
            console.log(calendar);
            const added = await Calendar.createEventAsync(calendar.id, event);
            if(added) {
                setEventID(added);
            }
        }
    };

    const removeFromCalendar = async () => {
        if(eventID !== false) {
            const removed = await Calendar.deleteEventAsync(eventID);
            setEventID(false);
        }
    };

    const handleClick = eventID === false ? addToCalendar : removeFromCalendar;

    return (
        <Button
            onPress={handleClick}
        >
            {eventID === false ? "Add to calendar" : "Remove from calendar"}
        </Button>
    );
}