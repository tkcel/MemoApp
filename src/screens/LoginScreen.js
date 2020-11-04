import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import CircleButton from "../elements/CircleButton";

class LoginScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.Title}>Login</Text>
                <TextInput style={styles.input} value='Email Adress'/>
                <TextInput style={styles.input} value='Password'/>
                <TouchableHighlight
                    style={styles.Button}
                    underlayColor='#ddd'
                >
                    <Text style={styles.buttonTitle}>
                        ログインする
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container  :{
        flex : 1,
        width : '100%',
        padding : 24,
        backgroundColor: '#fff'
    },
    Title : {
        fontSize : 28,
        fontWeight : 'bold',
        alignSelf : 'center',
        marginBottom: 24,
    },
    input : {
        backgroundColor : '#ddd',
        height : 48,
        marginBottom : 16,
        borderWidth : 1,
        borderColor : '#DDD',
        padding : 8,
    },
    Button :{
        backgroundColor : '#ff52dc',
        height: 48,
        borderRadius : 12,
        alignItems : 'center',
        justifyContent : 'center',
        width: '70%',
        alignSelf: 'center',
    },
    buttonTitle : {
        fontSize: 18,
        fontWeight: 'bold',
        color : '#fff',
    },
});

export default LoginScreen;