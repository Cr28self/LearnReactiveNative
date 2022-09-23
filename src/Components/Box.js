import {Alert, Button, StyleSheet, View} from 'react-native';
import React from "react";

/*props를 구조분해 할당해서 사용*/
function Box({rounded, size, color }) {

    return <View style={[styles.box, rounded ? styles.rounded : null, sizes[size], {
        backgroundColor: color,
    }]}/>
};

Box.defaultProps = {
    size: 'medium',
    color: 'black',
};


const styles = StyleSheet.create({
    box: {
        width: 64,
        height: 64,
        backgroundColor: 'black',
    },
    rounded: {
        borderRadius: 16,
    },
    small: {
        width: 32,
        height: 32,
    },
    medium: {
        width: 64,
        height: 64,
    },
    large: {
        width: 128,
        height: 128,
    },
});

const sizes = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,

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
- 여러 스타일을 적용하고 싶다면 배열 형태로 설정해야함 style={[styles.box, styles.rounded]}

*/
export default Box;