import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";

class MemoListScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <MemoList/>
                <CircleButton>
                    <Icon color="#fff" name='plus' size='22'/>
                </CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : '100%'
    }
});

export default MemoListScreen;