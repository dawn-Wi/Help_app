
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';


class OnePage extends Component {

    render() {
    return (
    <View style={styles.background}>
        <Text style={styles.textStyle}>One Page </Text>
        <Button
            title='Two Page'
            onPress={()=>{
            this.props.navigation.navigate('Two')
        }}
        />
    </View>
    )
    }
}

    const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'    
    },
    textStyle: {
        margin: 10,
        fontSize: 20
    }
    })
    
    export default OnePage;