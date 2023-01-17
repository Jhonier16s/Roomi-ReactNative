import * as React from 'react';
import {View, Text, StyleSheet}  from 'react-native';

export default function MotivationCard() {
    return (
        <View style={styles.container}>
        <Text>Card</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#e5edf9",
    },
})