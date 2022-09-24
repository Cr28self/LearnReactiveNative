import React, {useState} from 'react';
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

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Components/screens/HomeScreen';
import DetailScreen from './src/Components/screens/DetailScreen';

const Stack = createNativeStackNavigator();
//스택 네비게이터 생성
//이 안에 Stack.Navigator 컴포넌트와 Stack.Screen 컴포넌트가 있음
// - Stack.Navigator 컴포넌트는 NavigationContainer 사이에 넣어야 정상적으로 작동함.
// - Stack.Screen 컴포넌트를 사용해 각 화면을 설정 할 수 있음
// - 이 컴포넌트에 설정된 name은 화면의 이름을 설정하는 Props입니다.
// - 이 값은 다른 화면으로 이동하거나 현재 화면이 어떤 화면인지 조회할때 사용합니다.
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '집',

            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            //헤더 블록에 대한 스타일

            headerTintColor: '#ffffff',
            //헤더의 텍스트, 버튼 색상

            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            //헤더의 타이틀 텍스트의 스타일
          }}

        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/*
<화살표 함수>
<화살표 함수를 호출할 때 바로 반환하는 경우에는 중괄호와 return을 생략 가능>
const add = (a,b) => {return a+b};
const add = (a,b) => a+b;

const createObject =(a,b) => ({a,b})
const createObject = (a,b) => { return {a,b}}
바로 반환하는 값이 객체 타입이라면 객체를 소괄호로 감싸줘야 합니다.
* */

{
  /*
        네비게이션 설정

        React의 History기능 ( Stack 자료구조 사용 )과 비슷한 Native Stack Navigator 사용
        안드로이드 -- Fragment / IOS : UINavigationController 이용해서 일반 네이티브 앱과 정확히 동일한 방식으로 화면을 관리
        새로운 주소 이동 : push
        뒤로 가기  : pop

        <화면 전용 컴포넌트는 screen폴더에 배치>
        <이름 뒤에 항상 Screen으로 끝나게>

        */
}

export default App;
