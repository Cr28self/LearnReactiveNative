import React, {useState} from 'react';
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
import {SafeAreaProvider} from 'react-native-safe-area-context';

function HeaderlessScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Text>헤더 없음</Text>
        <Button onPress={() => navigation.pop()} title="뒤로 가기" />
      </View>
    </SafeAreaView>
  );
}

export default HeaderlessScreen;
//헤더 없는 화면..
