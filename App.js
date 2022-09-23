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



const App = () => {

    const today = new Date();
    console.log(today);
    return(
        <SafeAreaView>
            <DateHead date={today}/>
        </SafeAreaView>

    )
}

export default App;
