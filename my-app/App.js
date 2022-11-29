import { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, useTheme, Snackbar } from 'react-native-paper';
import MainAppbar from './pages/MainAppbar';
import { useFonts } from 'expo-font';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SchedulePage from './pages/SchedulePage';
import ReviewsPage from './pages/ReviewsPage';
import AppointmentsPage from './pages/AppointmentsPage';

export default function App() {
  const [page, setPage] = useState("home");
  const [snackbarText, setSnackbarText] = useState("");
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments((current) => [...current, appointment]);
  };

  const removeAppointment = (appointmentIndex) => {
    setAppointments((current) => current.filter((appointment, index) => index != appointmentIndex));
  };

  const [fontsLoaded] = useFonts({
    'DancingScript': require('./assets/fonts/DancingScript.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: '#917236',
      accent: '#f1e9da',
      subtitle: '#dddddd',
    },
  }

  const setSnackbar = (text) => {
    setSnackbarText(text);
  };

  let pageView = "";
  switch(page) {
    case "home":
      pageView = <HomePage setPage={setPage} setSnackbar={setSnackbar} />;
      break;
    case "about":
      pageView = <AboutPage setPage={setPage} setSnackbar={setSnackbar} />;
      break;
    case "appointments":
      pageView = <AppointmentsPage setPage={setPage} setSnackbar={setSnackbar} appointments={appointments} removeAppointment={removeAppointment} />;
      break;  
    case "schedule":
      pageView = <SchedulePage setPage={setPage} setSnackbar={setSnackbar} addAppointment={addAppointment} />;
      break;
    case "reviews":
      pageView = <ReviewsPage setPage={setPage} setSnackbar={setSnackbar} />;
      break;
  }

  return (
    <PaperProvider theme={theme}>
      <MainAppbar setPage={setPage} />
      {pageView}
      <Snackbar
        visible={snackbarText != ""}
        onDismiss={() => setSnackbarText("")}
        duration={2000}
      >
        {snackbarText}
      </Snackbar>
    </PaperProvider>
  );
}