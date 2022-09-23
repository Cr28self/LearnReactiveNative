import {Alert, Button, StyleSheet} from 'react-native';
import React from "react";

const LearnBtn = (props) =>{

    return (
        <>
            <Button
                onPress={props.onPress}
                title={props.title}
                style={styles.container}
                accessibilityLabel="Learn more about this purple button"
            />

        </>


    )
}

/*기본 Props*/
LearnBtn.defaultProps = {
    title: 'Default_Props',
}


/*
리액트 네이티브에서는 별도의 CSS파일에 스타일을 작성하지 않고 JS파일 안에서 StyleSheet이라는 것을 사용한다..

- 셀렉터라는 개념이 존재하지 않는다.
- 모든 스타일 속성은 camelCase로 작성해야 한다.
- display 속성은 기본적으로 flex이다. 다른 값은 none밖에 존재하지 않음
- flexDirection 속성의 기본값은 웹에서는 row이지만, RN에서는 column 이다.
- RN에서 스타일링할때 숫자 단위는 dp뿐이다.
- background --> backgroundColor 사용해야
- border대신 borderWidth, borderStyle, borderColor등을 따로따로 설정해야함.
- flex: 1 ==>> 해당 View가 차지할 수 있는 모든 영역 차지
*/
const styles = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        color:'black',
        borderWidth: 4,
        borderStyle:'solid',
        borderColor: 'blue'

    },
    title: {
        fontSize:24,
        fontWeight:'bold'

    }
})



export default LearnBtn;