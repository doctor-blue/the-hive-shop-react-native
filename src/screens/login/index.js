'use strict';

import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import ImgBee from '../../assets/images/bee.png';
import Sizes from '../../constants/Sizes'
import TheHiveButton from '../../elements/TheHiveButton';
import TheHiveInput from '../../elements/TheHiveInput';
import Title from '../../elements/TheHiveTitle';
import Routes from '../../constants/Routes';


const LoginScreen = ({navigation}) => {
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
                    isPassword={false}
                    />
                <TheHiveInput hint='Password'
                    isPassword={true}
                    />
            </View>
            <View style={styles.button}>
                <TheHiveButton text='SIGN IN'
                    isActiveButton={true}
                    />

                <TheHiveButton text='SIGN UP'
                    isActiveButton={false}
                    onPress={() => {navigation.navigate(Routes.Register)}}/>
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