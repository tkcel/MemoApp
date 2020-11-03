import React from 'react';
import { StyleSheet, View, Text} from "react-native";

class CircleButton extends React.Component{
    render() {
        return(
            <View style={styles.circleButton}>
                <Text style={styles.circleButtonTitle}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleButton : {
        position : 'absolute',
        bottom : 32,
        right : 24,
        width : 48,
        height : 48,
        backgroundColor : '#ff52dc',
        borderRadius : 24,
        justifyContent : 'center',
        alignItems : 'center',
        shadowColor : '#000000',
        shadowOffset : {width: 0, height: 2},
        shadowOpacity : 0.6,
        shadowRadius : 3,
    },
    circleButtonTitle : {
        fontSize : 32,
        lineHeight : 32,
        color : '#fff',
    },
});

export default CircleButton;