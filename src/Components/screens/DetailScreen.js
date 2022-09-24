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

function DetailScreen({route, navigation}) {
  useEffect(() => {
    navigation.setOptions({title: `상세 정보 - ${route.params.id}`});
  }, [navigation, route]);
  //헤더 제목 설정

  return (
    <View style={styles.block}>
      <Text style={styles.text}>id : {route.params.id}</Text>
      <View style={styles.buttons}>
        <Button
          title="다음"
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});

/*
screen으로 사용된 컴포넌트는 navigation외에 route라는 Props도 받아옴

route Props
{
  "key" : "aagseaedfsadsafs",  --> 화면의 고유ID, 새로운 화면이 나타날 때 자동으로 생성됨
  "name" : "Detail",           --> 화면 이름, App컴포넌트에서 네이티브 스택 네비게이터를 설정할때 지정한 이름
  "params" : {"id" : 1},       --> 우리가 화면 전환 시 지정한 라우트 파라미터!
}


* push와 navigate의 차이
- push는 화면이 전환될때마다 항상 화면이 stack에 쌓임 , 네이티브 stack네비게이터에서만 사용 가능
- navigate는 새로 이동할 화면이 현재 화면과 같으면 (같은 컴포넌트일때) 새로운 화면을 stack에 쌓지 않고 파라미터만 변경함!!!
* */

export default DetailScreen;
