'use strict';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

const SettingScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Setting</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
    }
});

export default SettingScreen;