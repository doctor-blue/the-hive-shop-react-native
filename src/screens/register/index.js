'use strict';

import React from 'react';
import { View, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ImgBee from '../../assets/images/bee.png';
import Sizes from '../../constants/Sizes'
import TheHiveButton from '../../elements/TheHiveButton';
import TheHiveInput from '../../elements/TheHiveInput';
import TheHiveTitle from '../../elements/TheHiveTitle';

const RegisterScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Icon name='arrow-back'
                    size={30}
                    style={styles.navIcon}
                    onPress={() => { navigation.goBack() }} />
                <Image source={ImgBee}
                    style={styles.logo} />
                <View style={styles.title}>
                    <TheHiveTitle text='CREATE ACCOUNT' 
                        isBig={true}/>
                </View>
                <View style={styles.input}>
                    <TheHiveInput hint='Username'
                        isPassword={false} />
                    <TheHiveInput hint='Password'
                        isPassword={true} />

                    <TheHiveInput hint='Retype Password'
                        isPassword={true} />
                </View>
                <View style={styles.button}>
                    <TheHiveButton text='SIGN UP'
                        isActiveButton={false}
                        onPress={() => { navigation.goBack() }} />
                </View>
            </ScrollView>
        </SafeAreaView>
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
    },

    navIcon: {
        marginTop: Sizes.tinySpace,
        marginLeft: Sizes.tinySpace,
    }

});

export default RegisterScreen;