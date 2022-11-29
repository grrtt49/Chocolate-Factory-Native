import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { Rating, AirbnbRating } from 'react-native-ratings';
import CustomerRating from "../components/CustomerRating";

export default function ReviewsPage(props) {
    const [reviewName, setReviewName] = useState("");
    const [review, setReview] = useState("");
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewRating, setReviewRating] = useState(0);

    const [ratings, setRatings] = useState([
        {
            title: "These are the BEST chocolates out there!",
            author: "Diana Stewart",
            review: "I've been to many chocolate stores out there, but none are quite like Adell's!",
            stars: 5,
        },
    
        {
            title: "We had the best time there",
            author: "Josh Alderman",
            review: "The costomer service at Adell's is amazing! They always make sure you leave happy and satisfied!",
            stars: 5,
        },
    
        {
            title: "The people at Adell's are always so helpful",
            author: "Beatrice Clark",
            review: "Every time I go to Adell's they are always so helpful, they can even teach you some chocolate making tricks if you want to make your own!",
            stars: 5,
        },
    ]);

    const addReview = (title, author, review, stars) => {
        setRatings(
            (current) => [
                ...current, 
                {
                    title: title, 
                    author: author, 
                    review: review, 
                    stars: stars
                }
            ]
        );
    }

    const onRating = (num) => {
        setReviewRating(num);
    };

    const onSubmitReview = () => {
        addReview(reviewTitle, reviewName, review, reviewRating);
        setReviewTitle("");
        setReviewName("");
        setReview("");
        props.setSnackbar("Thanks for your feedback!");
    };

    const allReviews = ratings.map((rating, index) => {
        return <CustomerRating key={index} rating={rating} />
    });

    return (
        <ScrollView
            style={{
                flex: 1,
            }}
        >
            <View
                style={{
                    padding: 20,
                }}
            >
                {allReviews}   
            </View>
            <Text variant="headlineMedium" style={{textAlign: "center"}}>
                Leave a review
            </Text>
            <AirbnbRating
                defaultRating={0}
                size={30}
                showRating={false}
                onFinishRating={onRating}
            />
            <View style={{
                flex: 1, 
                direction:"row",
                marginTop: 20
            }}>
                <TextInput 
                    label="Your name"
                    mode="outlined"
                    autoComplete="name"
                    value={reviewName}
                    onChangeText={(text) => {setReviewName(text)}}
                    style={{width: 250, alignSelf: "center"}}
                />
            </View>
            <View style={{
                flex: 1, 
                direction:"row",
                marginTop: 20
            }}>
                <TextInput 
                    label="Review Title"
                    mode="outlined"
                    autoComplete="name"
                    value={reviewTitle}
                    onChangeText={(text) => {setReviewTitle(text)}}
                    style={{width: 250, alignSelf: "center"}}
                />
            </View>
            <View style={{
                flex: 1, 
                direction:"row",
                marginTop: 20
            }}>
                <TextInput 
                    label="Review"
                    mode="outlined"
                    autoComplete="name"
                    value={review}
                    onChangeText={(text) => {setReview(text)}}
                    style={{width: 250, alignSelf: "center"}}
                    multiline={true}
                    numberOfLines={3}
                />
            </View>
            <View style={{
                flex: 1, 
                direction:"row",
                margin: 20
            }}>
                <Button
                    mode="contained"
                    style={{alignSelf: "center"}}
                    onPress={() => onSubmitReview()}
                >
                    Submit
                </Button>
            </View>
        </ScrollView>
    );
}