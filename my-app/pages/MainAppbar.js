import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { ProgressViewIOSComponent, StyleSheet, View } from 'react-native';
import { Text, Menu, Button, Divider } from 'react-native-paper';
import { useState } from 'react';

export default function MainAppbar(props) {
    const theme = useTheme();

    const [isMainMenuVisible, setIsMainMenuVisible] = useState(false);

    const handleMenuItemClick = (page) => {
        props.setPage(page);
        setIsMainMenuVisible(false);
    };

    const menu = (<Menu
        visible={isMainMenuVisible}
        onDismiss={() => {setIsMainMenuVisible(false)}}
        anchor={<Appbar.Action icon="menu" onPress={() => {setIsMainMenuVisible(true)}} />}>
        <Menu.Item onPress={() => {handleMenuItemClick("home")}} title="Home" />
        <Menu.Item onPress={() => {handleMenuItemClick("appointments")}} title="Appointments" />
        {/* <Menu.Item onPress={() => {handleMenuItemClick("about")}} title="About" /> */}
        <Menu.Item onPress={() => {handleMenuItemClick("reviews")}} title="Reviews" />
    </Menu>);

    return (
        <View>
            <Appbar.Header
                style={{
                    backgroundColor: theme.colors.accent,
                }}
                mode="center-aligned"
            >
                {menu}
                <Text style={{ fontFamily: "DancingScript", color: theme.colors.primary, fontSize: 25, textAlign:'center' }}> Adell's Chocolate Factory</Text>
                {/* <Appbar.Action icon="account" onPress={() => {}} /> */}
                
            </Appbar.Header>
        </View>
    );
}