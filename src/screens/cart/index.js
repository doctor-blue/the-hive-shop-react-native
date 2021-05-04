'use strict';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

const CartScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Cart</Text>
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

export default CartScreen;