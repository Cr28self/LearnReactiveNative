import React, {useState} from 'react';
import {
    Alert,
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TextInput,
    useColorScheme,
    Image,
    View, TouchableOpacity, TouchableNativeFeedback, Keyboard,
} from 'react-native';


function AddTodo({onInsert}) {

    const [text, setText] = useState('');


    const onPress = ()=>{
        onInsert(text)
        setText('');
        Keyboard.dismiss(); //현재 나타난 키보드 닫음
    }
    const button = (
        <View style={styles.buttonStyle}>
            <Image source={require("../../assets/icons/add_white/add_white.png")}/>
        </View>
    );

    return (
        <View style={styles.block}>
            <TextInput style={styles.input} placeholder="할 일을 입력하세요." value={text}
                       onSubmitEditing={onPress} returnKeyType="done" onChangeText={setText}/>
            {/* onSubmitEditin : 키보드의 Enter를 눌렀을때 호출되는 함수
                returnKeyType : Enter의 타입,모양을 지정해줌 ( ios에서 키보드 Enter대신에 done으로 표기 가능
                                    안드로이드는 상관 X  */}
            {
                Platform.select({
                    ios:
                        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                            {button}
                        </TouchableOpacity>,
                    android:
                        <View styles={styles.circleWrapper}>
                            <TouchableNativeFeedback onPress={onPress}>
                                {button}
                            </TouchableNativeFeedback>

                        </View>
                })





            }


        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 64,
        paddingHorizontal: 16,
        borderColor: '#bdbdbd',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',


    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
    },
    buttonStyle: {
        alignItem: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
        width: 40,
        height: 40,
        backgroundColor: '#26a69a',
        borderRadius: 24,


    },
    circleWrapper: {
        overflow: 'hidden',
        borderRadius: 24,

    }
});

export default AddTodo;