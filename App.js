import React,{ useState } from 'react';
import {
    Alert,
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import DateHead from "./src/Components/DateHead";
import {SafeAreaProvider} from "react-native-safe-area-context";
import AddTodo from "./src/Components/AddTodo";
import Empty from "./src/Components/Empty";



const App = () => {

    const today = new Date();
    console.log(today);
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.block} edges={['bottom']}>
                <DateHead date={today}/>
                <Empty />

                <AddTodo />
            </SafeAreaView>

        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
    block: {
        flex :1,
    },
})

export default App;
