import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Card, Headline, Modal, Paragraph, Subheading, Title, useTheme } from "react-native-paper";
import CalendarLink from "../components/CalendarLink";

export default function AppointmentsPage (props) {

    const { setPage, setSnackbar, appointments, removeAppointment } = props;
    const theme = useTheme();

    const [cancelWarningIndex, setCancelWarningIndex] = useState(false);

    const modalStyle = {margin: 20};

    const cancelAppointment = () => {
        removeAppointment(cancelWarningIndex);
        setCancelWarningIndex(false);
        setSnackbar("Appointment cancelled");
    }

    const scheduleView = appointments.length > 0 ? 
        (
            <View 
                style={{
                    flex: 1,
                    alignItems: "center", 
                }}
            >
                <Headline style={{marginTop: 30}}>Want to schedule another? </Headline> 
                <Button style={{marginTop: 40}} mode="contained" onPress={() => setPage("schedule")}>Schedule Appointment</Button>
            </View>
        ) : 
        (
            <View 
                style={{
                    flex: 1,
                    alignItems: "center", 
                }}
            >
                <Headline style={{marginTop: 30}}>You have no appointments scheduled</Headline> 
                <Button style={{marginTop: 40}} mode="contained" onPress={() => setPage("schedule")}>Schedule Appointment</Button>
            </View>
        )

    const appointmentsDisplay = appointments.map((appointment, index) => {
        console.log(appointment);
        return (
            <Card key={index} elevation={3} style={{margin: 15}}>
                <Card.Content>
                    <Title>Appointment for {appointment.people} {appointment.people == 1 ? "person" : "people"}</Title>
                    <Subheading>{appointment.email} </Subheading>
                    <Subheading>{appointment.date.toLocaleDateString()} at {appointment.time}:00 pm </Subheading>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={() => setCancelWarningIndex(index)} textColor={theme.colors.error}>Cancel</Button>
                    <CalendarLink appointment={appointment}></CalendarLink>
                </Card.Actions>
            </Card>
        );
    });

    return (
        <>
            <ScrollView>
                { appointmentsDisplay }
                {scheduleView}
            </ScrollView>
            <Modal
                visible={cancelWarningIndex !== false}
                onDismiss={() => setCancelWarningIndex(false)}
                contentContainerStyle={modalStyle}
            >
                <Card>
                    <Card.Content>
                        <Headline>Do you want to cancel?</Headline>
                        <Paragraph>Cancelling this appointment will forfeit the time and date you selected and we will not reserve a spot for you at this time. </Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button textColor="#333333" onPress={() => setCancelWarningIndex(false)}>Close</Button>
                        <Button buttonColor={theme.colors.error} onPress={() => cancelAppointment()}>Cancel</Button>
                    </Card.Actions>
                </Card>
            </Modal>
        </>
    );
}