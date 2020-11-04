import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from "react-native";


class LoginScreen extends React.Component {
    state = {
        email : '',
        password : '',
    }

    handleSubmit(){
         // Login
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.Title}>Login</Text>
                <TextInput style={styles.input} value={this.state.email}
                           onChangeText={(text)=>{this.setState({email:text})}}
                           autoCapitalize="none"
                           autoCorrect={false}
                           placeholder="Email Adders"
                />
                <TextInput style={styles.input} value={this.state.password}
                           onChangeText={(text)=>{this.setState({password : text})}}
                           autoCapitalize="none"
                           autoCorrect={false}
                           placeholder={"Password"}
                           secureTextEntry

                />
                <TouchableHighlight
                    style={styles.Button}
                    underlayColor='#b318b5'
                    onPress={this.handleSubmit.bind(this)}
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