import React, {useState} from 'react';
import {
    Alert,
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    useColorScheme,
    FlatList,
    View,
} from 'react-native';
import TodoItem from "./TodoItem";

const TodoList = ({todos, onToggle,onRemove}) => {


    return (
        <FlatList
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
            style={styles.list} data={todos} renderItem={({item}) =>
            (<TodoItem id={item.id} text={item.text} done={item.done} onToggle={onToggle} onRemove={onRemove}/>)}
            keyExtractor={item => item.id.toString()}/>
        /*Props를 받아와서 FlastList의 data Props로 설정해주면 renderItem이라는 함수를 통해 배열 안의 각 원소들 데이터를 가리키는 뷰를 보여줌
        * Key Extractor Props는 각 항목의 고유 값을 추출해주는 함수이다. ( 고유값 id )
        * 리스트를 렌더링할때는 고유 값(string)이 있어야 합니다. ( 고유값 없을 때는 index를 사용함, But,이 방법은 내부에 변동사항 생기면 UI를 비효율적으로 업데이트  */
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1,
    }
})

export default TodoList;
