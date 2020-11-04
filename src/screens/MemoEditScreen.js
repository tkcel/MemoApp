import React from 'react';
import {StyleSheet, View, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

import CircleButton from "../elements/CircleButton";


class MemoEditScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.MemoEditInput}
                    multiline

                />
                <CircleButton>
                    <Icon name='check' color='#fff' size='22'/>
                </CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container  :{
        flex : 1,
        width : '100%',
    },
    MemoEditInput : {
        backgroundColor : '#ddd',
        flex: 1,
        paddingTop : 32,
        paddingLeft : 16,
        paddingRight : 16,
        paddingBottom : 16,
        fontSize : 16,
    },
});

export default MemoEditScreen;