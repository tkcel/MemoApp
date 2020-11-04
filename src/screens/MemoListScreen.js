import React from 'react';
import {StyleSheet, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";

class MemoListScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <MemoList navigation={this.props.navigation}/>
                <CircleButton onPress={()=>{this.props.navigation.navigate('MemoEdit')}}>
                    <Icon color="#fff" name='plus' size='22'/>
                </CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : '100%',
        backgroundColor : '#fefedf',
    }
});

export default MemoListScreen;