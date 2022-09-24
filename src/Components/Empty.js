import React, {useState} from 'react';
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


function Empty() {
    return (
        <View style={styles.block}>
            <Image style={styles.image} resizeMode="contain"
                   source={require("../../assets/images/young_and_happy.png")}/>
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
    image: {
        width: 240,
        height: 179,
        marginBottom: 16,


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

    스타일로 이미지 크기를 조정할 때 실제 이미지 크기와 값이 다르다면 이미지는 리사이징 된다!!

    resizeMode
    - cover : resizeMode의 기본값, 이미지의 가로 세로 비율을 유지한 상태로 이미지를 리사이징 합니다.
               이미지와 뷰의 가로세로 비율이 일치하지 않을 경우 이미지의 일부분이 잘립니다.

   - contain : 이미지의 가로 세로 비율을 유지한 상태로 이미지를 리사이징 하며,
                이미지의 모든 영역이 뷰 안에 보이게 합니다.

   - stretch : 뷰의 크기대로 이미지를 리사이징 합니다.
    */
export default Empty;