'use strict';

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import ImgBee from '../../assets/images/bee.png';
import Sizes from '../../constants/Sizes'
import TheHiveButton from '../../elements/TheHiveButton';
import TheHiveInput from '../../elements/TheHiveInput';
import Title from '../../elements/TheHiveTitle';


const LoginScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Image source = {ImgBee} 
                style={styles.logo}/>
            <View style={styles.title}>
                <Title text='WELCOME' />
                <Title text='BACK' />
            </View>
            <View style={styles.input}>
                <TheHiveInput hint='Username'
                    isPassword={false}/>
                <TheHiveInput hint='Password'
                    isPassword={true}/>
            </View>
            <View style={styles.button}>
                <TheHiveButton text='SIGN IN'
                    isActiveButton={true}/>

                <TheHiveButton text='SIGN UP'
                    isActiveButton={false}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        width: Sizes.logoSize,
        height: Sizes.logoSize,
        marginTop: Sizes.bigSpace,
        alignSelf: 'center',
    },

    title: {
        marginTop: Sizes.normalSpace,
    },

    input: {
        width: '100%',
        paddingHorizontal: '5%',
        marginTop: Sizes.bigSpace,
    },

    button: {
        width: '100%',
        paddingHorizontal: '25%',
        marginTop: Sizes.smallSpace,
        paddingBottom: 20,
    }
});

export default LoginScreen;