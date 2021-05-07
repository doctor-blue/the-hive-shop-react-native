'use strict';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Sizes, { tinySpace } from '../../constants/Sizes';
import Colors from '../../constants/Colors';
import TheHiveButton from '../../elements/TheHiveButton';
import cartItems from '../../assets/data/CartItem';

const ProductDetailScreen = ({ route, navigation }) => {

    const { id, title, url, description, price } = route.params;
    const [counter, setCounter] = useState(0);

    const addToCart = () => {
        let cart = {
            'id': id,
            'title': title,
            'url': url,
            'price': price,
            'amount': counter,
        };
        if (cartItems.items.length == 0) {
            cartItems.items.push(cart);
        } else {
            let isSame = false;
            cartItems.items.filter(item => {
                if (item.id == cart.id) {
                    item.amount = cart.amount;
                    isSame = true;
                }
            });
            if (!isSame) {
                cartItems.items.push(cart);
                isSame = false;
            }
        }
        
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Icon name='arrow-back'
                    size={Sizes.leadingIconSize}
                    style={styles.navIcon}
                    onPress={() => { navigation.goBack() }} />
                <Image
                    source={{ uri: url }} style={styles.image} />
                <View style={styles.rowContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}$</Text>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.counterContainer}>
                        <TouchableOpacity style={styles.counterIcon} onPress={() => { if (counter > 0) setCounter(counter - 1) }}>
                            <Icon name='ios-remove-circle-outline' size={Sizes.leadingIconSize} />
                        </TouchableOpacity>
                        <Text style={styles.counterText}>{counter}</Text>
                        <TouchableOpacity style={styles.counterIcon} onPress={() => { setCounter(counter + 1) }}>
                            <Icon name='md-add-circle-outline' size={Sizes.leadingIconSize} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TheHiveButton text='ADD TO CART'
                            isActiveButton={true}
                            onPress={addToCart} />
                    </View>
                </View>
                <Text style={styles.detail}>{description}</Text>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    navIcon: {
        marginTop: Sizes.tinySpace,
        marginLeft: Sizes.tinySpace,
    },

    image: {
        marginTop: Sizes.tinySpace,
        width: '100%',
        height: 450,
        resizeMode: 'cover',
    },

    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.tinySpace,
        height: Sizes.headerHeight
    },

    title: {
        fontSize: Sizes.bigText,
        color: Colors.textColor,
        fontWeight: 'bold',
        flex: 1,
    },

    price: {
        fontSize: Sizes.normalText,
        color: Colors.textColor,
        fontWeight: 'bold',
    },

    counterContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.tinySpace,
    },

    counterText: {
        width: Sizes.bigSpace,
        fontSize: Sizes.normalText,
        textAlign: 'center'
    },

    buttonContainer: {
        marginRight: Sizes.normalSpace
    },

    detail: {
        margin: tinySpace,
        textAlign: 'justify',
    }

});

export default ProductDetailScreen;