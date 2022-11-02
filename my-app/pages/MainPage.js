import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function MainPage() {
    const theme = useTheme();

    return (
        <Appbar.Header
            style={{
                backgroundColor: theme.colors.accent
            }}
        >
            {/* <Appbar.Content title="Adell's Chocolate Factory" color={theme.colors.accent} style={{fontFamily: "DancingScript"}} /> */}
            <Text style={{ fontFamily: "DancingScript", color: theme.colors.primary, fontSize: 25 }}>Adell's Chocolate Factory</Text>
        </Appbar.Header>
    );
}