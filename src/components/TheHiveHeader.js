'use strict';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import Sizes from '../constants/Sizes';
import Colors from '../constants/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TheHiveTitle from '../elements/TheHiveTitle';

const TheHiveHeader = (props) => {
    return(
        <View style={styles.container}>
            <IonIcon name='person-circle' size={Sizes.leadingIconSize} color={Colors.textColor} style={styles.leadingIcon} onPress={props.onLeadingIconPress} />
            <TheHiveTitle text='The Hive Shop' style={styles.title}></TheHiveTitle>
            <IonIcon name='ios-search' size={Sizes.actionIconSize} color={Colors.textColor} style={styles.actionIcon} onPress={props.onActionSearchPress} />
            <MaterialCommunityIcons name='cart-outline' size={Sizes.actionIconSize} color={Colors.textColor} style={styles.actionIcon} onPress={props.onActionCartPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: Sizes.headerHeight,
        width: '100%',
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
    },

    leadingIcon: {
        marginHorizontal: Sizes.tinySpace,
    },

    actionIcon: {
        marginRight: Sizes.iconSpace,
    }

});

export default TheHiveHeader;