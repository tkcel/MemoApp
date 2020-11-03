import React from 'react';
import { StyleSheet, View, Text} from "react-native";

class CircleButton extends React.Component{
    render() {
        const {style, color} = this.props;

        let bgColor = '#ff52dc';
        let textColor = '#fff';

        if (color==='white'){
            bgColor = '#fff';
            textColor = '#ff52dc'
        }

        return(
            <View style={[styles.circleButton, style, {backgroundColor: bgColor}]}>
                <Text style={[styles.circleButtonTitle, {color : textColor}]}>
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
    },
});

export default CircleButton;