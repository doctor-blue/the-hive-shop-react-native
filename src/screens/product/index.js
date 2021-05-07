'use strict'
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import TheHiveHeader from '../../components/TheHiveHeader';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';
import Routes from '../../constants/Routes';

const DATA = require('../../assets/data/products.json');

const ListItem = ({ title, url, price }) => {
    return (
        <View style={listItemStyle.container}>
            <Image source={{ uri: url }} style={listItemStyle.image} />
            <Text>{title}</Text>
            <Text>{price}$</Text>
        </View>
    );
};

const listItemStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 8,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: Sizes.borderRadius,
    },

    image: {
        width: 185,
        height: 150,
        resizeMode: 'cover',
        borderRadius: Sizes.borderRadius,
    },
});

const ProductScreen = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate(
                Routes.ProductDetail, {
                id: item.id,
                title: item.title,
                url: item.url,
                description: item.description,
                price: item.price
            }
            )
        }}>
            <ListItem
                title={item.title}
                url={item.url}
                price={item.price} />
        </TouchableOpacity>

    );

    return (
        <SafeAreaView style={styles.container}>
            <TheHiveHeader
                leading='person-circle'
                action1='ios-search'
                action2='cart-outline'
                title='The Hive Shop'
                onLeadingIconPress={() => { navigation.navigate(Routes.Setting) }}
                onActionSearchPress={() => { }}
                onActionCartPress={() => { navigation.navigate(Routes.Cart) }} />
            <FlatList
                style={styles.flatList}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    flatList: {
        marginTop: Sizes.tinySpace,
    }
});

export default ProductScreen;