'use strict';
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TheHiveButton from '../../elements/TheHiveButton';
import Sizes from '../../constants/Sizes';
import Colors from '../../constants/Colors';

import cartItems from '../../assets/data/CartItem';


const CartScreen = ({ navigation }) => {

    const calculateTotal = () => {
        let sum = 0;
        for (let i = 0; i < cartItems.items.length; i++) {
            sum += parseFloat(cartItems.items[i].amount) * parseFloat(cartItems.items[i].price);
        }
        cartItems.total = sum;
        return sum;
    }

    const [total, setTotal] = useState(calculateTotal);

    const ListItem = ({ id, title, url, price, amount }) => {

        const [counter, setCounter] = useState(amount);
    
        return (
            <View style={itemStyle.container}>
                <View style={itemStyle.imageContainer}>
                    <Image source={{ uri: url }}
                        style={itemStyle.image}></Image>
                </View>
                <View style={itemStyle.infoContainer}>
                    <Text style={itemStyle.title}>{title}</Text>
                    <Text style={itemStyle.title}>{price}$</Text>
                    <View style={itemStyle.counterContainer}>
                        <TouchableOpacity style={styles.counterIcon}
                            onPress={
                                () => {
                                    const swap = counter - 1
                                    if (counter > 0) {
                                        setCounter(swap);
                                        cartItems.items.find(element => element.id == id).amount = swap;
                                        setTotal(calculateTotal);
                                    }
                                }
                            }>
                            <Icon name='ios-remove-circle-outline' size={Sizes.leadingIconSize} />
                        </TouchableOpacity>
                        <Text style={itemStyle.counterText}>{counter}</Text>
                        <TouchableOpacity style={styles.counterIcon}
                            onPress={
                                () => {
                                    const swap = counter + 1
                                    setCounter(swap);
                                    cartItems.items.find(element => element.id == id).amount = swap;
                                    setTotal(calculateTotal);
                                }
                            }>
                            <Icon name='md-add-circle-outline' size={Sizes.leadingIconSize} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
    
    const itemStyle = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.white,
            shadowColor: Colors.black,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 1,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: Sizes.borderRadius,
            marginBottom: Sizes.tinySpace,
        },
    
        imageContainer: {
            flex: 1,
            height: 150,
    
        },
    
        image: {
            flex: 1,
            resizeMode: 'cover',
            borderRadius: Sizes.borderRadius,
        },
    
        infoContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    
        title: {
            fontSize: Sizes.normalText,
            fontWeight: 'bold',
            color: Colors.textColor,
        },
    
        counterContainer: {
            flexDirection: 'row',
        },
    
        counterText: {
            width: Sizes.bigSpace,
            fontSize: Sizes.normalText,
            textAlign: 'center'
        },
    });

    const renderItem = ({ item }) => (
        <ListItem
            id={item.id}
            title={item.title}
            url={item.url}
            price={item.price}
            amount={item.amount}/>
    );

    const onBuyPressed = () => 
        Alert.alert(
            'ARE YOU SURE',
            'You want to pay ' + total + '$ for it',
            [
                {
                    text: 'NO',
                    onPress: () => { }
                },
                {
                    text: 'YES',
                    onPress: () => {
                        for(let i = cartItems.items.length; i > 0; i--) {
                            cartItems.items.pop();
                        }
                        cartItems.total = 0;
                        navigation.goBack();
                    },
                },
            ]
        )

    return (
        <SafeAreaView style={styles.container}>
            <Icon name='arrow-back'
                size={30}
                style={styles.navIcon}
                onPress={() => { navigation.goBack() }} />
            <FlatList
                data={cartItems.items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.flatList} />
            <View>
                <View style={styles.rowContainer}>
                    <Text style={styles.totalLable}>Total:</Text>
                    <Text style={styles.total}>{total}$</Text>
                </View>
                <TheHiveButton text='BUY'
                    onPress={onBuyPressed} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Sizes.tinySpace,
    },

    flatList: {
        flex: 1,
        marginTop: Sizes.tinySpace,
    },

    rowContainer: {
        flexDirection: 'row',
    },

    bottom: {

    },

    totalLable: {
        flex: 1,
        fontSize: Sizes.normalText,
        fontWeight: 'bold',
        color: Colors.textColor
    },

    total: {
        fontSize: Sizes.normalText,
        color: Colors.textColor
    }

});

export default CartScreen;