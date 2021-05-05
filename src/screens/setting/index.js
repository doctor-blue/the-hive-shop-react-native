'use strict';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Sizes from '../../constants/Sizes';
import Logo from '../../assets/images/the_hive_shop.png';
import Colors from '../../constants/Colors';
import Routes from '../../constants/Routes';

const ListItem = ({ title, info, onClick }) => {
    return (
        <TouchableOpacity style={listItemStyle.container}
            onPress= {onClick}>
            <Text style={listItemStyle.title}>{title}</Text>
            <Text style={listItemStyle.info}>{info}</Text>
            <Icon name='md-chevron-forward-outline' size={Sizes.actionIconSize}/>
        </TouchableOpacity>
    );
};

const listItemStyle = StyleSheet.create({
    container: {
        height: Sizes.settingItemHeight,
        paddingHorizontal: Sizes.tinySpace,
        marginTop: Sizes.tinySpace,
        flexDirection: 'row',
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        alignItems: 'center',
        borderRadius: Sizes.borderRadius
    },

    title: {
        flex: 1,
        fontSize: Sizes.normalText,
        color: Colors.textColor,
        fontWeight: 'bold',
    },

    info: {
        flex: 1,
        textAlign: 'right',
        color: Colors.textColor,
    }
});

const SettingScreen = ({ navigation }) => {

    const DATA = [
        {
            'title': 'Email',
            'info': 'example@gmail.com',
            'onClick': () => {}
        },
        {
            'title': 'Date Of Birth',
            'info': '01/01/2021',
            'onClick': () => {}
        },
        {
            'title': 'Gender',
            'info': 'Male',
            'onClick': () => {}
        },
        {
            'title': 'Phone Number',
            'info': '0987654321',
            'onClick': () => {}
        },
        {
            'title': 'Address',
            'info': 'Ha Noi',
            'onClick': () => {}
        },
        {
            'title': 'Change Password',
            'info': '',
            'onClick': () => {}
        },
        {
            'title': 'Logout',
            'info': '',
            'onClick': () => {navigation.navigate(Routes.Login)}
        }
    ]

    const renderItem = ({ item }) => (
        <ListItem
            title={item.title}
            info={item.info}
            onClick={item.onClick} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Icon name='arrow-back'
                size={Sizes.leadingIconSize}
                style={styles.navIcon}
                onPress={() => { navigation.goBack() }} />

            <Image source={Logo} style={styles.logo} />
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.title}
                style={styles} />
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Sizes.smallSpace,
    },

    logo: {
        width: 128,
        height: 128,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: Sizes.normalSpace
    },

    flatList: {
        flex: 1,
        marginVertical: Sizes.smallSpace,

    }
});

export default SettingScreen;