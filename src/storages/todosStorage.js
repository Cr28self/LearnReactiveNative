import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

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

//AsyncStorage 모듈화 해서 사용하기!!!!!!!!!!!
const key = 'todos';

const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);
      if (!rawTodos) {
        // 저장된 데이터가 없을 경우
        throw new Error('No saved todos');
      }
      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error('Failed to load todos');
    }
  },

  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save todos');
    }
  },
};

export default todosStorage;

/*
 * AsyncStorage는 간편하지만 다루는 데이터의 규모가 커지면 성능이 떨어집니다!!!
 *   - 이를 대신해서 realm, react-native-sqlite-storage가 있습니다..
 *   - 안드로이드의 AsyncStorage는 이미 SQLite를 사용하긴 하지만 react-native-sqlite-storage 사용하면
 *       인덱싱 기능 지원 받을 수 있고, 다양한 기능 사용 가능합니다.
 * 문자열 타입으로만 저장할 수 있기 때문에 데이터가 많아질 수록 속도가 느려집니다.
 * 검색 or 정렬 기능이 지원되지 않습니다.
 *
 * */
