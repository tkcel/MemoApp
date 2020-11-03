import React from 'react';
import { StyleSheet, View, Text} from "react-native";

class Appbar extends React.Component {
    render() {
        return(
            <View style={styles.appbar}>

                <View>
                    <Text style={styles.appbarTitle}>
                        TKC MEMO
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appbar : {
        position : 'absolute',
        top : 0,
        left : 0,
        right : 0,
        height : 78,
        paddingTop : 30,
        backgroundColor: '#2bddca',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor : '#000000',
        shadowOffset : {width: 0, height: 0},
        shadowOpacity : 0.6,
        shadowRadius : 3,
        zIndex : 10
    },
    appbarTitle : {
        color : '#fff',
        fontSize : 18,
    },
});

export default Appbar;