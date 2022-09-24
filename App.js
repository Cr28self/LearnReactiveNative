import React, {useState, useEffect} from 'react';
import {
    Alert,
    Button,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList
} from 'react-native';
import DateHead from "./src/Components/DateHead";
import {SafeAreaProvider} from "react-native-safe-area-context";
import AddTodo from "./src/Components/AddTodo";
import Empty from "./src/Components/Empty";
import TodoList from "./src/Components/TodoList";
import AsyncStorage from "@react-native-community/async-storage";
import todosStorage from "./src/storages/todosStorage";


const App = () => {


    const today = new Date();
    const [todos, setTodos] = useState([
        {id: 1, text: '작업 환경 설정', done: true},
        {id: 2, text: 'RN 기초 공부', done: false},
        {id: 3, text: 'MakeTodoList', done: false},
        {id: 4, text: 'MakeTodoList', done: true},
        {id: 5, text: 'MakeTodoList', done: false}
    ])

    const onInsert = text => {
        //새로 등록할 항목의 id를 구함
        //등록된 항목 중에서 가장 큰 id를 구하고, 그 값에 1을 더함
        //만약 리스트가 비어있으면 1을 id로 사용합니다.
        const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

        const todo = {
            id: nextId,
            text,
            done: false,
        };
        setTodos(todos.concat(todo)) //concat는 append랑 비슷 , 불변성 해치지 않음
    };

    const onRemove = id => {
        const nextTodos = todos.filter(todo =>
            todo.id !== id
        )
        setTodos(nextTodos);
    };

    const onToggle = id => {
        const nextTodos = todos.map(todo =>
            todo.id === id ? {...todo, done: !todo.done} : todo);
        setTodos(nextTodos);

    }


    //불러오기
    useEffect(()=>{

        todosStorage.get().then(setTodos).catch(console.error);
    },[])

    //저장
    useEffect(()=>{
        todosStorage.set(todos).catch(console.error);
    },[todos]);
    //불러오기 후 저장해야함..



    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.block} edges={['bottom']}>
                <KeyboardAvoidingView behavior={Platform.select({ios: 'padding', android: undefined})}
                                      style={styles.avoid}>
                    <DateHead date={today}/>
                    {todos.length === 0 ? <Empty/> : <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>}

                    <AddTodo onInsert={onInsert}/>
                </KeyboardAvoidingView>

            </SafeAreaView>

        </SafeAreaProvider>

    )
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: 'white',
    },
    avoid: {
        flex: 1,
    }
})

/*

KeyboardAvoidingView 입력 창 클릭했을때 키보드가 밑에서 나타나면서 아래에 있는 컴포넌트를 가리는 걸 방지
- Props : padding, height, position
-- padding : 키보드가 열렸을때 뷰의 하단에 패딩을 설정함
-- height : 뷰의 높이 자체를 변경
-- position: 뷰의 위치를 설정함
< iphone에서는 props를 padding 또는 height로 설정해 주면 됨 >


Platform.OS 대신에 Platform.select 사용하기
- 이걸 사용하면 객체를 사용해 운영체제별로 어떤 속성을 적용할지 더욱 명시적인 코드를 작성해 표현 가능!!


*/


/*
수정하기 위해 이런식으로 객체, 배열 내용을 직접 수정하면 안됨
 --> 그 대신 기존 객체는 그대로 두고 새로운 객체를 만들어 원하는 값을 덮어씌워야 함
 --> 이런식으로 리액트에서 상태의 불변성을 지킴 ( 객체, 배열을 직접 수정하지 않음 )

 *리액트에서 불변성을 지켜야 하는 이유
 -> 렌더링 성능 최적화 방식 때문.
 -> 부모 컴포넌트가 리렌더링(상태가 업데이트 되어 다시 렌더링)되면 기본적으로 자식 컴포넌트들 또한 리렌더링 됩니다.
    즉, 작성한 함수들이 한번 더 호출되는 것. 
    * 문제는 변경 사항이 없을때도 리렌더링 됨..
    * 규모가 작을때는 상관 X, But 규모 커질때는 정말 컴포넌트에 변화가 발생했을때만 리렌더링하도록 최적화 시켜야함
    * 컴포넌트에 변화가 필요한지 알 수 있는 방법?
    * --->> Props의 변화를 통해 알 수 있음
    * -->>> 컴포넌트의 렌더링 성능을 최적화 하기 위해서는 이전 컴포넌트가 들고있던 Props와 새로 받아올 Props를 비교하는 과정이 필요
    *       <이 과정에서 불변성을 유지하는 것이 정말 중요>


    const numbers = [1,2,3]
    numbers.push(4)
    numbers[0] = 10
    numbers.splice(0,1)

    ===>> 이런식으로 리액트에서 상태 관리할 때는 직접 수정하면 안됨!!
    ==>> 이 대신 배열의 내장 함수를 활용해 새로운 배열을 생성하는 방식으로 배열의 상태를 업데이트 해주는 방식으로 해야
  - spread연산자 사용
  - concat 사용

  - 배열 내장 함수 filter 사용 , map 사용
    */

export default App;
