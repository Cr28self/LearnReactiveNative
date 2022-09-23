import {Alert, Button, StyleSheet, View, Text} from 'react-native';
import React from "react";

/*props를 구조분해 할당해서 사용*/
function Counter({count, onIncrease, onDecrease}) {

    return (

        <View style={styles.wrapper}>
            <View style={styles.numberArea}>
                <Text style={styles.number}>{count}</Text>

            </View>
            <Button title="+1" onPress={onIncrease}/>
            <Button title="-1" onPress={onDecrease}/>

        </View>
    )
};

const styles = StyleSheet.create({

    wrapper: {
        flex:1,
    },
    numberArea: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontSize: 72,
        fontWeight: 'bold',
        color:'red'
    },
});

export default Counter;