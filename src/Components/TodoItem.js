import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
    View, Image,
} from 'react-native';

const deleteIcon = <Icon name="delete" size={32} color="red"/>;
const TodoItem = ({id, text, done, onToggle, onRemove}) => {

    const remove = () => {
        Alert.alert('삭제', '정말로 삭제하시겠어요?', [{
            text: '취소', onPress: () => {
            }, style: 'cancel',
        },
            {
                text: '삭제', onPress: () => {
                    onRemove(id);
                }, style: 'destructive',
            },], {
            cancelable: true, onDismiss: () => {
            },
        },);
    };

    /* Alert.alert 함수의 파라미터 : 제목, 내용 버튼 배열, 옵션 객체
    * 버튼 배열에 넣는 버튼 객체에는 text값을 통해 버튼의 이름을 지정가능하고 onPress를 통해 버튼이 눌렸을때 호출할 함수 지정 가능
    * style은 cancel, default, destructive 값 설정 가능
    * 안드로이드는 버튼에 스타일 적용이 안됩니다!!!!!! ( 컴포넌트 직접 제작해야함!! )
    * 옵션 객체 cancelable 값을 통해 안드로이드에서 Alert 박스 바깥 영역을 터치하거나 뒤로가기 버튼 눌렀을때 Alert가 닫히도록 설정함
    * onDissmiss는 Alert가 닫힐때 호출되는 함수!!*/


    /* AsyncStorage == LocalStorage 이지만, AsyncStorage는 비동기적으로 동작한다!!!(Promise반환)
    * 값을 조회하거나 설정할 때 Promise를 반환합니다. */
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => {
                onToggle(id)
            }}>
                <View style={[styles.circle, done && styles.filled]}>
                    {
                        done && (
                            <Image source={require('../../assets/icons/check_white/check_white.png')}/>
                        )}
                </View>

            </TouchableOpacity>

            <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
            {done ?
                <TouchableOpacity onPress={remove}>
                    {deleteIcon}
                </TouchableOpacity> : (<View style={styles.removePlaceholder}/>)}
            {/* removePlaceholder : 아이콘이 보이지 않을 때도 삭제 아이콘이 보일 영역을 미리 차지해 두기 위해서..
                                    만약 이 작업을 하지 않으면 항목의 내용이 아주 긴 경우, 토글할때마다 텍스트가 보이는
                                   영역이 달라질 것이므로... */}

        </View>

    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        alignItem: 'center',
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: '#26a69a',
        borderWidth: 1,
        marginRight: 16,
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: '#212121',
    },
    filled: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26a69a',
    },
    lineThrough: {
        color: '#9e9e9e',
        textDecorationLine: 'line-through',
    },
    removePlaceholder: {
        width: 32,
        height: 32,
    }

});
export default TodoItem;