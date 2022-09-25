import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  FlatList,
  View,
} from 'react-native';

function HomeScreen({navigation}) {
  //Screen으로 사용되는 컴포넌트는 navigation이라는 객체를 Props로 받아 올 수 있음 + route라는 props도 받음
  //이 객체를 사용해 다음과 같이 다른 화면으로 이동 가능

  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.navigate('Detail', {id: 1})}
      />
      <Button
        title="Detail 2 열기"
        onPress={() => navigation.navigate('Detail', {id: 2})}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => navigation.navigate('Detail', {id: 3})}
      />

        <Button title="Headerless 열기" onPress={()=>navigation.push('Headerless')} />
    </View>
  );
}
/*
라우트 파라미터
navigation.navigate('Detail', {id:1}) -> id값이 1인 데이터를 불러와서 화면에 보여주고 싶을때
navigation.push('Detail', {id:2})
마치 url의 파라미터 느낌? route에 담겨져 있음 ( route.params.id )
* */

export default HomeScreen;
