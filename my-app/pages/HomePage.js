import { View, Image, ScrollView } from "react-native";
import { Button, Text } from "react-native-paper";

export default function HomePage(props) {
    return (
        <ScrollView>
            <Image 
                source={require('../assets/chocolates.jpg')}
            />
            <Text
                variant="displaySmall"
                style={{
                    fontFamily: "DancingScript",
                    textAlign: "center",
                    marginTop: 20,
                }}
            >
                Welcome to Adell's!
            </Text>
            <View
                style={{
                    padding: 20,
                }}
            >
                <Text
                    variant="titleMedium"
                >
                    Come join us to start your chocolate-making journey!
                </Text>
                <Text
                    variant="bodyMedium"
                    style={{
                        marginTop: 10
                    }}
                >
                    In our interactive studio, we will teach you everything you need to know to become a master chocolate maker! We provide a fun and creative environment for groups of all ages. Schedule an appointment with us today!
                </Text>
                <View
                    style={{
                        direction: "row"
                    }}
                >
                    <Button
                        mode="contained"
                        onPress={() => props.setPage("schedule")}
                        style= {{
                            alignSelf: "flex-start",
                            marginTop: 20,
                        }}
                    >
                        Schedule an appointment
                    </Button>
                </View>
                <Text
                    variant="titleMedium"
                    style={{
                        marginTop: 20
                    }}
                >
                    People have many wonderful things to say about us!
                </Text>
                <Text
                    variant="bodyMedium"
                    style={{
                        marginTop: 10
                    }}
                >
                    Read our reviews to see what experiences people have when coming here! Also, you can leave your own review about your own adventures at Adell's.
                </Text>
                <View
                    style={{
                        direction: "row"
                    }}
                >
                    <Button
                        mode="contained"
                        onPress={() => props.setPage("reviews")}
                        style= {{
                            alignSelf: "flex-start",
                            marginTop: 20,
                        }}
                    >
                        Reviews
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
}