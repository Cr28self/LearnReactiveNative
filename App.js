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

import LearnBtn from './src/Components/LearnBtn';
import Box from "./src/Components/Box";
import Counter from "./src/Components/Counter";


const App = () => {

    const [visible, setVisible] = useState(true)
    const [count, setCounter] = useState(0)

    const onPress =()=>{
        setVisible(!visible)
    }

    const onIncreaseCounter =()=>{
        setCounter(count + 1)
    }
    const onDecreaseCounter =()=>{
        setCounter(count - 1)
    }
    return (
        <SafeAreaView style={styles.full}>
            <View>
                <LearnBtn onPress={onPress}/>
                {visible && <Box rounded size="large" color="pink"/>}
                ddd


            </View>
            <Counter count={count} onIncrease={onIncreaseCounter} onDecrease={onDecreaseCounter}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    full: {
        flex: 1,

    },
})


export default App;
