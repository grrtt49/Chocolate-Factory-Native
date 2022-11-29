import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { Rating } from "react-native-ratings";

export default function CustomerRating(props) {
    const rating = props.rating;

    return (
        <Card
            style={{
                padding: 15,
                marginBottom: 15,
                elevation: 4
            }}
        >
            <View>
                <Rating 
                    imageSize={30}
                    startingValue={rating.stars}
                    readonly={true}
                />
            </View>
            <View>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold"
                    }}
                >
                    {rating.title}
                </Text>
            </View>
            <View>
                <Text
                    style={{
                        color: "#888888"
                    }}
                >
                    {rating.author}
                </Text>
            </View>
            <View>
                <Text>{rating.review}</Text>
            </View>
        </Card>
    );
}