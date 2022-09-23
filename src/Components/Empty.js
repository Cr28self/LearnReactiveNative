import React,{ useState } from 'react';
import {
    Alert,
    Button, Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';


function Empty(){
    return(
        <View style={styles.block}>
            <Image source={require("../../assets/images/circle.png")} />
            <Text style={styles.description}>할일 없음!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 24,
        color: '#9e9e9e',
    },
});


/*
flex: 1, --> 자신이 차지할 수 있는 모든 영역 차지
    alignItems: 'center',
    justifyContent: 'center',
    -->>> 둘다 center이면 내용이 중앙에 위치하게 됨
    
    상위 영역 ( SafeAreaView )이 화면의 전체 영역을 사용하고 있지 않고 일부만 사용하고 있었기에
    SafeAreaView에 flex:1 속성을 부여해야 한다..
    -->> 그래야 Empty의 flex 속성이 제대로 작동됨 ㅇㅇ
    */
export default Empty;