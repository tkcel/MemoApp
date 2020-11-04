import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import CircleButton from "../elements/CircleButton";

class MemoDetailScreen extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.memoHeader}>
                    <View>
                        <Text style={styles.memoHeaderTitle}>
                            講座のアイデア
                        </Text>
                        <Text style={styles.memoHeaderDate}>
                            2020/11/3
                        </Text>
                    </View>
                </View>
                <View style={styles.memoContents}>
                    <Text>
                        講座のアイデアです。
                    </Text>
                </View>

                <CircleButton color="white" style={styles.editButton}>
                    <Icon name="pencil" size={22} color='#ff52dc'/>
                </CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : '100%',
    },
    memoHeader : {
        height : 100,
        backgroundColor : '#265fdd',
        justifyContent : 'center',
        padding : 10,
    },
    memoHeaderTitle : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#fff',
        marginBottom : 4,
    },
    memoHeaderDate : {
        fontSize : 12,
        color : '#fff',
    },
    memoContents : {
        paddingTop : 30,
        paddingRight : 20,
        paddingLeft : 20,
        paddingBottom : 20,
        backgroundColor: '#fff',
        flex : 1,

    },
    editButton : {
        top : 75,
    },
});

export default MemoDetailScreen;