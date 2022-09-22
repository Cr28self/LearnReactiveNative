import {Alert, Button} from "react-native";
import React from "react";

const LearnBtn =(props) =>{
    const onPressLearnMore =() =>{
        Alert.alert('press')
    }
    return (
        <Button
            onPress={onPressLearnMore}
            title={props.title}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />

    )
}

export default LearnBtn;