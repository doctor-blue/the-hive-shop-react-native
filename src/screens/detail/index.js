'use strict';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

const ProductDetailScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Product Detail</Text>
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

export default ProductDetailScreen;