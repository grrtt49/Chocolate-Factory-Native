import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Text, TextInput, Button, useTheme, Provider } from "react-native-paper";
import {en, registerTranslation, DatePickerInput } from "../react-native-paper-dates";
import NumericInput from "react-native-numeric-input";
import DropDown from "react-native-paper-dropdown";

export default function SchedulePage(props) {
    const [email, setEmail] = useState("");
    const [numPeople, setNumPeople] = useState(1);
    const [inputDate, setInputDate] = useState(new Date());
    const [showTimeDropdown, setShowTimeDropdown] = useState(false);
    const [time, setTime] = useState(undefined);

    const { addAppointment, setSnackbar, setPage } = props;
    const theme = useTheme();

    let availableTimes = [
        {label: "1:00 pm", value: 1},
        {label: "2:00 pm", value: 2},
        {label: "3:00 pm", value: 3},
        {label: "4:00 pm", value: 4},
        {label: "5:00 pm", value: 5},
        {label: "6:00 pm", value: 6},
        {label: "7:00 pm", value: 7},
        {label: "8:00 pm", value: 8},
        {label: "9:00 pm", value: 9},
    ];

    registerTranslation('en', en);

    const onSchedule = () => {
        setSnackbar("Congrats! Your appointment is scheduled.");
        addAppointment({
            email: email,
            people: numPeople,
            date: inputDate, 
            time: time,
        });
        setPage("appointments");
    };

    return (
        <ScrollView
            style={{
                flex: 1,
            }}
        >
            <View
                style={{
                    flex:1,
                    padding: 20,
                }}
            >
                <Text
                    variant="headlineMedium"
                    style={{
                        textAlign: "center"
                    }}
                >
                    Schedule
                </Text>
                <Text
                    variant="bodyMedium"
                    style={{
                        textAlign: "left",
                        margin: 20
                    }}
                >
                    Having an appointment guarentees you a spot at Adell's Chocolate Factory at the specified time. While an appointment is not manditory, it helps us plan when people are coming and saves you any wait times.
                </Text>
                <TextInput 
                    label="Email"
                    mode="outlined"
                    autoComplete="email"
                    value={email}
                    onChangeText={(text) => {setEmail(text)}}
                />
                <View style={{
                    marginTop: 20,
                    alignItems: "center"
                }}>
                    <Text>Number of people</Text>
                    <NumericInput 
                        minValue={1}
                        value={numPeople}
                        onChange={(num) => {setNumPeople(num)}}
                    />
                </View>
                <View
                    style={{
                        padding: 20,  
                    }}
                >
                    <DatePickerInput 
                        locale="en"
                        label="Date"
                        value={inputDate}
                        onChange={(d) => {
                            console.log("Changed");
                            setInputDate(d);
                        }}
                        validRange={{
                            startDate: new Date(),
                        }}
                        inputMode="start"
                        mode="outlined"
                    />
                </View>
                <View
                    style={{
                        padding: 20,  
                    }}
                >
                    <DropDown 
                        label={"Time"}
                        mode={"outlined"}
                        visible={showTimeDropdown}
                        showDropDown={() => setShowTimeDropdown(true)}
                        onDismiss={() => setShowTimeDropdown(false)}
                        value={time}
                        setValue={setTime}
                        list={availableTimes}
                    />
                </View>
                <View style={{
                    justifyContent: 'flex-end', 
                    flex: 1,
                    alignSelf: 'center'
                }}>
                    <Button
                        mode="contained"
                        onPress={() => onSchedule()}
                        disabled={ !time || !inputDate || !numPeople || !email }
                    >
                        Schedule
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
}